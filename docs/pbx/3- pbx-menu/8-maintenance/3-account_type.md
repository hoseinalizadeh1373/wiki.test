# Account Type

In this section, access levels to the management web panel are managed.

## Simotel Web Access Levels

**Generally, Simotel web access is divided into three main categories:**

1. **Operation Access**: This refers to the necessary access for performing an operation in the panel. Operations include:
   - **Read**: Allows entry into a menu and viewing its content (lack of this access is akin to not having access to the menu).
   - **Update**: Allows for adding, editing, and deleting operations within the menu.
   - **Play**: Allows listening to audio files (in sections containing audio files).

2. **Menu Access**: Provides the ability to view and enter menus (in the web menu tree).

3. **Content Access**: Manages access to page content, which is done through user groups. For example, if a person only has access to the sales team reports, they will only see the relevant information in the reports.

## Access Level Parameters

- **Title**: Title of the access level.
- **Description**: Description of the access level.
- **Limited to groups**: By selecting this option, the ability to set a group for content limitation is activated.
  - **Groups**: Specify the group for content access limitation.
- **Expirable**: Allows defining a user account with a specified expiration date.
- **Read**: Clicking on the options in this column allows only viewing.
- **Update**: Clicking on the options in this column allows viewing and editing.
- **Play**: Clicking on the options in this column allows only viewing and playing audio files.
- **Details**:
  - **Remove**: Used to delete the account type.
  - **Edit**: Edit the user account type.
  - **Cut Current Access**: Disconnects logged-in access (useful when changing access levels and wanting to cut off all existing access immediately, requiring everyone to log in with the new access level).