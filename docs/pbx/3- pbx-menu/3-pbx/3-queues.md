
# Queues

:::info Information 
One of the important features of telephone systems is the queue. By offering different strategies, queues enable appropriate distribution of calls among operators.
:::

## Queue Parameters

- **Name**: The name of the queue.

- **Number**: Specifies the internal number of the queue. This number is used to transfer calls or to enter a call into the queue, and operators also dial this number to enter or exit the queue. For example, if the queue number is 345, and the entry code is # and the exit code is ##, operators dial 345# to enter the queue and 345## to exit.

- **Ring Strategy**: The strategies for connecting incoming calls to queue operators are as follows:

  - **Ringall**: All operators in the queue ring simultaneously (default). This strategy does not use a real call distribution algorithm. In traditional phone networks, this method is called group ringing.
  
  - **Leastrecent**: Calls are routed to operators who have answered the fewest recent calls. This strategy is useful for queues with high call volumes and almost identical call durations. However, this strategy does not work well in cases where an operator has been on a long call (e.g., for an hour), and their colleagues' last calls were made half an hour ago.
  
  - **Fewestcalls**: Operators who have handled fewer calls are given priority. This strategy is unfair in queues where call durations are not always the same. For example, one operator may have answered three 15-minute calls while another answered four 5-second calls. The operator who answered three calls will receive the next call.
  
  - **Random**: Calls are routed randomly to one of the operators. This strategy ensures that calls are distributed in a way that is fair.
  
  - **RR Memory**: Operators answer calls in a round-robin manner, with call rejection taken into account. (Rejected calls are considered as answered calls). This strategy ensures fair distribution of calls among operators, though it is not as effective as random distribution.
  
  - **RR Ordered**: Similar to RR Memory, but operator priorities in the queue are also considered.
  
  - **Linear**: Calls are routed to operators in the specified order, starting from the top of the list. This strategy works well when you have a team of operators who should take the most calls, and other operators receive calls only when the primary operators are busy.
  
  - **W Random**: Calls are routed randomly to operators, similar to the Random strategy. However, operator penalties in the queue are used for weighting and random selection, so operators with higher penalties are assigned a higher weight.
  
- **Ring InUse**: If set to yes, a user’s phone rings during an ongoing call (backline).

- **Call Record**: This option determines whether calls in the queue are recorded.

- **Set interface var**: If set to yes, the following variables are initialized before a call is connected to a queue member:

  - **MEMBERINTERFACE**: The interface name of the queue member (e.g., Agent/1234).
  
  - **MEMBERNAME**: The name of the queue member.
  
  - **MEMBERCALLS**: The number of calls the interface has answered.
  
  - **MEMBERLASTCALL**: The last time the queue member answered a call.
  
  - **MEMBERPENALTY**: The penalty value of the queue member.
  
  - **MEMBERDYNAMIC**: Indicates whether the member was added to the queue dynamically.
  
  - **MEMBERREALTIME**: Indicates whether the queue member is a real-time user.

- **Autofill**: If set to yes, and there are multiple operators waiting to answer, the system will route any incoming call to one of the operators until an operator becomes available or no calls remain in the queue.

- **Set Queue Var**: The following variables are initialized before a call is connected to a queue member:

  - **QUEUENAME**: The name of the queue.
  
  - **QUEUEMAX**: The maximum number of allowed calls in the queue.
  
  - **QUEUESTRATEGY**: The strategy of the queue.
  
  - **QUEUECALLS**: The number of active calls in the queue.
  
  - **QUEUEHOLDTIME**: The average hold time for callers in the queue.
  
  - **QUEUECOMPLETED**: The number of completed calls for the queue.
  
  - **QUEUEABANDONED**: The number of abandoned calls in the queue.
  
  - **QUEUESRVLEVEL**: The service level of the queue.
  
  - **QUEUESRVLEVELPERF**: The performance of the current service level.

- **Set Queue Entry Var**: If selected, the following variables are initialized before a call is connected to a queue member:

  - **QEHOLDTIME**: The time a caller has been waiting in the queue.
  
  - **QEORIGINALPOS**: The original position of the caller in the queue.

  - **PERSISTENT MEMBERS**: Allows dynamically added members to be stored in the queue. If set to yes, they will automatically rejoin the queue upon system restart.

