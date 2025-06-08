---
sidebar_position: 2
sidebar_label: "گزارش تماس انبوه"
title: "گزارش تماس انبوه"
---


# AutoDialerReport

پس از پایان هر تماس در ماژول تماس انبوه؛ نتیجه تماس ارسال خواهد شد.


<div class="custom-table">

|      توضیحات      | داده های تعریف شده |       داده های نمونه       |  پارامترها |
|:-----------------:|:------------------:|:--------------------------:|:----------:|
| نام رویداد | AutoDialerReport | - | **event_name** |
| تاریخ شروع مکالمه | - | 2023-02-07 19:09:34.201000 | **start** |
| تاریخ پایان مکالمه | - | 2023-02-10 19:09:00 | **end** |
| شناسه کمپین | - | 63e24b3e3ba6c708b7612152 | **campaign_id** |
| نام کمپین | - | Simotel_campaign | **campaign** |
| به بخش ماژول تماس انبوه مراجعه شود | - | context_sample | **interface_context** |
| به بخش ماژول تماس انبوه مراجعه شود | - | text_sample | **interface_text** |
| شماره مقصد | - | 09151111111 | **number** |
| وضعیت تماس | Answered- No Answered- Busy | Answered | **disposition** |
| تعداد تلاش ها | - | 1 | **try** |
| تکرار کمپین | - | 8 | **repeat** |
| مدت تماس | - | 5 | **billsec** |
| مدت انتظار تماس | - | 3 | **wait** |
| جزيیات تلاش ها | - | [JSON...] | **tries** |
</div>

## نمونه خروجی رویداد AutoDialer

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