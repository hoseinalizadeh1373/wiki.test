# Autodialer Route

## Purpose
This component is used to handle calls from the Simotel's mass dialer module. Campaigns have two parameters: **Context Interface** and **Interface Text**, which refer to the Auto Dialer Route component when set.

The **Context Interface** is essentially the Context, and **Interface Text** refers to the rows of the component. If the Interface Text is not set, calls by default exit from the first available **any** output.

## Component Parameters

- **Context**: The context used in the **Context Interface** of the campaign.

- **Text**: Refers to the rows of the component. One of these rows will be used in the **Interface Text**, with the default being **any**.

:::tip Note
For more information about the mass dialer module, visit [here](/autodialer).
:::