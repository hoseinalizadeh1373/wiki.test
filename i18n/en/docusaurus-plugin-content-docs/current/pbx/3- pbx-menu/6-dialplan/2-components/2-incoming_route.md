# Incoming Route

## Purpose
Calls that come from outside the Simotel system are called incoming calls. Their starting point is the Incoming Route component. To receive incoming calls in this component, the context of the incoming trunk and the context of this component must be the same. Therefore, the context parameter should be correctly configured in the settings. An incoming call has two key parameters: CID (Caller ID) and DID (Dialed Number). Based on these two parameters, different routing paths can be defined in the component.

:::tip Note
The IncomingRoute component does not have complex matching patterns. Usually, the full number is entered because a number might have various prefixes. The character `x` can be used before or after the number. See the example below.

```bash
 x310410 <=  310410, 51310410, +985131410
```
:::

## Component Parameters

- **Context**: The context of the incoming trunk.

## Routing Parameters

- **CID**: The caller's phone number.

- **DID**: The dialed number.