% Test units of the bgri function
%
% ---------------------------------------------------------------------
%
% Copyright (C) 2020 Giacomo Cappon
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------

addpath(fullfile('..','..','src','riskMetrics'));

time = datetime(2000,1,1,0,0,0):minutes(5):datetime(2000,1,1,0,0,0)+minutes(50); % length = 11;
data = timetable(zeros(length(time),1),'VariableNames', {'glucose'}, 'RowTimes', time);
data.glucose(1) = 40;
data.glucose(2:3) = 50;
data.glucose(4) = 80;
data.glucose(5:6) = 120;
data.glucose(7:8) = 200;
data.glucose(9:10) = 260;
data.glucose(11) = nan;

%% Test 1: check NaN presence
results = bgri(data);
assert(~isnan(results));

%% Test 2: check results calculation
results = bgri(data);
results = round(results*1000)/1000;
assert(results == 15.8350);
