---
sidebar_position: 2
sidebar_label: " دریافت فکس"
title: " دریافت فکس"
---

# IncomingFax

هنگامی که فکسی وارد سیموتل می‌گردد، رویداد IncomingFax ایجاد می‌شود.


## پارامترهای رویداد
<div class="custom-table">

|                توضیحات               | داده‌های تعریف‌شده |        داده‌های نمونه        |           پارامتر‌ها          |
|:------------------------------------:|:----------------:|:---------------------------:|:----------------------------:|
|           شناسه‌ی یکتای فکس           |         -        |   5f6f182c8a315630478f6d28  |            **fax_id**            |
|              نام رویداد              |         -        |         IncomingFax         |          **event_name**          |
|            مبداء ورودی فکس           |         -        |           mikrotik          |          **entry_point**         |
|           شناسه یکتای تماس           |         -        |      1601116173.161150      |           **unique_id**          |
|           مبداء ارسال کننده          |         -        |         02191015504         |              **src**             |
|            مقصد ارسال فکس            |         -        |          2191015504         |              **dst**             |
|               وضعیت فکس              |  Success- Failed |            FAILED           |             **state**            |
|            زمان دریافت فکس           |         -        |  10:30:04.919984 2020-09-26 |             **date**             |
|       شناسه‌ی یکتای ارسال کننده       |         -        |           unknown           | **description->REMOTESTATIONID** |
|          رزولوشن دریافت فکس          |         -        |          8031x7700          |  **description->FAXRESOLUTION**  |
|                   -                  |         -        |             9600            |    **description->FAXBITRATE**   |
| توضیحاتی در مورد خطای دریافتی در فکس |         -        | Unexpected message received |     **description->FAXERROR**    |
|                   -                  |         -        |            FAILED           |    **description->FAXSTATUS**    |
|                   -                  |         -        |              0              |     **description->FAXPAGES**    |
|                   -                  |         -        | Unexpected message received | **description->FAXSTATUSSTRING** |
|                   -                  |         -        |              "              |      **description->REASON**     |

</div>

## نمونه خروجی رویداد ورودی fax


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