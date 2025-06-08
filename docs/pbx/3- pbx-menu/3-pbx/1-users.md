# Users

In this menu, the extensions of the Call Center are defined and managed. In addition to creating extensions, they can be edited or deleted. For easier management of a large number of extensions, there is the possibility of adding, editing, and deleting multiple users simultaneously. Simotel supports SIP and IAX2 protocols for extensions.

:::tip Note
To create a group of extensions in Simotel, these extensions must be entered as a range. For example, if you want to create extensions from 100 to 200 simultaneously, enter "200..100" in the Number field. This way, all extensions in the selected range will be created with the same values.
:::

## SIP Extension Parameters

- **Active**: Whether the account is active or inactive.
- **Name**: The name of the extension.
- **Number**: The extension number, which is numeric and unique.
- **CID Number**: This is the Caller ID that is defined for the extension and appears in reports.
- **Password**: The password for the extension.
- **Call Record**: Call recording (by default, this is set to No, but if you need to record calls, this option should be set to Yes).
- **SPN (Push Notification)**: Enables the Push Notification feature for the extension (this is a feature of Simotel's softphone).
- **Deny**: Creates a restriction on access from a specific IP range.
- **Permit**: Allows access only from a specific IP range.
- **DTMF Mode**: The type of DTMF (Dual-tone multi-frequency) signaling used.
- **Can Re-Invite**: Allows direct communication from the extension to any destination without passing through the server (if set to Yes).
- **Direct Media**: Enables media (audio/video) exchange without passing through the server (if set to Yes).
- **Context**: The context for the extension.
- **Host**: By default, this is set to dynamic, but if the extension should only register from a specific IP, the IP address is entered here.
- **Type**: The type of extension, which can be User (outgoing only), Peer (incoming only), or Friend (both incoming and outgoing).
- **NAT**: For more information on NAT, refer to the VoIP with Asterisk soft switch reference book.
- **Port**: The port used for communication.
- **Qualify**: To check the connection (qualify = yes|no). If yes, PBX sends SIP OPTIONS every 2 seconds to check if the device is still online. This feature can also be used to maintain a UDP session for a device behind a NAT.
- **Call Group**: Defines the call group for the extension (to allow call hunting by other extensions).
- **Pickup Group**: Defines the pickup group for the extension (to allow call hunting by other extensions).
- **Call Counter**: Determines the extension's status in the queue. For example, if a call is made or the extension is in a conversation, and the call counter is set to Yes, the system will not route a call to this extension from the queue.
- **Fax Detect**: Detects fax tones.
- **Call Limit**: Limits the number of simultaneous calls for the extension.
- **Busy**: The number to forward calls to when the extension is busy.
- **No Answer**: The number to forward calls to when the extension doesn't answer.
- **Unavailable**: The number to forward calls to when the extension is unavailable.
- **All**: The number to forward calls to when the extension is in any of the above conditions.
- **More Option**: If a parameter is needed that is not listed above, it can be added here with its value. Each parameter should be entered on a new line.
- **Description**: A description for the extension.

## IAX2 Extension Parameters

:::info Information
Most IAX2 parameters are similar to SIP parameters.
:::

- **Active**: Whether the account is active or inactive.
- **Name**: The name of the extension.
- **Number**: The extension number, which is numeric and unique.
- **CID Number**: This is the Caller ID that is defined for the extension and appears in reports.
- **Password**: The password for the extension.
- **Call Record**: Call recording (by default, this is set to No, but if you need to record calls, this option should be set to Yes).
- **SPN (Push Notification)**: Enables the Push Notification feature for the extension (this is a feature of Simotel's softphone).
- **Deny**: Creates a restriction on access from a specific IP range.
- **Permit**: Allows access only from a specific IP range.
- **DTMF Mode**: The type of DTMF signaling used.
- **Context**: The context for the extension.
- **Host**: By default, this is set to dynamic, but if the extension should only register from a specific IP, the IP address is entered here.
- **Type**: The type of extension, which can be User (outgoing only), Peer (incoming only), or Friend (both incoming and outgoing).
- **Port**: The port used for communication.
- **Qualify**: To check the connection (qualify = yes|no). If yes, PBX sends SIP OPTIONS every 2 seconds to check if the device is still online. This feature can also be used to maintain a UDP session for a device behind a NAT.
- **Trunk**: This parameter can be set to Yes or No. Setting it to Yes saves bandwidth by reducing network overhead.
- **Transfer**: Determines whether media streams can be transferred directly between two users without passing through the server. Possible values:
  - **Yes**: The server attempts to transfer both signaling and media streams directly between users, but transcoding will not occur.
  - **No**: The server routes both signaling and media through itself.
- **Mediaonly**: In this case, only signaling streams pass through the server, and media streams are transferred directly between users.
- **Busy**: The number to forward calls to when the extension is busy.
- **No Answer**: The number to forward calls to when the extension doesn't answer.
- **Unavailable**: The number to forward calls to when the extension is unavailable.
- **All**: The number to forward calls to when the extension is in any of the above conditions.
- **More Option**: If a parameter is needed that is not listed above, it can be added here with its value. Each parameter should be entered on a new line.
- **Description**: A description for the extension.

### Question: What do the Mapped Column and Queue columns in the extension list display?
For example, when user 210 logs into phone 1001, in the table, 1001 will be displayed in the extension column and 210 will be shown in the Mapped Column. The queue column will show the queue number entered (For more information, refer to the [User Presence Pattern in the Queue and Extension Mapping in the Queue section](/pbx/pbx-menu/pbx/queues#Pattern-of-User-Presence-in-Queue-and-the-Ability-to-Map-Extensions)).

