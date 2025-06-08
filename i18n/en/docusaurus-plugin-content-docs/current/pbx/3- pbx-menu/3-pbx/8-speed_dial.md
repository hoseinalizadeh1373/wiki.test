# Speed Dial

For convenience in dialing, short codes can be defined for desired numbers. By dialing these codes, the system automatically converts them into reference numbers and performs the desired operation (call).

## Speed Dial Parameters

- **Name**: Display name.

- **Code**: A unique code defined for the main number.

- **Number**: The main contact number.

:::tip Note:
Make sure that the number selected as "Code" is not already used for extensions, as Speed Dial codes have high priority and will be converted into the "Number" in the **OutgoingRoute** component before any other action. This logical error is not checked by the system and may cause issues in system operation.
:::