# Time Condition

## Usage

It is used to create restrictions (time conditions) during specific time periods for certain reasons. The most common use is to differentiate between working and non-working hours in organizations. For example, if the working hours of your organization's operators are from 8:00 AM to 3:30 PM, there will be no operators available to answer callers outside of those hours. Therefore, it is better to play an appropriate message for callers during those times to avoid dissatisfaction.

## Component Parameters

- **Days of Week**: In the weekly settings, there are parameters for all seven days of the week that are empty by default. Click the plus button to select a time range. Enter the start and end of the allowed range (multiple time ranges can be selected for a single day). Repeat this for other days and add the allowed ranges.

- **Month Exception**: Select non-working months. The time condition will not apply in the selected months (the selected months take precedence over the ranges selected for the days).

- **Date Exception**: Select non-working days. The time condition will not apply on the selected days (the selected days take precedence over the ranges selected for the days).

## Outputs

- **✓**: The time condition is met.

- **✗**: The time condition is not met.