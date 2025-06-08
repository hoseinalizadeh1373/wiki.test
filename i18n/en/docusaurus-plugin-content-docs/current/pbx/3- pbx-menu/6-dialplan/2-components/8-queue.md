# Queue

## Purpose
The **Queue** component is used to route calls to a queue. This allows incoming calls to be placed in a queue for agents to respond to.

## Parameters

- **Queue**: The specific queue to which the call will be routed. If no queue is selected, the call is directed to the queue that matches the entered number.

- **Agent Introduction**: Announces the operator's number to the caller before the call is answered.

- **Timeout (sec)**: The maximum time (in seconds) the caller will wait in the queue before being transferred.

- **Skip**: Defines the number of digits to be removed from the beginning of the entered number. The remaining number is then used as the destination number.

- **Prefix**: Adds the number entered in this field before the destination number, effectively modifying the number.

- **Call Limit (sec)**: The maximum time allocated for each call answered by an agent in the queue.

- **Macro**: The file path for the macro to be executed.

- **Options**: Various settings related to the queue configuration.

- **Call Options**: Settings for managing the call flow within the queue.

## Outputs

- **S (Success)**: The call is successful if an active agent in the queue answers the call.

- **F (Fail)**: The call is unsuccessful if, for any reason, it was not answered successfully.