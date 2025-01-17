# Getting started

## Step 1: Install AGATA

Installation of AGATA can be easily performed by including the AGATA folder in the MATLAB® *PATH*. To do so: 

1. Download the latest AGATA release (e.g. `X.Y.Z`) from Github --> [here](https://github.com/gcappon/agata/releases);

2. Unzip the downloaded archive and move the `agata-X.Y.Z` folder to the desired location, for example `~/MATLAB/`;
3. Open MATLAB®;
4. To use the AGATA functions in the current MATLAB® session (or within a specific script), add `agata-X.Y.Z` source folder and subfolders to the current MATLAB® *PATH* by executing in the command window (or at the top of the script)
```MATLAB
addpath(genpath('~/MATLAB/agata-X.Y.Z/src'))
```
5. Enjoy!

## Step 2: Test AGATA

Once included in the MATLAB® *PATH*, it is time to test drive AGATA. For example, lets assume you want to compute the percentage of time in hyperglycemia of a given glucose trace using the function [``timeInHyperglycemia``](https://gcappon.github.io/agata/api/time.html#timeinhyperglycemia). 

1. Generate a dummy timetable representing a glucose trace: 

```MATLAB
time = datetime(2000,1,1,0,0,0):minutes(5):datetime(2000,1,1,0,0,0)+minutes(50);
data = timetable(zeros(length(time),1),'VariableNames', {'glucose'}, 'RowTimes', time);
data.glucose(1) = 40;
data.glucose(2:3) = 60;
data.glucose(4) = 80;
data.glucose(5:6) = 120;
data.glucose(7:8) = 200;
data.glucose(9:10) = 260;
data.glucose(11) = nan;
```

2. Use [``timeInHyperglycemia``](https://gcappon.github.io/agata/api/time.html#timeinhyperglycemia) to get the percentage of time in hyperglycemia (i.e., 40%): 

```MATLAB
tHyper = timeInHyperglycemia(data);
assert(tHyper == 40);
```
