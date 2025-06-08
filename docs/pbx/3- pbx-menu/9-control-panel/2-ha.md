# HA 

This section is related to the HA structure and displays the status of the servers present in HA.

## HA Status

In this section, information regarding the servers is displayed as follows:

- **Server Name**: The name of the server.

- **HA State**: The state of the server in the HA structure (PRIMARY, SECONDARY, STANDBY, UNKNOWN).

- **PBX State**: The status of the Asterisk server (UP, DOWN, UNKNOWN).

- **Last Heartbeat**: The last heartbeat signal from the server.

- **Priority**: The priority of the server for selection as PRIMARY (a higher number indicates a higher priority).

- **Last HA Configure**: The last change made to HA.

- **Float IP**: Represents the floating IP address (the floating IP should always be on the PRIMARY server).

- **Use As Primary**: Indicates whether the server can become PRIMARY (yes, no).

- **HA Recovery Mode**: The recovery method for the server in case of failure. If set to Auto, it will switch to secondary after the issue is resolved; if set to Manual, it will go to standby after failure and must be manually transitioned to secondary by the system administrator.

- **Details**:
  - **Edit**: To edit the server.
  - **Delete**: To delete the server (if the server is active, it will be recreated with default data).
  - **Arping**: To apply arping on the primary server.

## Server Status

A server in HA can have one of the following statuses:

- **PRIMARY**: The main server.

- **SECONDARY**: Servers that can replace the primary in case of failure.

- **STANDBY**: The server needs to be manually switched to secondary.

- **UNKNOWN**: The status of the server is unclear.