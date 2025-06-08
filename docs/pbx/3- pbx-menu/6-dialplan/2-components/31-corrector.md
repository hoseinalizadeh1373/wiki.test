# Corrector

## Usage

If you've worked with the Extension and Trunk components, you're likely familiar with the Skip and Prefix parameters. There, we used these parameters to modify the entered number to convert it into the required format. These changes were limited to that component, and the entered number would not change in the subsequent components. The Corrector component performs similar modifications on the entered number, caller ID, and caller name, with the difference that these changes become persistent and are used in the subsequent call path.

:::tip Note
Here, the term "Extension" refers to the number dialed by the caller.
:::

## Component Parameters

- **Caller ID**: By setting this parameter, a new caller ID is defined for the caller.

- **Caller ID Skip**: Determines the number of digits to be removed from the beginning of the caller ID.

- **Caller ID Prefix**: Adds the specified number before the caller ID.

- **Caller Name**: By setting this parameter, a new name is defined for the caller.

- **Caller Name Skip**: Determines the number of characters to be removed from the beginning of the caller's name.

- **Caller Name Prefix**: Adds the specified number before the caller's name.

- **Extension**: By setting this parameter, the entered number is modified.

- **Extension Skip**: Determines the number of digits to be removed from the beginning of the entered number.

- **Extension Prefix**: Adds the specified number before the entered number.

- **Set Extension on DID**: The value entered in Extension is set as the DID.