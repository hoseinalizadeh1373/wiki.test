# Trunk

## Purpose

The **Trunk** component is used to route a call over a specific trunk. The incoming number is dialed through the selected trunk in the dialing component.

## Parameters

- **Trunk**: The trunk selected for routing the call through. This defines which external phone line or connection will be used.
  
- **Timeout (sec)**: The duration (in seconds) that the system waits for the call to establish before timing out.

- **Skip**: Specifies the number of digits that should be removed from the beginning of the entered number. The modified number is then treated as the destination number.

- **Prefix**: Specifies the number to be added at the beginning of the entered number before it is dialed.

- **Call Limit (sec)**: The maximum duration (in seconds) allowed for the call.

- **Permitted Queues**: Specifies which queues are allowed to use this trunk. If no queue is selected, all queues are permitted.

- **Permitted Extensions**: Specifies which extensions are allowed to use this trunk. If no extension is selected, all extensions are allowed to use it.

- **Options**: Additional settings for configuring the call routing and behavior.

## Outputs

- **S (Success)**: Indicates that the call was successfully routed and the call terminates successfully without further steps.

- **F (Fail)**: Indicates that the call attempt failed, such as when the destination does not answer for any reason.