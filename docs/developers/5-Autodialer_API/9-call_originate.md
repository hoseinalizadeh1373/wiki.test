---
title: "Originate Call"
---
### Originate Call with Campaign

The Bulk Dialer module can also be used to establish a Originate call. The advantage of this module becomes evident when the first party ends the call. In this case, by using the `autodialer_api/report/report_search` service, you can know when the call was ended by the first party.

:::info Information
For more information about the Bulk Dialer module, refer to the **[this section](/autodialer)**.
:::

:::tip Note
When using the Bulk Dialer module for Originate calls, each campaign will consist of a single contact (the first party of the call) instead of a group of contacts. Once the first party answers, you can use the `context_interface` and `interface_text` set in the campaign to direct the call to the `autodialer route` component. From there, the call can be connected to either the `trunk api` or `exten api` in the dial plan to connect with the second party.
:::

## Scenario Implementation Process

To initiate a call, use the **campaign add** service (1), and the final status of the numbers in the campaign can be obtained through the **campaign report search** service (2). In the campaign creation process, according to the **campaign add** service (1) documentation, the call can be directed to the dial plan using the **interface_context** and **interface_text** values. If required, you can manage the destination connection in the dial plan using **ExtensionAPI** or **TrunkApi** components (according to (3) and (4)). To retrieve the CDR for the second part of the call, you can use the **report search** service (5) or the **CDR report event** webhook (6). Finally, at the end of the conversation, the status of the conversation will be announced.

**1:** [Campaign Add Service](/i18n/en/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/4-campaign/1-campaign_add.md)

**2:** [Campaign Report Search Service](/i18n/en/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/7-report/1-report_search.md)

**3:** [Extension API Component Service](/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/3-DialplanApiComponents/3-exten_api.md)

**4:** [Trunk API Component Service](/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/3-DialplanApiComponents/4-trunk_api.md)

**5:** [Report CDR Search Service](/i18n/en/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/13-report/4-report_cdr_search.md)

**6:** [CDR Event Webhook Service](/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/2-Events/14-cdr.md)