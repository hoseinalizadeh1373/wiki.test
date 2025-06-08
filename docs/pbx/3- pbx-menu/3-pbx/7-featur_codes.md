# Feature Codes

Some features in Simotel require the definition of special codes. In this section, feature codes are defined and managed.

## Feature Code Parameters

- **Feature code type**: The types of feature codes related to the system are defined in this field, including:

	- **Enter to queue**: This code allows the operator to enter a queue. Entering the queue uses the "map" feature.
  
	- **Leave from queue**: This code allows the operator to leave the queue.

	- **Pause user in queue**: This code allows the operator to pause in the queue and no calls will be sent to them.

	- **Un-Pause user in queue**: This code allows the operator to un-pause and start receiving calls again.

	- **Pause user**: This code puts the user into pause mode, and no calls will be sent to them.

	- **Un-Pause user**: This code takes the user out of pause mode.

	- **Add call to blacklist**: This code allows the user to add the last call or any other number to the blacklist.

	- **Who am I**: This code announces the active extension on the phone (if an extension is mapped, it announces the mapped extension; otherwise, it announces the main registered extension).

	- **Call forwarding**: This code allows the user to forward calls from their extension to another number.

- **Code**: A unique number that is assigned to use the feature code.

- **Authentication Type**: This parameter is used to authenticate the user when using the feature code. Its values include:

	- **Login without authentication**: The user can use the feature code without authentication.

	- **Login with user’s secret**: The user needs to enter their own internal password to use the feature code.

	- **Login with defined password**: The user needs to enter the password defined by the network administrator for all users.

- **Password**: If "Login with defined password" is selected in the previous section, the user must use the password defined here to use the feature code.

- **Agent Number Policy**: This parameter relates to obtaining the user’s number for performing the feature code operation (e.g., when the user enters their agent number to join the queue).

	- **Get agent number from user**: The user must enter their agent number.

	- **Use user’s number as agent number**: No need for the user to enter a number. The system automatically takes the user’s phone number as their agent number.

- **Queue Policy**: This parameter is related to obtaining the queue number for performing the feature code operation:

	- **Queue is not required**: For codes that do not require a queue, it won’t ask for a queue number.

	- **Get queue from user**: It asks the user for the queue number.

	- **Use default queue**: The operation is performed on the default queue number set by the network administrator.

- **Default Queue**: If "Use default queue" is selected in the previous parameter, this section is used. The network administrator can enter a default queue number here, and the feature code will operate on this queue without asking the user for the queue number.

:::tip
Multiple feature codes can be defined for each "Feature code type".
:::

## System Feature Codes

These are predefined feature codes in the system that cannot be changed, including:

- **\*** : Using two stars allows call transfer (blind transfer), where the call is directly transferred to the entered number after entering the internal extension number.

- **##** : Using two hashes allows call transfer (attended transfer), where the first operator talks to the second operator, and if the first operator hangs up, the call is transferred to the second operator.

## Feature Codes in the Editor

To use some Call Center features like `disa`, `conference`, `page`, and `chanspy`, special feature codes must be defined. These codes should be written as **routes** in the dial plan. For example, to listen to conversations in the `Outgoing Route` component, a pattern should be written to connect to the `chanspy` component, which acts as the feature code.