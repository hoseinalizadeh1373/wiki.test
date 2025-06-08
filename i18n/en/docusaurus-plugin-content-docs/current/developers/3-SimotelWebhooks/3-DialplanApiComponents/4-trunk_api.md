---

---
# Trunk API

This component is used to initiate a call on a trunk. Its functionality is similar to the **Trunk** component, with the difference that it receives the trunk name and the destination extension number via a web service and then initiates the call to that specific number. One common use case for this component is to create a time limit (call_limit) on a two-way call web service.

## Component Parameters

- **API Address**: The web service URL.
- **Timeout (sec)**: The time the call waits for a response and connection to be established (in seconds).
- **Options**: Call settings.

## Component Outputs

- **S (Success)**: If the call is successful. The call exits from this part (this is where surveys can be conducted).
  
- **F (Fail)**: If the call fails, meaning the destination does not respond for any reason. The call exits from this part (this is where a "user unavailable" message can be played).

## Web Service Template

Based on the values in the `API Method & API Version` settings menu, the web service URL is called and the following data is sent along with it:

- **src**: The caller's number (Caller or CID).
- **dst**: The entered number (Callee or DID or Exten).
- **data**: Data entered by the caller during the call process (e.g., data entered in the IVR).
- **unique_id**: The unique call identifier.
- **app_name**: The name of the current component.

And in response, the following output is received in **JSON** format.

```shell
{
 "ok": "1",				
  "trunk": "NasimTrunk",
  "extension": "09151412541",
  "call_limit": "300"

}
```

Finally, it initiates the call to the destination (in this case, 09151412541) with a call time limit of 300 seconds.