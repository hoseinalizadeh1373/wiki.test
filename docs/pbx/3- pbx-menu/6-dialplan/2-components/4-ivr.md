# IVR (Interactive Voice Response)

## Purpose

The IVR (Interactive Voice Response) system enables the caller to choose between different paths or options. This allows the caller to interact with the system through a menu of predefined choices.

## Component Parameters

- **Announcement**: The audio file that is played when entering the IVR.

- **Timeout Announcement**: The message that is played when the timeout occurs.

- **Invalid Announcement**: The message that is played when the caller enters an invalid number.

- **Enable Direct Dial**: When enabled, the caller can dial the extension of a defined user directly.

- **Repeat Loop**: The number of times the IVR will repeat (if the caller doesn’t enter a number).

- **Timeout (Sec)**: The duration in seconds for which the caller is given to enter the second digit after entering the first one. A value of 0 disables the timeout.

- **Max Digits**: The maximum number of digits that the caller can enter.

## Routing Parameters

- **Case**: The number assigned to an output. If the number entered by the caller matches the **Case** value, the call will exit through that output.

- **Text**: A label for display purposes in the component, which helps for easier management.

## Output Parameters for t and i

- The default outputs defined in the IVR are **t** for timeout events and **i** for invalid data input by the caller. To use these outputs, a new route needs to be added to the IVR, and the "case" value should be set to **t** or **i**.

