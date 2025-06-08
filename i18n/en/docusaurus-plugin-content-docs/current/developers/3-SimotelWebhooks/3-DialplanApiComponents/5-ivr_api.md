---

---
# IVR API

This component is similar to the IVR component, with the difference that it sends the number entered by the caller to the web service, and the web service then returns the name of the output where the call should exit.

## Component Parameters

- **API Address**: The web service URL to determine the destination extension number.
  
- **Announcement**: The audio file played when entering the IVR.

- **Timeout Announcement**: The message played when a timeout occurs.

- **Invalid Announcement**: The message played when the caller enters an invalid number.

- **Enable Direct Dial**: If enabled, the caller can dial an internal number of a defined user in the system.

- **Repeat Loop**: The number of times the IVR will repeat if the caller does not enter a number.

- **Timeout (Sec)**: The time given for the caller to enter the second digit after entering the first one (in seconds). Setting it to zero disables the timeout feature.

- **Max Digits**: The maximum number of digits the caller can enter.

- **Case**: The number that, if entered by the user, triggers the corresponding output.

- **Text**: A label used for display purposes in the component for easy identification.

## Web Service Format

Based on the settings in the `API Method & API Version` menu, the component calls the web service and sends the following data:

- **src**: The caller’s number (Caller or CID).
- **dst**: The entered number (Callee or DID or Exten).
- **data**: The data entered by the caller during the call (e.g., data entered in the IVR).
- **unique_id**: The unique ID of the call.
- **app_name**: The name of the current component.

In response, the component receives the following output in JSON format.

```shell
{
  "ok": "1",
  "case": "3"
}
```

**Finally, the call exits from the desired output (in this case, 3).**