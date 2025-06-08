# Call Back

## Purpose

Suppose you are outside the organization and want to call someone using the organization's number. To implement such a feature, you should use the Callback component. When a call reaches the Callback component, the call is disconnected, and the system calls back the caller. Then, the call is routed to the component after the Callback. Finally, you can manage it as needed using the editor's features.

## Parameters

- **Method:** Determines the method of the callback, which includes three options:
  
  1. **Call to caller:** In this case, the system monitors the number entered in the Callback service and calls back the exact same number to provide the service.
  
  2. **Call to number:** In this case, a predefined phone number is given to the system, and when Callback is requested, the system calls only that number.
  
  3. **Call extension:** In this method, the system calls a specified extension.

- **Trunk:** When option 1 or 2 is selected in the Method menu, this option is activated. You must select the trunk you want to use for the connection.

- **Number:** When option 2 is selected in the Method menu, this option is activated. You must enter the specific number to be dialed for the callback.

- **Extension:** When option 3 is selected in the Method menu, this option is activated. You must specify the extension that should be called.

- **Caller ID:** The number displayed on the requester's phone during the callback (Caller ID is shown if the trunk provider has granted you the necessary permissions).

- **Delay (Sec):** The amount of time, in seconds, that the system will wait before calling you back to provide the service.

- **Timeout (Sec):** The amount of time, in seconds, given to enter the second digit after the first digit is entered. If this time expires, the call is disconnected.

:::tip Note
"Call to caller" is the standard method for managing callback calls and has more usage than the others.
:::

:::tip Note
If a callback is activated for a number, for security and to prevent misuse, it is better to use the "Call to number" method and enter the same number in the **Number** field.
:::