# Authentication

## Usage

In some cases, authentication is required to access specific areas to prevent potential misuse. Specific instances include entering a conference room and using the DISA feature.

## Component Parameters

- **Type**: The type of authentication
  - **Use user secret**: This method uses an internal password.
  - **Use defined secret**: This method uses a password defined in the Defined secret parameter, which is shared among all users who wish to use it.

- **Defined secret**: The fixed password.