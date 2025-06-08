---
sidebar_position: 2
---
# AutoDialerReport


After the end of each call in the bulk calling module, the call result will be sent.

---

<div class="custom-table">

|      Description      | Defined Data   |       Sample Data         |  Parameters  |
|:---------------------:|:--------------:|:--------------------------:|:-----------:|
| Event Name            | AutoDialerReport | -                        | **event_name** |
| Call Start Time       | -              | 2023-02-07 19:09:34.201000 | **start**     |
| Call End Time         | -              | 2023-02-10 19:09:00      | **end**       |
| Campaign ID           | -              | 63e24b3e3ba6c708b7612152 | **campaign_id** |
| Campaign Name         | -              | Simotel_campaign         | **campaign**  |
| Interface Context     | -              | context_sample           | **interface_context** |
| Interface Text        | -              | text_sample              | **interface_text** |
| Destination Number    | -              | 09151111111              | **number**    |
| Call Status           | Answered- No Answered- Busy | Answered         | **disposition** |
| Number of Tries       | -              | 1                        | **try**       |
| Campaign Repeat Count | -              | 8                        | **repeat**    |
| Call Duration         | -              | 5                        | **billsec**   |
| Call Wait Duration    | -              | 3                        | **wait**      |
| Try Details           | -              | [JSON...]                | **tries**     |

</div>

## Sample Output of AutoDialer Event

```shell
{
    'start': '2023-02-07 19:09:34.201000',
	'end': '2023-02-10 19:09:00',
	'campaign_id': '63e24b3e3ba6c708b7612152',
	'campaign': 'test12',
	'interface_context': '1111', 
    'interface_text': '2222', 
	'number': '09153012312',
	'disposition': 'ANSWERED',
	'try': 1,  
	'repeat': 27,  
	'billsec': 5,
	'wait': 2,
	'tries': [{      
		'cdr_id': '63e2a1f743a08d4ed9966fdb',
		'cause': '16',
		'cause-txt': 'Normal Clearing',
		'starttime': '2023-02-07 10:39:34',
		'disposition': 'ANSWERED',
		'wait': 2
	}]
}

```