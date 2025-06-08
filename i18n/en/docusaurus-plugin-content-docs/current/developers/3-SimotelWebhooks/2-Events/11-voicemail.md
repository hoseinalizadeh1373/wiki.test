---
---
# VoiceMail


When a voicemail is saved in Simotel (voicemail box), the **VoiceMail** event is triggered.


## Event Parameters

<div class="custom-table">

|        Description        | Defined Data   |       Sample Data         |  Parameters  |
|:-------------------------:|:--------------:|:--------------------------:|:-----------:|
|       Event Name          |         -       |          VoiceMail         | **event_name** |
|            -              |         -       |  5fedc34a1b05af9835bbcfdc  |     **id**     |
|    Voicemail Number       |         -       |            5555            |   **number**   |
|            -              |         -       |           FAILED           |    **state**   |
| Recorded Audio File Name  |         -       |              "             |  **filename**  |
|            -              |         -       |              "             |   **message**  |
|            -              |         -       |              "             |  **duration**  |
|            -              |         -       |         Hangup call        |   **message**  |
|       Caller Number        |         -       |             992            |   **caller**   |
|            -              |         -       |              "             |    **data**    |
|       Event Date           |         -       | 2020-12-31 12:25:46.417210 |    **date**    |

</div>


## Sample Output of VoiceMail Event


```shell
{
  "event_name": "VoiceMail",
  "id": "5fedc34a1b05af9835bbcfdc",
  "number": "5555",
  "state": "FAILED",
  "date": "2020-12-31 12:25:46.417210",
  "message": "Hangup call",
  "caller": "992"
}
```

```shell
{
  "event_name": "VoiceMail",
  "id": "5fedc3b31b05af9835bbcfdd",
  "number": "5555",
  "state": "SUCCESS",
  "date": "2020-12-31 12:27:31.752195",
  "filename": "5555_1609417639-vm-record-file-8766.wav",
  "duration": "1",
  "caller": "992"
}
```