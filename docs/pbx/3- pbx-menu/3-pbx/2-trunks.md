# Trunks

A trunk is a communication path between the city gateway lines, E1, SIP trunks, or another server through which calls enter and exit. In this section, you can view the existing trunks in the Call Center, as well as create, delete, or edit a trunk. Simotel supports three protocols for trunks: SIP, IAX2, and DAHDI.

## SIP Trunk Parameters

- **Name**: The display name of the trunk.

- **Register String**: Used for registering specific trunks (e.g., if a sip-user from another center needs to connect to the server, this user must be registered with a specific algorithm so that both parties are aware of each other's status).

- **Active**: Activate or deactivate the trunk.

- **Deny**: Create an access restriction from an IP range.

- **Permit**: Grant access only from a specific IP range.

- **Dtmf Mode**: Type of DTMF sent.

- **Can Re-Invite**: Enable direct communication from the internal origin to any destination without passing through the server (if set to "yes").

- **Direct Media**: Exchange media (audio and video) without passing through the server (if set to "yes").

- **Context**: The context of the trunk.

- **Host**: By default, this menu is dynamic, but since the trunk should only register from a specific IP, you should enter the destination IP here.

- **Type**: Select the internal type based on output only (User), input only (Peer), or both input and output (Friend).

- **NAT**: (Refer to "VoIP with Asterisk Softswitch Guide").

- **Port**: The communication port.

- **Qualify**: Check for connection status (qualify = yes|no). If "yes," the PBX sends a SIP OPTIONS command every 2 seconds to check if the device is still online. This feature can also be used to maintain a UDP session for a device behind a network address translation (NAT), and if nat=yes, the connection is checked behind NAT, and the connection is maintained.

- **Insecure**: No authentication required.

    - **port**: Ignore the port number from which the request originated, allowing the peer to match the IP address without the need to match the port number.

    - **invite**: No authentication required for incoming invite.

    - **port&invite**: Both of the above are applied simultaneously.

- **Disallow**: The codecs entered here will be disabled, and if "all" is entered, all codecs will be disabled.

- **Allow**: Allow codecs in order of priority (before allowing other codecs, use disallow = all).

- **More Option**: If you want to use a parameter that is not listed above, enter it and its value here. If you need to add multiple parameters, each should be on a separate line.

- **Description**: Description of the trunk.

## IAX2 Trunk Parameters

:::info Information
Most IAX2 parameters are similar to SIP.
:::

- **Name**: The display name of the trunk.

- **Register String**: Used for registering specific trunks (e.g., if an IAX2 user from another center needs to connect to the server, this user must be registered with a specific algorithm so that both parties are aware of each other's status).

- **Active**: Activate or deactivate the trunk.

- **Deny**: Create an access restriction from an IP range.

- **Permit**: Grant access only from a specific IP range.

- **DTMF Mode**: Type of DTMF sent.

- **Context**: The context of the trunk.

- **Host**: By default, this menu is dynamic, but if the trunk should only register from a specific IP, you should enter the destination IP here.

- **Type**: Select the internal type based on output only (User), input only (Peer), or both input and output (Friend).

- **Port**: The communication port.

- **Qualify**: Check for connection status (qualify = yes|no). If "yes," the PBX sends a SIP OPTIONS command every 2 seconds to check if the device is still online. This feature can also be used to maintain a UDP session for a device behind a network address translation (NAT), and if nat=yes, the connection is checked behind NAT, and the connection is maintained.

- **Disallow**: The codecs entered here will be disabled, and if "all" is entered, all codecs will be disabled.

- **Allow**: Allow codecs in order of priority (before allowing other codecs, use disallow = all).

- **Trunk**: This parameter has two values, Yes and No, and is set to Yes to save on network bandwidth.

- **Transfer**: This parameter is similar to the Can Re-Invite and Direct Media parameters in the SIP user definition. It determines whether media traffic streams are transferred directly between two users. It can have the following values:

    - **Yes**: In this case, the server tries to directly transfer both signaling and media streams between two users. However, if transcoding is required, this will not happen.

    - **No**: In this case, the server routes both signaling and media streams between the two users.

    - **Mediaonly**: In this case, the server only routes the signaling streams, and media streams are directly transferred between the two users.

- **More Option**: If you want to use a parameter that is not listed above, enter it and its value here. If you need to add multiple parameters, each should be on a separate line.

- **Description**: Description of the trunk.

## DAHDI Trunk Parameters

- **Name**: The trunk name.

- **Group**: This parameter is used for grouping channels and creating outbound calls. When grouping channels, you can specify algorithms to determine which channels should be used to keep call distribution between channels balanced. These rules also apply to PRI cards. Channel selection order is as follows:

    - **g**: Channel selection order is from lowest to highest (1, 2, 3, 4, 5). For example, the first port is used for the first number. If the first port is busy, the second port is selected. The important thing is that selecting the second port depends on the first port being occupied (billing will be higher for lower-numbered ports).

    - **G**: This is exactly like "g" except that channels are selected from highest to lowest (5, 4, 3, 2, 1) (billing will be higher for higher-numbered ports).

    - **r**: Channel selection from lowest to highest, in a round-robin manner. New calls are made on a new port, and billing will be the same for all ports.

    - **R**: Channel selection from highest to lowest, in a round-robin manner. New calls are made on a new port, and billing will be the same for all ports.

- **Active**: Activate or deactivate the trunk.

- **Description**: Description of the trunk.