---
title: "Campaigns"
sidebar_label: "Campaigns"
---

# Campaigns

In this section, the information entered in previous steps is consolidated to create a campaign for bulk calling.

## Campaigns Parameters

- **Name**: Specify the campaign name.

- **Trunk Manager**: Select the Trunk Manager created in the previous step.

- **Context Interface**: If using the `AutoDialer Route` component to direct campaign calls to the dial plan, this value must match the **context** value entered in the `AutoDialer Route` component.

- **Interface Text**: If using the `AutoDialer Route` component to direct campaign calls to the dial plan, this value must match the **text** value entered in the `AutoDialer Route` component.

- **Contacts**: Specify the names of the contacts added in the previous section.

- **Groups**: Specify the list of groups added in the previous section.

- **Dial Interval (sec)**: If a call in the campaign is unanswered, define the interval (in seconds) before retrying the number. This parameter works alongside **Tries**, which defines the total number of attempts to call a contact.

- **Tries**: Specify the number of attempts for a successful call in the campaign.

- **Start**: Specify the start date of the bulk calling campaign. Press **Enter** after entering the date.

- **End**: Specify the end date of the bulk calling campaign. Press **Enter** after entering the date.

- **Announcement**: Select the name of the audio file added in the previous step.

- **Description**: Add descriptions about the campaign.

After creating the campaign, its initial status will be displayed as **waiting**. Once the bulk calling starts, the status will change to **running**, and upon completion, the status will update to **completed**.
