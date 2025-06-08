---
---
# CDRQueue

After the caller is connected to one of the queue operators, the **CDRQueue** event is generated.

---

## Event Parameters

<div class="custom-table">

|        Description        | Defined Data   |        Sample Data         |       Parameters        |
|:-------------------------:|:--------------:|:--------------------------:|:-----------------------:|
|       Event Name          |         -       |         CdrQueue           |      **event_name**     |
|    Unique Call ID         |         -       |        1610004672.198      |      **cuid**           |
|    Two-way Call ID        |         -       |        orig.call.1683107010.780601 | **originated_call_id**  |
|       Source Number       |         -       |             991            |       **src**           |
|       Destination Number  |         -       |             992            |       **dst**           |
|       Queue Number        |         -       |             901            |      **queue**          |
|       Call Duration       |         -       |             11             |      **billsec**        |
|       Wait Time           |         -       |             10             |       **wait**          |
|       Total Call Duration |         -       |             21             |      **duration**       |
|       Agent Wait Time     |         -       |             10             |     **agent_wait**      |
|       Call Status         |         -       |          ANSWERED          |    **disposition**      |
|            -              |         -       |             -              |    **queue_status**     |
|       Call Hang-up By     |         -       |            caller          |      **hangup**         |
|            -              |         -       |             -              |      **comment**        |
|       Audio File Name     |         -       | 20210107_1610004672.198.mp3 |     **record**          |
|            -              |         -       |  2021-01-07 07:31:23.860004 | **answeredtime**       |
|            -              |         -       |  2021-01-07 07:31:13.289281 |     **ringtime**        |
|       Call Start Time     |         -       |  2021-01-07 07:31:13.247554 |    **starttime**        |
|       Call End Time       |         -       |  2021-01-07 07:31:35.077859 |     **endtime**         |
|            -              |         -       |             991            |    **detail->src**      |
|            -              |         -       |             992            |    **detail->dst**      |
|            -              |         -       |             11             | **detail->billsec**     |
|            -              |         -       |             10             |    **detail->wait**     |
|            -              |         -       |          ANSWERED          | **detail->disposition** |
|            -              |         -       |             -              | **detail->comment**     |
|            -              |         -       |             1              |    **detail->tries**    |

</div>


## Sample Output of CDRQueue Event


```shell
{
  "event_name": "CdrQueue",
  "unique_id": "1610782193.391",
  "src": "992",
  "dst": "993",
  "queue": "902",
  "billsec": "31",
  "wait": "3",
  "duration": "34",
  "agent_wait": "3",
  "disposition": "ANSWERED",
  "hangup": "agent",
  "queue_status": "CONTINUE",
  "record": "20210116_1610782193.391.mp3",
  "answeredtime": "2021-01-16 07:29:56.819506",
  "ringtime": "2021-01-16 07:29:53.382906",
  "starttime": "2021-01-16 07:29:53.310319",
  "endtime": "2021-01-16 07:30:28.794906",
  "detail": [
    {
      "src": "992",
      "dst": "993",
      "billsec": "31",
      "wait": "3",
      "disposition": "ANSWERED",
      "comment": "",
      "tries": "1"
    }
  ]
}
```