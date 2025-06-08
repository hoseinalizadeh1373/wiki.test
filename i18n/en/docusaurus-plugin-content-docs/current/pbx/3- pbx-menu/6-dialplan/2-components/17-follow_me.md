# Follow Me

## Purpose

This component is used to forward calls to another extension, mobile phone, or any other number outside the contact center. The most common use of this component is when the intended extension is unavailable; in this case, the call is forwarded to the desired destination. This component also supports forwarding the call to multiple destinations in a specified order.

## Parameters

- **Followers**: The destination numbers for forwarding the call. To forward a call to a landline or mobile phone, you first need to select an outgoing trunk from the trunks section, then type the destination phone number and press Enter.

- **Timeout (sec)**: This parameter sets the maximum time (in seconds) that the destinations will ring. If no answer is received within this time, the call will be forwarded to the next destination.

- **Call Limit (sec)**: The time limit for the call duration.

- **Options**: Additional settings for the call.