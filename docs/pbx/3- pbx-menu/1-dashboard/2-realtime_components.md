# Real-Time Components

This section provides a detailed overview of each of the components that offer real-time output.

## Trunk Status
This component displays the status of the trunks in the contact center. Its parameters include:

- **Title**: Specifies the display name of the component on the page.

- **View as**: Defines how the information is displayed, including options like:

- **Items**: The component items include:
    - **Deactivated**: Displays inactive trunks.
    - **Unavailable**: Displays trunks that are unavailable for any reason (e.g., when there are issues accessing the Host).
    - **Ok**: Displays trunks with an OK status.

## Server Stats
This component shows information about CPU and RAM usage. Its parameters include:

- **Title**: Specifies the display name of the component on the page.

- **View as**: Defines how the information is displayed, including options like:

- **Items**: The component items include:
    - **CPU**
    - **RAM**

## Exten Status
This component provides a real-time status of the extensions in the contact center. Its parameters include:

- **Title**: Specifies the display name of the component on the page.

- **View as**: Defines how the information is displayed, including options like:

- **Items**: The component items include:
    - **Idle**: The extension is idle (ready to use).
    - **Ringing**: The extension is ringing.
    - **In-Use**: The extension is in use.
    - **Paused**: The extension is paused.
    - **Unavailable**: The extension is unavailable.
    - **Hold**: Calls on hold.
    - **Invalid**: The extension status is invalid.

- **Extensions**: Allows specifying the extensions to include in the report.

- **Groups**: If user groups are defined in the contact center, they can be selected here.

## Agent Status
This component provides a real-time status of the agents in the contact center. Its parameters include:

- **Title**: Specifies the display name of the component on the page.

- **View as**: Defines how the information is displayed, including options like:

- **Items**: The component items include:
    - **Idle**: The agent is idle (ready to take calls).
    - **Ringing**: The agent's phone is ringing.
    - **In-Use**: The agent is currently using their phone.
    - **Paused**: The agent is paused.
    - **Unavailable**: The agent is unavailable.
    - **Hold**: Calls on hold for the agent.
    - **Invalid**: The agent's status is invalid.

- **Queue**: Specifies the queues to be included in the report.