- **Shared Last Call**: This ensures that the last received call for members who are in more than one queue is the same. This option is useful for extensions that belong to multiple queues and ensures that after every call, the wrap-up time is applied for all the queues that the extension is a member of.

- **Announce Hold Time**: If enabled, the hold time for the caller in the queue is announced.

- **Announce Position**: If enabled, the system announces the position of the caller in the queue.

- **Join Empty**: Determines how calls are entered into the queue when no active operators are available:

  - **Yes**: Always allows calls to enter the queue.
  
  - **No**: If no active operators are available, calls are not allowed to enter the queue.

- **Leave when Empty**: Determines when calls will leave the queue:

  - **Yes**: If no active operators are available, calls will leave the queue.
  
  - **No**: Calls will remain in the queue until their hold time expires.

- **Report Hold Time**: Before a call is connected to an operator, the caller's wait time in the queue is announced. If the wait time is less than one minute, no announcement is made.

- **Max len**: Specifies the maximum number of calls that can wait in the queue. A value of zero means no limit. If a limit is set and more calls are waiting, they will be routed to the Fail Over Destination.

- **Announce Frequency**: Defines the interval at which the caller is notified of their position in the queue. For example, with a value of 15, the caller will be informed of their position every 15 seconds.

- **Min Announce Frequency**: Specifies the minimum time interval between announcements, protecting callers from receiving multiple messages in queues where positions change rapidly.

- **Periodic Announce Frequency**: Specifies the interval at which defined audio files will be played.

- **Music**: Select the hold music for the queue.

- **Queue Calls Waiting**: The message played to inform callers of their wait time.

- **Queue Thank You**: A message that thanks callers for their patience while waiting in the queue.

- **Queue There Are**: A message that announces the caller's position in the queue.

- **Queue You Are Next**: A message informing the caller that they are next in line to speak to an operator.

- **Retry**: The number of times the system tries to connect the call to other operators. If set to "no retry," the call will be routed to the Fail Over Destination if no answer is received.

- **Service Level**: Used for service level statistics (calls answered within the service level time frame). For example, if servicelevel = 60, the number of calls (successful and unsuccessful) will be calculated as a percentage every 60 seconds.

- **Time out**: The maximum wait time a call can have in the queue before it is routed to the Fail Over Destination.

- **Weight**: Sets a priority value for the queue so that if a user is in multiple queues, the call will be routed to the queue with the higher priority first.

- **Wrap-Up-Time**: Defines the time interval after an operator answers a call before the next call is routed to them. This acts as a break time. The default value is zero, meaning the next call is immediately routed after the previous one ends.

- **Monitor Type**: Sets the type of call recording, which by default is MixMonitor.

- **Monitor Format**: Specifies the format for call recordings (monitor-format = gsm | wav | wav49).

- **More Option**: If you wish to use a parameter not listed above, enter the parameter and its value here. If you want to define multiple parameters, each should be entered on a separate line.

## User Presence Pattern in the Queue and Extension Mapping Capability

One of Simotel's unique features is the dynamic use of extensions across different phones. Thus, an extension can enter a queue without any geographical restriction by using special codes.

For example, consider four phones provided for operators in a location, with extensions 1001, 1002, 1003, and 1004 registered to them. Operators have extensions defined from 200 to 220. These operators are on different shifts but must use these four phones without changing the extension set for them. The simplest method is for each operator to always use a specific phone, later identifying their own call logs based on their shift time. However, this method makes it hard to monitor operator performance and is prone to errors.

Simotel's dynamic extension mapping feature allows operators to use any available phone, entering the queue with their dedicated extension. To use this feature, the operator dials a special queue entry code (or uses the panel), then enters their extension and joins the queue. At this point, the registered extension on the phone is mapped to the operator’s extension. For example, suppose operator 210 wants to use phone 1001. They enter the queue using their extension via phone 1001, which then maps the phone 1001 to extension 210.

### Managing Queue Users

**There are three methods for user entry and exit from the queue**:

1. **Entering and exiting the queue with a special code**: Explained in the special code section.

2. **Entering and exiting the queue through the panel**: An entry/exit icon is available for each queue (in the queue list). Clicking on it opens a window where users in the queue are displayed in the top section, and operators can be added from the bottom.

3. **Entering and exiting the queue through a web service**: Full details are provided in the web service documentation.

### Clearing Queues

This feature removes all members from the queues. They must re-enter the queue to continue their activities.
