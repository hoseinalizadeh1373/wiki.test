---
sidebar_label: "Trunk Manager"
title: "Trunk Manager"
---

# Trunk Manager

The trunk connects the contact center to the telecommunications network. Since the goal is bulk calling, limitations need to be applied to the trunk. These include defining the maximum number of simultaneous outgoing calls and the timeframes for making calls. After creating the Trunk Manager, it will be used in campaigns for bulk calling.

## Trunk Manager Parameters

- **Name**: Define a name for the Trunk Manager.

- **Trunk**: Select the trunk responsible for outgoing calls.

- **Status**: Specify whether the Trunk Manager is active or inactive.

- **Dial Times**: Define the days and hours of the week for bulk calling.

- **Capacity**: Specify the maximum number of channels to be used simultaneously by the bulk calling module. For instance, if you have an E1 line with 30 channels, you can set the bulk calling module to use up to 20 channels simultaneously, leaving 10 channels free for staff to handle incoming and outgoing calls.

- **Dial Interval**: Define the interval between each call sent to the trunk. For example, if set to five, a call will be sent every five seconds. This parameter is measured in seconds.

- **Wait Cache Length**: Specify the number of records retrieved from the database per query. For instance, if set to 100, 100 records will be fetched per query. The default value is the most suitable setting.
