# Server Status

Since the Call Center is a crucial communication system in any organization, monitoring and troubleshooting it is essential. To ensure the proper functioning of various components of the Call Center, Simutel displays the status of internal services in this section. This section also includes options for rebooting the server and adjusting the server time.

## Server Status Parameters
- **Reset Server**: Clicking this option allows you to reset the server.
  
- **Remove Server**: This feature is used when multiple Server Status entries are displayed in this section for deletion.
  
- **Adjust Server Time**: This section is used to change the server time.

## Server Status HA

If the HA service is running on the server, the status of HA servers will be displayed instead of the message `Current server is not in HA mode.` In this section, you can monitor the status of HA servers. The information displayed includes:

1. **Uptime**: Indicates the active time of each server.

2. **State**: The status of the servers, which includes: **PRIMARY** (active server), **SECONDARY** (backup server), **ARBITER** (voting server).

3. **Syncing**: Indicates the synchronization status of the servers' databases. If **connection refused** is seen here, it means the active server's database is not operational, causing issues with the HA service.

4. **Priority**: Specifies the priority of each server.

5. **Votes**: Indicates the voting power of each server in data integrity decisions.

## Channels Status Section

This section displays the call channels engaged on the server and their status. Clicking on ❌ will close the established channel.