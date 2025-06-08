---
sidebar_label: "ذخیره فایل صوتی"
title: "ذخیره فایل صوتی"
---


# VoiceMail

هنگامی که پیام صوتی در سیموتل ذخیره شود (صندوق صوتی)، رویداد  VoiceMail ارسال می‌گردد.


## پارامترهای رویداد
<div class="custom-table">
|        توضیحات        | داده های تعریف شده |       داده های نمونه       |  پارامترها |
|:---------------------:|:------------------:|:--------------------------:|:----------:|
|       نام رویداد      |          -         |          VoiceMail         | **event_name** |
|           -           |          -         |  5fedc34a1b05af9835bbcfdc  |     **id**     |
|    شماره صندوق صوتی   |          -         |            5555            |   **number**   |
|            -          |          -         |           FAILED           |    **state**   |
| نام فایل صوتی ظبط شده |          -         |              "             |  **filename**  |
|            -          |          -         |              "             |   **message**  |
|            -          |          -         |              "             |  **duration**  |
|            -          |          -         |         Hangup call        |   **message**  |
|       شماره مبدا      |          -         |             992            |   **caller**   |
|            -          |          -         |              "             |    **data**    |
|      تاریخ رویداد     |          -         | 2020-12-31 12:25:46.417210 |    **date**    |

</div>

## نمونه خروجی رویداد VoiceMail


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