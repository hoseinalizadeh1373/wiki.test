---

slug: '/autodialer'  
title: AutoDialer  

---

# Introduction  

Using the mass calling module, you can automatically contact thousands of people with just a few clicks and play a specific audio file (notifications, telemarketing, etc.). You can configure your calling scenario in such a way that after the audio file ends, the recipients can connect to your agents. For more information about the mass calling module component, visit [here](/pbx/pbx-menu/dialplan/components/autodialer_route).  

**To use the mass calling module, the following steps must be completed in order:**  

1. Add the numbers of the contacts for the mass call (Contacts).  

2. Upload an Excel file of the numbers for the mass call (Groups).  

3. Upload the audio file for the mass call (Announcements).  

4. Create a trunk to send the calls (Trunk Manager).  

5. Create a **campaign** and send the mass calls (Campaigns).  

6. Review the reports related to the campaign (Reports).  

**What is the difference between step one and step two?**  
In some cases, the goal of the mass call is specific individuals. In this case, the details such as the name and number of the individuals are entered in the `Contacts` section. However, in other cases, the target is not specific individuals but rather a group of numbers (e.g., the phone numbers of users in district 4 of Tehran). In such cases, the Excel file containing the numbers is uploaded in the `Groups` section.  

Keep in mind that in steps one to four, you are only entering the basic information related to the mass call (campaign). In step five, by creating the campaign, all the previously entered information is consolidated, and the Call Center starts sending the calls.  

:::tip Note  
Using the API package provided for the mass calling module, you can manage the above steps automatically. For more information, visit [here](../developers/Autodialer_API/introautodialer).  
:::  

---  

For accurate and professional translations, try **[HIX Translate](https://hix.ai/translate)**, powered by ChatGPT 3.5/4.