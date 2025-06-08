# Network

This section is for configuring the network settings of the Simutel server or servers (in HA mode). Changes will require a server reboot to take effect.

## Network Section Parameters
- **Server Name**: The name of the server (this name must match the name listed in the server status).

- **Interface**: The network interface of the server.

- **Address**: The server's IP address.

- **Network Mask**: Specifies the network mask of the server.

- **Gateway**: The network gateway of the server.

- **Float**: Is this IP floating? (enable or disable) (used in HA structure).

- **ARPing**: The gateway addresses for performing ARPing during server transitions. If multiple gateways are available, they are separated by commas (used in HA structure).

- **More Options**: If additional parameters are needed for network configuration, they can be entered here. The information entered will be fully written to the network file.

- **Details**:
    - **Remove**: Used to delete the server's network.
    - **Edit**: Edit the network information of the server.