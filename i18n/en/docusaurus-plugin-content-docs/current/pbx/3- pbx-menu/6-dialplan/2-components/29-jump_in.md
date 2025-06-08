# Jump In

## Usage

In the editor page of any organization, depending on the type of strategy, there may be complexities in implementation. This component, along with the Jump Out component (which complements each other), is used to connect two points and acts as an invisible path between components. These two components do not perform any operations on the call; they are merely used to simplify the design of the call path in the editor.

It is recommended to use these two components for jumping between different pages instead of long connections between components, repetitive paths, and similar cases.

To use these components, simply place the JumpIn component at the beginning of the destination path and define a unique name for it in the Name section. Then, place the JumpOut component at the end of the source path and select the destination component's name from the JumpIn Name section.

## Component Parameters

- **Name**: The name of the jump input. This name is used in Jump Out for the jump destination.