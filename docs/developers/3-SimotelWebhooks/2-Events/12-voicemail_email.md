---
---
# VoiceMailEmail


When the email sending option for voicemail is enabled, the **VoiceMailEmail** event is triggered after the email is sent successfully or unsuccessfully.



## Event Parameters

<div class="custom-table">

|                 Description                | Defined Data   |       Sample Data         |    Parameters   |
|:-----------------------------------------:|:--------------:|:--------------------------:|:---------------:|
|                Event Name                 |         -       |       VoiceMailEmail       |   **event_name** |
|           Unique ID Generated             |         -       |  5fedc34a1b05af9835bbcfdc  |      **id**      |
|             Voicemail Number              |         -       |            5555            |    **number**    |
|               Send Status                 |         -       |           FAILED           |    **state**     |
|                    -                      |         -       |         Hangup call        |   **message**    |
|             Receiver Address              |         -       |      sample@gmail.com      |   **receiver**   |
|                    -                      |         -       |            True            |    **active**    |
|            Audio File Attachment          |         -       |            False           | **attached_file** |
|                    -                      |         -       |              "             |      **data**    |
|   Date of Audio File Upload to Call Center|         -       | 2020-12-31 12:25:46.418832 |      **date**    |

</div>


## Sample Output of VoiceMailEmail Event


```shell
{
  "event_name": "VoiceMailEmail",
  "id": "5fedc34a1b05af9835bbcfdc",
  "number": "5555",
  "state": "FAILED",
  "date": "2020-12-31 12:25:46.418832",
  "message": "Hangup call",
  "receiver": "sample@gmail.com",
  "active": "true",
  "attached_file": "False"
}
```

```shell
{
  "event_name": "VoiceMailEmail",
  "id": "5fedc3b31b05af9835bbcfdd",
  "number": "5555",
  "state": "SUCCESS",
  "date": "2020-12-31 12:27:38.290333",
  "receiver": "sample@gmail.com",
  "active": "True",
  "attached_file": "False"
}
```


```shell
{
  "event_name": "VoiceMailEmail",
  "id": "5fedc58c1b05af9835bbcfdf",
  "number": "5555",
  "state": "FAILED",
  "date": "2020-12-31 12:35:29.731122",
  "message": "SMTP is disabled",
  "receiver": "sample@gmail.com",
  "active": "True",
  "attached_file": "False"
}
```


```shell
{
  "event_name": "VoiceMailEmail",
  "id": "5fedc6001b05af9835bbcfe1",
  "number": "5555",
  "state": "FAILED",
  "date": "2020-12-31 12:37:34.461816",
  "message": "(535, b Incorrect authentication data)",
  "receiver": "sample@gmail.com",
  "active": "True",
  "attached_file": "False"
}
```
