# PickUp

## Purpose

This component is used to "pick up" or intercept calls from other users. When an operator's phone is ringing, other users can use the PickUp feature to answer the call themselves. This operation is referred to as call hunting or "call pick-up."

## Parameters

- **Type**: The type of call pick-up.
  - **Pickup Group**: Each extension can only pick up calls from the extensions within its group (users are grouped by setting the Pickup Group and Call Group parameters when defining extensions).
  - **Without Caller ID**: In this mode, the call is immediately picked up without delay.
  - **With Caller ID**: In this mode, the caller ID of the incoming call is displayed to the user picking up the call (after picking up, the user's call is disconnected, and after a delay, the call with the caller ID is transferred to the user).

- **Extension**: If an extension is specified, only the call to that extension will be picked up. If this field is empty, the entered number will be picked up.

- **Delay (sec)**: The delay (in seconds) that is introduced before picking up the call.

- **Skip**: Specifies the number of digits that should be removed from the beginning of the entered number. The modified number is then treated as the destination number.

- **Prefix**: Specifies the number to be added at the beginning of the entered number before it is dialed.

:::tip Note

Pickup Group allows you to pick up calls within the group without specifying a target user. In both With Caller ID and Without Caller ID modes, the target extension whose call you wish to pick up must be available.
:::