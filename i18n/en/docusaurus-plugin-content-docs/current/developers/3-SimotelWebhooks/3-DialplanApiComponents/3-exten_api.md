---
sidebar_position: 2
---
# Extention API

This component is used to forward a call to an extension. Its function is similar to the **Extension** component, but instead of statically defining the destination number, it retrieves the destination extension number via a web service and only forwards the call to that extension.

## Component Parameters

- **API Address**: The web service address to retrieve the destination extension number.
- **Timeout (sec)**: The duration the extension will ring (in seconds).
- **Options**: Call settings.

## Component Outputs

- **S (Success)**: If the call is successful, i.e., the extension answers the call.
- **B (Busy)**: If the extension is busy.
- **F (Fail)**: If the call fails for any reason.

## Web Service Format
Based on the `API Method & API Version` settings, the component calls the web service and sends the following data (with the names mentioned) along with it:

- **src**: The caller's number (Caller or CID).
- **dst**: The entered number (Callee, DID, or Exten).
- **data**: The data entered by the caller during the call (e.g., data entered in the IVR).
- **unique_id**: The unique identifier of the call.
- **app_name**: The name of the current component.

In response, the component receives the following output in JSON format.

```shell
{
  "ok": "1",
  "extension": "120"
}
```

**And finally, the call is forwarded to the entered extension (here, 120).**