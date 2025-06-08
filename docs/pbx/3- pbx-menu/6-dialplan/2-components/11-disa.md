# DISA

## Purpose

The **DISA (Direct Inward System Access)** component provides the caller with an outside dial tone, allowing them to make outbound calls using the system. This is typically used for situations where a caller needs to place external calls, such as a user dialing in remotely to use the system's phone lines.

## Parameters

- **Password**: If a password is set, the caller will be prompted to enter it. If no password is required, the default value should be set to "no-password."
  
- **Context**: After entering the number, the dialed number is routed to the component that manages the provided context. If the context is not valid or set incorrectly, the call will end with an error.