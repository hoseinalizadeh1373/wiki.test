---
sidebar_label: "ارسال فکس"
title: "ارسال فکس"
---


# OutgoingFax

هنگامی که فکس از سیموتل ارسال می‌گردد، رویداد OutgoingFax ایجاد می‌گردد.


## پارامترهای رویداد
<div class="custom-table">

|             توضیحات             | داده‌های تعریف‌شده |        داده‌های نمونه       |       پارامتر‌ها       |
|:-------------------------------:|:----------------:|:--------------------------:|:---------------------:|
|         شناسه‌ی یکتای فکس        |         -        |  5f6f182c8a315630478f6d28  |         **fax_id**        |
|            نام رویداد           |         -        |         OutgoingFax        |       **event_name**      |
|         وضعیت ارسال فکس         |         -        |           SENDING          |         **state**         |
|         شناسه یکتای تماس        |         -        |      1601116173.161150     |       **unique_id**       |
|         تاریخ ارسال فکس         |         -        | 06:31:23.232477 2020-11-11 |          **date**         |
|                -                |         -        | error starting fax session | **info->FAXSTATUSSTRING** |
|                -                |         -        |         INIT_ERROR         |     **info->FAXERROR**    |
| توضیحاتی درمورد خطای فکس ارسالی |         -        |         INIT_ERROR         |     **info->FAXERROR**    |
|                -                |         -        |            None            | **info->REMOTESTATIONID** |
|                -                |         -        |              0             |     **info->FAXPAGES**    |
|                -                |         -        |            None            |    **info->FAXBITRATE**   |
|                -                |         -        |            None            |  **info->FAXRESOLUTION**  |
|                -                |         -        |              "             |      **info->REASON**     |
</div>

## نمونه خروجی رویداد OutgoingFax


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