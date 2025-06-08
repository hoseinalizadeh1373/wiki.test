---
sidebar_label: "گزارش ارسال ایمیل"
title: "گزارش ارسال ایمیل"
---


# VoiceMailEmail

در حالتی که گزینه ارسال ایمیل برای صندوق صوتی فعال باشد، پس از ارسال موفق یا ناموفق ایمیل، رویداد VoiceMailEmail ارسال می‌گردد.


## پارامترهای رویداد
<div class="custom-table">
|                 توضیحات                | داده های تعریف شده |       داده های نمونه       |    پارامترها  |
|:--------------------------------------:|:------------------:|:--------------------------:|:-------------:|
|                نام رویداد              |          -         |       VoiceMailEmail       |   event_name  |
|           شناسه یکتا تولید شده         |          -         |  5fedc34a1b05af9835bbcfdc  |       id      |
|             شماره صندوق‌صوتی            |          -         |            5555            |     number    |
|               وضعیت ارسال              |          -         |           FAILED           |     state     |
|                    -                   |          -         |         Hangup call        |    message    |
|             آدرس دریافت کنند           |          -         |      sample@gmail.com      |    receiver   |
|                    -                   |          -         |            True            |     active    |
|            پیوست فایل صوتی             |          -         |            False           | attached_file |
|                    -                   |          -         |              "             |      data     |
|   تاریخ بارگذاری فایل صوتی در مرکزتماس |          -         | 2020-12-31 12:25:46.418832 |      date     |
</div>

## نمونه خروجی رویداد VoiceMailEmail


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
