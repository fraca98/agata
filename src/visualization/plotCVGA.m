function plotCVGA(glucoseProfiles,varargin)
%plotCVGA function that plots the control variablity grid analysis (CVGA).
%
%Input:
%   - glucoseProfiles: a cell array of timetables each with column `Time` and 
%   `glucose` containing the glucose data to analyze (in mg/dl). 
%   - PlotZoneNames (optional, default: 1): a numerical flag defining whether to 
%   plot the zone names in the CVGA plot or not. Can be 0 or 1.
%   - HighlightBestControl (optional, default: 1): a numerical flag defining whether to 
%   highlight the best controlled profile in the CVGA plot or not. Can be 0 or 1.
%   - FontSize (optional, default: 16): a scalar defining the font size of
%   the CVGA plot.
%   - PrintFigure: (optional, default: 0) a numeric flag defining whether 
%   to output the .pdf files associated to the generated CVGA. 
%
%Preconditions:
%   - glucoseProfiles must be a cell array containing timetables;
%   - Each timetable in glucoseProfiles must have a column names `Time` and a
%   column named `glucose`.
%
% ------------------------------------------------------------------------
% 
% REFERENCE:
%  - Magni et al., "Evaluating the efficacy of closed-loop glucose 
%  regulation via control-variability grid analysis", Journal of Diabetes 
%  Science and Technology, 2008, vol. 2, pp. 630-635. DOI:
%  10.1177/193229680800200414.
%
% ------------------------------------------------------------------------
%
% Copyright (C) 2020 Simone Del Favero
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------
    
    %Input parser and check preconditions
    defaultPlotZoneNames = 1;
    defaultHighlightBestControl = 1;
    defaultFontSize = 16;
    defaultPrintFigure = 0;
    

    params = inputParser;
    params.CaseSensitive = false;
    
    validScalar = @(x) isnumeric(x) && isscalar(x) && (x>=0);
    
    addRequired(params,'glucoseProfiles',@(x) validGlucoseProfiles(x));
    addParameter(params,'PlotZoneNames',defaultPlotZoneNames,@(x) x == 1 || x == 0);
    addOptional(params,'HighlightBestControl',defaultHighlightBestControl,@(x) x == 1 || x == 0);
    addOptional(params,'FontSize',defaultFontSize,validScalar);
    addParameter(params,'PrintFigure',defaultPrintFigure, @(x) x == 0 || x == 1);

    parse(params,glucoseProfiles,varargin{:});
    
    plotZoneNames=params.Results.PlotZoneNames;
    highlightBestControl=params.Results.HighlightBestControl;
    fontSize=params.Results.FontSize;
    printFigure = params.Results.PrintFigure;
    
    %Add CVGA function to path
    addpath(genpath(fullfile('..','variabilityMetrics')));
    
    %Compute CVGA for each profile
    [~,profileCoordinates,~,bestControlledCoordinates]=CVGA(glucoseProfiles);

    %Circle radius
    r=[20 40 60];
    Vcolor=[0 1 0;...                   %A
            7/255 135/255 0/255;        %B
            1 1 0;                      %C
            1 0 0];                     %D

    figure;
    hold on
    
    %fill zone D
    fill([0 60 60 0],[0 0 60 60],Vcolor(end,:));
    
    %fill zone C, B, A
    for index=3:-1:1
        
        x=r(index):-r(index)/10000:0;
        y=sqrt(r(index)^2-x.^2);
        plot(x,y,'k');
        fill([x 0],[y 0],Vcolor(index,:))
        
    end

    %Plot zone names if requested
    if plotZoneNames
        text(8,8,'A','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold','FontWeight','bold');
        text(10,30,'Upper B','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold');
        text(10,50,'Upper C','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold');
        text(30,10,'Lower B','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold');
        text(35,35,'C','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold');
        text(50,10,'Lower C','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold');
        text(50,50,'D','HorizontalAlignment','center','Fontsize',fontSize,'FontWeight','bold');
    end
    
    %Plot each profile
    if ~isempty(glucoseProfiles)
        plot(profileCoordinates(:,1),profileCoordinates(:,2),'.k','MarkerSize',18)
    end

    %Highlight best profile if requested
    if ~isempty(glucoseProfiles)&& highlightBestControl
        plot(bestControlledCoordinates(1),bestControlledCoordinates(2),'or','MarkerSize',18)
    end

    xlabel('Minimum BG','Fontsize',fontSize,'FontWeight','bold')
    set(gca,'FontSize',fontSize-2)
    set(gca,'XTick',[0 20 40 60],'XTickLabel',{'>110' '90' '70' '<50'})
    
    ylabel('Maximum BG','Fontsize',fontSize,'FontWeight','bold')
    set(gca,'YTick',[0 20 40 60],'YTickLabel',{'<110' '180' '300' '>400'})
    axis equal;
    axis([0 60 0 60]);
    box on
    
    if(printFigure)
            print(f, '-dpdf', ['CVGA.pdf'],'-fillpage')
    end
        
    
end




function valid = validGlucoseProfiles(glucoseProfiles)

    valid = iscell(glucoseProfiles);
    
    if(~valid)
        error('plotCVGA: glucoseProfiles must be a cell array.');
    end
    
    
    for g = 1:length(glucoseProfiles)
       
        valid = valid && istimetable(glucoseProfiles{g});
        
        if(~valid)
            error(['plotCVGA: glucoseProfiles in position ' num2str(g) ' must be a timetable.']);
        end

        
        valid = valid && any(strcmp(fieldnames(glucoseProfiles{g}),'glucose'));

        if(~valid)
            error(['plotCVGA: glucoseProfile in position ' num2str(g) ' must contain a column named glucose.']);
        end

        valid = valid && any(strcmp(fieldnames(glucoseProfiles{g}),'Time'));

        if(~valid)
            error(['plotCVGA: glucoseProfile in position ' num2str(g) ' must contain a column named glucose.']);
        end
        
    end
    
end