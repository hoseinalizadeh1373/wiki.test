---
---
# OutgoingFax

When a fax is sent from SimulTel, the **OutgoingFax** event is triggered.

## Event Parameters

<div class="custom-table">

|             Description             | Defined Data |        Sample Data         |       Parameter        |
|:-----------------------------------:|:------------:|:--------------------------:|:----------------------:|
|         Unique Fax ID               |      -       |  5f6f182c8a315630478f6d28  |         **fax_id**      |
|            Event Name               |      -       |         OutgoingFax         |       **event_name**    |
|         Fax Sending Status          |      -       |           SENDING           |         **state**       |
|         Unique Call ID              |      -       |      1601116173.161150      |       **unique_id**     |
|         Fax Send Date               |      -       | 06:31:23.232477 2020-11-11 |         **date**        |
|                -                    |      -       | error starting fax session  | **info->FAXSTATUSSTRING** |
|                -                    |      -       |         INIT_ERROR          |     **info->FAXERROR**  |
| Explanation of Fax Sending Error    |      -       |         INIT_ERROR          |     **info->FAXERROR**  |
|                -                    |      -       |            None             | **info->REMOTESTATIONID** |
|                -                    |      -       |              0              |     **info->FAXPAGES**   |
|                -                    |      -       |            None             |    **info->FAXBITRATE**  |
|                -                    |      -       |            None             |  **info->FAXRESOLUTION** |
|                -                    |      -       |              "              |      **info->REASON**    |

</div>

## Sample Output of OutgoingFax Event



```shell
{
    'fax_id': '5f6f15ae8a31561ac504094a',
    'event_name': 'OutgoingFax',
    'state': 'SENDING',
    'unique_id': '1601115566.160596',
    'info': {
        'FAXSTATUS': 'FAILED',
        'FAXSTATUSSTRING': 'error starting fax session',
        'FAXERROR': 'INIT_ERROR',
        'REMOTESTATIONID': None,
        'FAXPAGES': '0',
        'FAXBITRATE': None,
        'FAXRESOLUTION': None,
        'REASON': ''
    },
    'date': '2020-11-11 06:31:23.232477'
}
```