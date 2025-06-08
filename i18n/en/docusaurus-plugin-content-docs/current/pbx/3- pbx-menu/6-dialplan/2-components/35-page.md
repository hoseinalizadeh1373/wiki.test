# Page

The Page component establishes simultaneous calls to one or more destinations without the need for destination confirmation. Once the call is established, the loudspeaker at the destination is activated, playing the caller's voice. Common use cases include creating conferences and public announcements. When the caller disconnects, the calls for all participants are terminated.

## Component Parameters

- **Extension**: Select the extension for paging. If no extension is selected, the call is directed to the extension corresponding to the entered number.

- **Timeout (sec)**: The ringing duration for the extension (in seconds).

- **Skip**: Determines the number of digits to be removed from the beginning of the entered number; the new number is then considered as the destination number.

- **Prefix**: Adds the specified number before the entered number; the new number is then considered as the destination number.

- **Options**: Contains various settings.