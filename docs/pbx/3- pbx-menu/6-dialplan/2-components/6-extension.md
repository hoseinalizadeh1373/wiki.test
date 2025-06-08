# Extension

## Purpose

The **Extension** component is used to route calls to a specific extension within the system.

## Component Parameters

- **Extension**: Select the extension to receive the call. If no extension is selected, the call will be routed to the extension matching the entered number.

- **Say Busy**: If the user is busy, a message is played to notify the caller that the extension is busy (for call waiting purposes).

- **Timeout (sec)**: The time (in seconds) that the extension will ring before being considered unanswered.

- **Skip**: Defines the number of digits to remove from the beginning of the entered number. The remaining number is then used as the destination number.

- **Prefix**: Adds the number entered in this field before the dialed number. The final number is then considered as the destination number.

- **Call Limit (sec)**: Sets a time limit for the call.

- **Options**: Provides additional configuration settings for the call.

## Skip and Prefix Parameters

**Skip** takes priority over **Prefix**. This means that the **Skip** action is applied first, followed by **Prefix** if no extension is selected.

### Example to explain Skip and Prefix:

Let’s say the user dials the number **955**, with **Skip = 1** and **Prefix = 20**. The steps will be as follows:

1. The first digit (**9**) is removed from **955**, leaving **55**.
2. The **Prefix** (**20**) is added to **55**, resulting in **2055**.
3. The call will then be routed to extension **2055**.

## Outputs

- **S (Success)**: If the call is answered successfully by the extension.
- **B (Busy)**: If the extension is busy.
- **F (Fail)**: If the call is unsuccessful (for example, if the extension is unavailable).