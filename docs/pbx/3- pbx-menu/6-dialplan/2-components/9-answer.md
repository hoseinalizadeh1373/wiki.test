# Answer

## Purpose
The **Answer** component is used for automatically answering calls. This component is typically used before playing audio messages (such as IVR or Announcements). The reason is that a call must first be answered before any audio is exchanged; otherwise, the caller will not hear the audio message.

## Parameters

- **Type**: The type of call answer, which can be one of the following:
    - **Answer**: Audio exchange is allowed, but the call status in the Call Center reports remains "No Answer".
    - **Progress**: Only the dialing tone is heard, and no audio is exchanged.
    - **Definite Answer**: Audio exchange is allowed, and the call status in the Call Center reports is marked as "Answer".