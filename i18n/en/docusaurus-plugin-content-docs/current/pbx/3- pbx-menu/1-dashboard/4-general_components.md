# General Components

This section is dedicated to the exploration of general components.

## Customer Satisfaction
This component provides a report on the average customer satisfaction score from conducted surveys (based on ratings). The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies which queues should be analyzed.
- **Extensions**: Allows the specification of relevant extensions for the report.
- **Groups**: If a group of users is defined in the contact center, it can be selected here.
- **Surveys**: Tags assigned to the poll component in the dial plan can be selected here.

## Surveys
This component functions similarly to the **Customer Satisfaction** component, presenting survey data for performance measurement.

## Net Promoter Score (NPS)
The task of this component is to report on the Net Promoter Score. To better understand this metric, consider the following example:

**Example**: Let's say you plan to survey customers about your product's satisfaction, and the survey asks:
"Please rate on a scale of 1 to 10 how satisfied you are with our product and whether you would recommend it to others."

Based on the responses, individuals are categorized into three groups:
1. **Detractors**: Individuals dissatisfied with the product and unwilling to recommend it.
2. **Passives**: Individuals who are neutral and neither dissatisfied nor highly satisfied with the product.
3. **Promoters**: Individuals satisfied with the product and willing to recommend it.

The goal of this metric is to determine the level of customer loyalty and their willingness to recommend the product to others. The Net Promoter Score (NPS) is calculated by subtracting the percentage of detractors from the percentage of promoters.

### Parameters of this component include:
- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component:
    - **Detractors**: Individuals dissatisfied with the product.
    - **Passives**: Neutral individuals.
    - **Promoters**: Individuals satisfied with the product.
    - **NPS**: The Net Promoter Score.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies which queues should be analyzed.
- **Extensions**: Specifies the relevant extensions for the report.
- **Surveys**: Tags assigned to the poll component in the dial plan.
- **Detractors**: Defines the ratings that categorize someone as a detractor.
- **Passives**: Defines the ratings that categorize someone as passive.
- **Promoters**: Defines the ratings that categorize someone as a promoter.

## HDD (Audio)
This component reports on the storage consumed by audio files. The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed.
- **Items**: The items in the component:
    - **Audio**: Healthy audio files.
    - **Trash**: Audio files that encountered issues during the conversion process.

## HDD (All)
This component provides a report on the overall server memory usage. The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed.
- **Items**: The items in the component:
    - **Used**: Memory consumed.
    - **Database**: Memory allocated for the database.
    - **Backup**: Memory allocated for backup files.
    - **Audio**: Memory allocated for audio files.
    - **Trash**: Files that should be deleted (e.g., incomplete audio files).
    - **Free**: Remaining free memory.

## Call Duration
This component provides an overall report on the duration of calls and waiting times (in seconds). The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed.
- **Items**: The items in the component:
    - **Talk Time**: The duration of conversations.
    - **Wait Time**: The waiting time before the call is answered.
- **Trunks**: Specifies the trunks for which the incoming and outgoing calls should be considered.
- **Call Types**: Specifies the types of calls involved in the report, including:
    - **Outgoing**: Outgoing calls.
    - **Incoming**: Incoming calls.
    - **Local**: Local calls.

## Call Status
This component provides an overall report on the status of calls (answered, unanswered, busy, barred). The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed.
- **Items**: The items in the component:
    - **Answered**: Answered calls.
    - **No-Answer**: Unanswered calls.
    - **Busy**: Busy calls.
    - **Barred**: Barred calls.
    - **Total**: The total number of calls.
    - **SPIT Call**: Calls that are identified as spam.
    - **Blacklist**: Calls from numbers on the blacklist.
    - **Failed**: Calls that encountered errors.
- **Trunks**: Specifies the trunks for which the calls should be considered.
- **Call Types**: Specifies the types of calls involved in the report, including:
    - **Outgoing**: Outgoing calls.
    - **Incoming**: Incoming calls.
    - **Local**: Local calls.

## Call Direction
This component provides a report on the types of calls (incoming, outgoing) in the contact center. The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed.
- **Items**: The items in the component:
    - **Incoming**: Incoming calls.
    - **Outgoing**: Outgoing calls.
    - **Local**: Local calls.
    - **Total**: The total number of calls.
- **Trunks**: Specifies the trunks for which the calls should be considered.
- **Call Types**: Specifies the types of calls involved in the report, including:
    - **Outgoing**: Outgoing calls.
    - **Incoming**: Incoming calls.
    - **Local**: Local calls.

## SPIT
This component displays a report on spam calls (SPIT) in the contact center. The parameters include:

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed.