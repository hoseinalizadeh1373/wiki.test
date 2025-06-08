---
sidebar_position: 1
sidebar_label: "Contact Center"
---

# Contact Center

A contact center is a telecommunication network used within an organization or company. Users of the contact center (extensions) communicate with each other internally (within the organization) or externally (to the outside world) using various communication methods (including VoIP, ISDN network, and analog). Additionally, a contact center allows you to have more telephone lines than physical lines (PSTN).

## PBX
The `PBX` section is the foundational part of the system where, after defining values such as users (extensions), queues, and trunks, they are used in the `DialPlan` editor to implement the desired scenario. In this section, we will review the essential items needed for the initial setup of the contact center.


## Users
To use the contact center, you first need to define users. Once users are defined in the contact center, they can be registered on your VoIP phone or softphone. These users are referred to as **extensions**.

After registering the extensions on the phones, internal calls between users can be made.

:::caution Warning

The contact center section only includes basic information. To enable internal-to-internal calls, configurations in the DialPlan editor must also be completed.

:::



- In the `DialPlan` section, a standard scenario is implemented, and if you define your extensions as three-digit numbers `XXX`, internal-to-internal calls will be enabled by default.




For more information about extensions, please refer to [`this section`](/pbx/pbx-menu/pbx/users)


## Trunks

Trunks are used to establish connections between the VoIP system and other systems.



## Practical Examples of Using Trunks

- **Example** : When you acquire a contact center, the system provides you with all its features. However, to establish a connection between the telecommunication network and the VoIP system, you need to create a trunk between these systems. Specifically, when you purchase a landline number from a provider, this number needs to be defined in your system. A connection must be established between you and the provider so that when a call is made to the destination number, the provider directs the call to your contact center using a Route. Ultimately, based on the configured call scenario, the call is connected to one of the employees in your organization.

<br/><br/>
 
- **Example** : Imagine a company with several branches in different provinces, each having its own independent contact center. Given that these systems are not interconnected, how can a call received by the company's headquarters in Tehran be transferred to the production department supervisor at the Mashhad branch `Transfer`? Or how can internal calls be made between two branches of the company without incurring telecommunication costs? In this case, using trunks allows for logical connections between independent VoIP systems, enabling you to easily take advantage of the services mentioned above.


For more information about trunks, please refer to [`this section`](/pbx/pbx-menu/pbx/trunks)




## Queues

In organizations, there are various departments, each specializing in providing specific services to customers. For example, you can mention technical support and sales departments. In these departments, many individuals are working, so the best way to distribute tasks among the staff is to create a queue of operators. This way, customer calls are connected to the available individuals in the queue based on a fair pattern.
 
### Some Queue Features

- Define an unlimited number of queues
- Define eight different call distribution algorithms for the queue (e.g., ring all when a call enters the queue, sequentially based on priority, etc.)
- Set priorities for queue Agents (e.g., technical support agents ring first, and if all are busy, the supervisor’s phone rings last)
- Define hold music (e.g., when all agents are busy and the customer needs to wait, hold music is played)
- Queue entry and exit using special codes (e.g., an agent can enter the technical support queue by dialing code 91 and exit the queue at the end of the workday by dialing code 92)
- Record conversations of queue agents
 
For more information about queues, please refer to [`this section`](/pbx/pbx-menu/pbx/queues)

 
### Music On Hold
To use the Music On Hold feature for a queue, you first need to create a class and upload the Music On Hold files related to your queue into that class. After uploading the audio files, go to the "Queue" section and, under "Queue Settings," select your uploaded Music On Hold class.


For more information about music on hold, please refer to [`this section`](/pbx/pbx-menu/pbx/music_on_hold)

### Announcements

Often, it is necessary to provide an introduction about the organization’s departments in an audio file before connecting the caller to the organization's staff. The caller is then asked to press a specific number if they want to speak with a particular department. This capability is known as Interactive Voice Response (IVR), which will be fully explained in the future. Nevertheless, different organizations have their own specific audio files, so the audio file needs to be uploaded initially in the "Announcements" section and then assigned to the corresponding IVR.

 
### Examples of Announcements Usage

- Announcement for calls outside of business hours and days

- Announcement for call recording

- Announcement for end-of-call surveys
 
:::tip Note

In the Simotel contact center, a number of commonly used audio files are pre-uploaded by default. To view and play them, please refer to the "Announcements" section.

:::
 

For more information about announcements, please refer to [`this section`](/pbx/pbx-menu/pbx/announcements)
 
 
 
 
 
 
 
 
 