# Call Completion

## Purpose

This component is used for call reservation. It is applicable when one user tries to call another, but the destination is busy or does not answer. By enabling call reservation, once the destination disconnects (in case of a busy line) or after the first call attempt (if the destination does not answer), the system will first call the originating user. After the originating user answers, the system will then call the destination. This process is called call completion reservation.

## Parameters

**This component has two modes:**

- **Type**: The type of call reservation.
  - **Request**: Activates call reservation (usually placed after the internal component).
  - **Cancel**: Deactivates call reservation if it was previously activated (usually placed after the OutgoingRoute component and can be accessed via a specific pattern).