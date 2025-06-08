
# Reporting Filters

In various reports of Simotel, filters are used to enhance the quality of reporting. Below is a brief explanation of these filters.

- **From (Date)**: Start date of the report.

- **To (Date)**: End date of the report.

- **Find Alike**: By enabling this option, the search is performed based on similarity for the source and destination.

- **Separated Report**: Used to toggle between detailed and statistical reports (enabling this option activates the next field).

- **Separated By**: Specifies the type of statistical report, which includes:
  - **All**: Statistical report of all calls, without separation.
  - **Date**: Statistical report of calls separated by day.
  - **Hours**: Statistical report of calls separated by hours of the day.
  - **Queue**: Statistical report of calls separated by queues.
  - **Agent**: Statistical report of queue calls separated by operators.
  - **Week days**: Statistical report of calls separated by days of the week.
  - **Label**: Statistical report of calls separated by survey labels (in advanced survey reports).

- **From**: Source of the call.

- **To**: Destination of the call.

- **DID**: The number that was called.

- **Caller**: Source of the call (in queue-related reports).

- **Agent**: Responding operator or destination of the call (in queue-related reports).

- **Call Status**: The status of the call, which includes:
  - **All**: All calls.
  - **Answered**: Answered calls.
  - **No Answer**: Unanswered calls.
  - **Busy**: Busy calls.
  - **Failed**: Failed calls.
  - **Congested**: Congested calls.
  - **In-Out**: Entry and exit of operators in the queue (in advanced user reports).
  - **Paused**: Entry and exit of operators in a resting state in the queue (in advanced user reports).
  - **Abandoned**: When a call enters the queue and the caller hangs up before the operator answers (in queue reports).
  - **Missed**: When a call enters the queue and none of the available operators answer (in queue reports).

- **Call Type**: Types of calls, which include:
  - **All**: All calls.
  - **Incoming Calls**: Incoming calls.
  - **Outgoing Calls**: Outgoing calls.
  - **Local Calls**: Internal calls.
  - **Feature Codes**: Special codes.

- **Blacklist**: Reports on calls that are blacklisted.

- **SPIT Call**: Reports on spam calls.

- **Entry Point**: The name of the trunk from which the call entered.

- **Outgoing Point**: The name of the trunk from which the call exited.

- **Min Talk (sec)**: Minimum duration of the call.

- **Max Talk (sec)**: Maximum duration of the call.

- **Min Wait (sec)**: Minimum waiting time for the call.

- **Max Wait (sec)**: Maximum waiting time for the call.

- **Point**: Score given by the caller in the survey.

- **Label**: Label related to the survey component.

- **Exten**: Extension number.

- **Group**: Name of the internal group.

- **Queue**: Name of the queue.

---

## Column Descriptions in Reports

<div class="custom-table">

|     Columns    |        Columns       |                                                                                                    Description                                                                                                   |
|:-------------:|:-------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|  Active Talk  | Active Call         |                                                                                    Average talk time while active in the queue.                                                                                   |
|     Agent     | User                |                                                            This column appears in queue-related reports, indicating the destination or responder number.                                                           |
|    Answered   | Answered            |                                                                                          Number of answered calls.                                                                                          |
|      Busy     | Busy                |                                                                                             Number of busy calls.                                                                                             |
| Call Per Hour | Calls per Hour      |                                                                                Average number of answered calls per hour.                                                                                |
|  Call Status  | Status              |                                                                                Call status (FAILED, BUSY, NO ANSWER, ANSWERED).                                                                                |
|   Call Type   | Call Type           |                                                                                 Type of call (feature, local, outgoing, incoming).                                                                                 |
|     Caller    | Caller              |                                                                  This column appears in queue-related reports, indicating the source number.                                                                 |
|    Comment    | Comment             |                                                                                            Comments related to the call.                                                                                            |
|      Date     | Date                |                                                                                                  Date of the call.                                                                                                 |
|     Detail    | Details             |                                                                                             Details related to the call.                                                                                            |
|   Duration    | Duration            |                                                                                    Duration from the start of the call until its end.                                                                                   |
|    End Date   | End Time            |                                                                                                  End time.                                                                                                 |
|     Exten     | Extension           |                                                                                       Internal number defined in Simotel.                                                                                       |
|  FeatureCode  | Feature Code        |                                                                                        Number of calls related to feature codes.                                                                                        |
|  First Login  | First Login         |                                                   Date of the operator's first login to the queue (Continuous means the operator has been in the queue during the reporting period without leaving).                                                  |
|      From     | Source Number       |                                                                                               Caller’s phone number.                                                                                              |
|   Idle Time   | Idle Time           |                                                                               Duration the operator is ready to receive calls in the queue.                                                                              |
|    Incoming   | Incoming Calls      |                                                                                             Number of incoming calls.                                                                                             |
| In-Queue Talk | Talk in Queue       |                                                                                       Average talk time while in the queue.                                                                                      |
| In-Queue Time | Time in Queue       |                                                                                         Duration the operator has been in the queue.                                                                                         |
|     Label     | Label               |                                                                                                                                                                                                              |
|   Last Login  | Last Login          |                                                   Date of the operator's last login to the queue (Continuous means the operator has been in the queue during the reporting period without leaving).                                                  |
|     Local     | Internal Calls      |                                                                                             Number of internal calls.                                                                                             |
|      Max      | Maximum             |                                                                                                                                                                                                              |
|      Min      | Minimum             |                                                                                                                                                                                                              |
|   No Answer   | No Answer           |                                                                                           Number of unanswered calls.                                                                                           |
|     Number    | Number              |                                                                                                                                                                                                              |
|    Outgoing   | Outgoing Calls      |                                                                                             Number of outgoing calls.                                                                                             |
|   Pause Time  | Pause Time          |                                                                              Duration the operator has been in a resting state in the queue.                                                                             |
|     Point     | Score               |                                                                              Score given by the caller in the survey component.                                                                              |
|   Point avg   | Average Score       |                                                                                            Average score from the survey.                                                                                           |
                                                                                        |

</div>