---
sidebar_position: 2
---
# IncomingFax

When a fax is received in SimulTel, the **incomingfax** event is triggered.


## Event Parameters

<div class="custom-table">

|                Description                | Defined Data |        Sample Data         |          Parameter           |
|:----------------------------------------:|:------------:|:--------------------------:|:----------------------------:|
|           Unique Fax ID                   |      -       |   5f6f182c8a315630478f6d28  |            **fax_id**         |
|              Event Name                   |      -       |         IncomingFax         |          **event_name**       |
|            Fax Entry Point                |      -       |           mikrotik          |          **entry_point**      |
|           Unique Call ID                  |      -       |      1601116173.161150      |           **unique_id**       |
|           Fax Sender Source               |      -       |         02191015504         |              **src**          |
|            Fax Destination                |      -       |          2191015504         |              **dst**          |
|               Fax Status                  | Success/Failed |            FAILED           |             **state**         |
|            Fax Receive Time               |      -       |  10:30:04.919984 2020-09-26 |             **date**          |
|       Unique Sender ID                    |      -       |           unknown           | **description->REMOTESTATIONID** |
|          Fax Resolution                   |      -       |          8031x7700          |  **description->FAXRESOLUTION**  |
|                   -                       |      -       |             9600            |    **description->FAXBITRATE**   |
| Fax Error Description                     |      -       | Unexpected message received |     **description->FAXERROR**    |
|                   -                       |      -       |            FAILED           |    **description->FAXSTATUS**    |
|                   -                       |      -       |              0              |     **description->FAXPAGES**    |
| Fax Status String                         |      -       | Unexpected message received | **description->FAXSTATUSSTRING** |
|                   -                       |      -       |              "              |      **description->REASON**     |

</div>

## Sample Output of IncomingFax Event


```shell
{
  "fax_id": "5f6f182c8a315630478f6d28",
  "entry_point": "mikrotik",
  "unique_id": "1601116173.161150",
  "date": "2020-09-26 10:30:04.919984",
  "description": {
    "REMOTESTATIONID": "unknown",
    "FAXRESOLUTION": "8031x7700",
    "FAXBITRATE": "9600",
    "FAXERROR": "Unexpected message received",
    "FAXSTATUS": "FAILED",
    "FAXPAGES": "0",
    "FAXSTATUSSTRING": "Unexpected message received"
  },
  "event_name": "IncomingFax",
  "src": "02191015504",
  "state": "FAILED",
  "dst": "2191015504"
}
```

```shell
{
  "fax_id": "5f6f162b8a315630478f6ca0",
  "entry_point": "mikrotik",
  "unique_id": "1601115566.160597",
  "date": "2020-09-26 10:21:31.789362",
  "description": {
    "REMOTESTATIONID": "unknown",
    "FAXRESOLUTION": "8031x3850",
    "FAXBITRATE": "14400",
    "FAXERROR": "None",
    "FAXSTATUS": "SUCCESS",
    "FAXPAGES": "1",
    "FAXSTATUSSTRING": "OK"
  },
  "event_name": "IncomingFax",
  "src": "02191015504",
  "state": "SUCCESS",
  "dst": "2191015504"
}
```