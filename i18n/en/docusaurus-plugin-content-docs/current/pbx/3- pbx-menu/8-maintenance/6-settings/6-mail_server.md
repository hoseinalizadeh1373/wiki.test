# Mail Server

To enable email sending capabilities in the Simotel Call Center for sending voicemails, information needs to be sent to the email server using the SMTP protocol (the protocol that email servers use to communicate with each other). Simotel supports this protocol by default.

:::info
**Information**: This guide uses Google’s email service and is based on the settings required for Gmail.
:::

## Mail Server Settings in Simotel

1. First, navigate to `maintenance > setting > mail server`.

2. Then, fill in the details as shown in the image below to specify the desired email server and the account from which the requests to send emails will be made (for better visibility, close the sidebar).

   ![1](/img/simotel/mail_server/1.jpg)

## Gmail Settings in Your Google Account

First, log into your Google account. In the security section, you need to disable **two-step verification** and enable **access for less secure apps**.

![2](/img/simotel/mail_server/2.jpg)

## Voicemail Settings in Simotel

Finally, by adding Voicemail to the Simotel Call Center and entering the email address while activating it, the audio file of the voicemail along with the caller's information will be sent to the specified email via the email server defined in the first section.

![3](/img/simotel/mail_server/3.jpg)

In this example, both the sender and receiver of the email are `vahidsadrnia`.

**Example of a received message in Inbox:**

![4](/img/simotel/mail_server/4.jpg)

To check the status of email sending, you need to review the `simotel.log` reports.

![5](/img/simotel/mail_server/5.jpg)

For more information about Google’s service, refer to **[here](https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server)**.