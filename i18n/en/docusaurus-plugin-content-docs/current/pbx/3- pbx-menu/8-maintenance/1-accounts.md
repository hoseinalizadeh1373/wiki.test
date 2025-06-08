# Accounts

This menu displays the list of users in the web panel. From this section, you can add new users and edit or delete existing ones.

## User Parameters

- **Name**: User's name.
- **Username**: Unique user account.
- **Password**: User's password.
- **Account Type**: Determines the access level to the panel; access levels are specified in the `Account Type` section.
- **Enabled**: Indicates whether the user account is active or inactive.
- **Details**:
  - **Remove**: Used to delete the account.
  - **Edit**: Edit the user account.
  - **Cut Current Access**: Disconnects logged-in access (useful when changing the password and wanting to cut off all current access immediately so that everyone must log in with the new password).

## Security Processes for User Panel Login

To enhance system security during the login phase, the following processes are checked in order:

1. **Captcha**: If the [captcha](/pbx/pbx-menu/maintenance/settings/general_settings) feature is enabled, many common attacks on the web panel will fail.
  
2. **Account Status (Active, Inactive)**: The system checks the status of the user account.

3. **Last Failed Attempt Time**: If the username or password is entered incorrectly, the time for the next login attempt must be at least 5 seconds; otherwise, the system will not allow access (prevents brute-force attacks).

4. **Number of Failed Attempts**: If more than three incorrect login attempts are made, the captcha feature is automatically activated. Ultimately, if ten consecutive incorrect attempts occur, the user account is automatically disabled.

5. **Password**: Finally, the entered password is checked by the system, and if the information is correct, the user is granted access to the web panel.

- **Note**: After a user logs into the web panel, information such as the user's IP, the account's active or inactive status, and the account expiration date are checked in real-time. If there are changes in any of these areas, the assigned session token becomes inactive, requiring the user to log in again.

:::info
**Information**: When there are multiple unsuccessful login attempts on a system, a report of the failed logins will be shown to the user after the first successful login.
:::