---
sidebar_position: 1
sidebar_label: "معرفی Simotel API"
title: "Simotel API"
---



# معرفی و تنظیمات


## معرفی Simotel API

SA مجموعه ای از APIها هستند که با ارسال درخواست از سمت وب‌ سرویس به سمت سیموتل شروع می‌شوند، این سرویس در قالب استاندارد RestAPI ایجاد گردیده است. برای مثال با ارسال درخواست تماس‌ دوطرفه از سمت وب‌ سرویس به سمت سیموتل، پس از دریافت درخواست مرکز تماس شروع به ایجاد تماس دوطرفه می‌کند.

## تنظیمات راه‌اندازی Simotel Api 

- **ایجاد حساب برای درخواست دهنده.**
- **تعیین IP‌های مجاز به ارسال درخواست.**

### ایجاد حساب
به بخش `Maintenance > API Accounts` مراجعه فرمایید. با کلیک بر روی ➕ امکان ساخت کاربر جدید فراهم می‌شود، پارامترهای این بخش به شرح زیر می‌باشند:

- **Authentication**: سیموتل از روش‌های مختلفی برای احراز هویت کاربر درخواست دهنده استفاده می‌کند، امن‌ترین روش؛ استفاده
 از BasicAuth (نام‌کاربری و رمزعبور)  به همراه API Key (Token) می‌باشد.

- **Username**: نام‌کاربری کاربر ساخته شده.

- **Password**: رمزعبور کاربر ساخته شده.

- **Token**: رشته‌ای که در جهت احرازهویت قوی‌تر تولید می‌شود.

- **Enabled**: امکان فعال یا غیر‌فعال‌سازی کاربر را در اختیار شما قرار می‌دهد.

- **Request**: میزان سطح دسترسی کاربر به APIها را مشخص می‌کند، برای مثال در صورت نیاز به افزودن کاربر با استفاده
 از API حتما باید تیک /pbx/users/add فعال شود.
 
### ایجاد دسترسی برای IP
به بخش `Maintenance > Settings` مراجعه فرمایید. در پایین صفحه بخش Simotel API دو بخش مشاهده می‌شود:

- **Allow All IPs**: با زدن تیک این بخش دسترسی تمامی IPها برای ارسال درخواست به سمت سیموتل باز می‌شود.

- **Allowed IPs**: در صورتی که IP خاصی مد نظر می‌باشد در این بخش وارد کنید و در نهایت دکمه Enter را بزنید.

## اعتبارسنجی

**اعتبارسنجی به یکی از سه روش زیر انجام می‌گردد:**

- **HTTP Basic authentication**: استاندارد  Basic  authentication روشی عمومی برای اعتبارسنجی در وب‌سرویس‌ها می‌باشد. بازیابی اطلاعات دسترسی در این روش،
 به دلیل امنیت پایین آن بسیار ساده می‌باشد و توصیه می‌گردد که حداقل بصورت SSL استفاده گردد. اطلاعات مربوط به یوزر و پسورد با فرمت base64 در هدر درخواست 
 به صورت زیر قرار میگیرد.
 
```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng
```

Basic Auth را می‌توان در آدرس به صورت زیر نیز ارسال کرد

```shell
https://username:password@www.example.com
```

- **API Key**: در این روش که برای بهبود امنیت روش قبلی ایجاد‌شده و به صورت گسترده در API ها استفاده می‌گردد، کلیدی یکتا ایجاد می‌گردد و در هدر
 درخواست به صورت زیر اضافه می‌شود.
 
```shell
X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
```

- **HTTP Basic authentication & API Key**: در این روش از ترکیب دو روش بالا استفاده می‌گردد.

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng

X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
```


## نمونه‌ Header

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng==
X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
Content-Type: application/json
```

- **Authorization**: اعتبار سنجی Basic Authentication.
- **X-APIKEY**: اعتبار سنجی API-key.
- **Content-Type**: فرمت بدنه پیام. در تمام درخواست‌ها به غیر از سرویس‌های دانلود و استریم، فرمت بدنه پیام application/json می‌باشد.

## پیام‌های رایج در پاسخ به درخواست

انواع پاسخ هایی که در سرویس‌های SA دریافت می‌شود به شرح زیر است.
<div class="custom-table">
|                                              توضیحات                                             | success |                                                                                        message                                                                                       |           header           |
|:------------------------------------------------------------------------------------------------:|:-------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------:|
|                      سرویس به درستی فراخوانی شد و عملیات به درستی انجام شد.                      |    1    |                                                                                           -                                                                                          |           Ok-200           |
| سرویس به درستی فراخوانی‌شده اما در انجام عملیات خطایی رخ‌داده.خطای مربوطه در قسمت message ذکر شده. |    0    | "corresponding error" such as: This number already exists \Field 'field_name':value is missing \Requested operation failed \This trunk already exists \this queue already exists     |           Ok-200           |
|                                  فرمت محتوی درخواستی صحیح نیست.                                  |    0    |                                                                                Unable to parse content                                                                               |       Bad Request-400      |
|                               هیچ اطلاعات اعتبار‌سنجی وارد نشده‌ است.                               |    0    |                                                                            BasicAuth or ApiKey is missing                                                                            |      Unauthorized-401      |
|                              اطلاعات اعتبارسنجی ناقص یا نامعتبر است.                               |    0    |                                                                            BasicAuth or ApiKey is invalid                                                                            |      Unauthorized-401      |
|                             کلایت اجازه دسترسی به این سرویس را ندارد.                             |    0    |                                                                                 "....";Access denied                                                                                 |        Forbidden-403       |
|                          IP کلاینت اجازه دسترسی به این وب‌سرویس را ندارد.                          |    0    |                                                                                  IP is not permitted                                                                                 |        Forbidden-403       |
|                   آدرس‌دهی اشتباه وارد شده و خطا 404 از سمت آپاچی ارسال شده است.                  |    -    |                                                                                           -                                                                                          |        Not Found-404       |
|                           فایل درخواستی وجود ندارد(در زمان دانلود فایل).                          |    -    |                                                                                           -                                                                                          |        Not Found-404       |
|                     متد درخواستی برای این سرویس مجاز نیست. POST,PUT,DELETE,GET                    |    0    |                                                                                  Method not allowed                                                                                  |   Method Not Allowed-405   |
|                             مقدار content-type موجود در هدر مجاز نیست.                            |    0    |                                                                                Unsupported Media Type                                                                                | Unsupported Media Type-415 |
|                                  سرویس فراخوانی شده وجود ندارد.                                  |    0    |                                                                           Requested service dose not exist                                                                           |     Not Implemented-501    |

</div>

## پارامترهای Pagination

این پارمترها نحوه نمایش اطلاعات بازیابی شده از مرکزتماس را مشخص می‌کنند،از آنجایی که این پارمتر‌ها در اکثر APIهای مربوط به جستجو موجود می‌باشند در اینجا یکبار بصورت جزئی مورد بررسی قرار می‌گیرند.

لیست‌ APIهایی که از این پارامتر‌ها پشتیبانی می‌کنند

۱. **pbx/faxes/**

۲. **voicemails/inbox/**

۳. **reports/quick/**

۴. **reports/cdrreports/queue/**

۵. **reports/queue/**

۶. **reports/queue_details/**

۷. **reports/agent/**

۸. **reports/poll/**

۹. **autodialer/campaigns/**

۱۰. **autodialer/contacts/**

۱۱. **autodialer/groups/**

۱۲. **autodialer/reports/**

### start
مشخص می‌کند از کدام یک (مقدار عددی) از داده‌های بازیابی شده توسط مرکز تماس شروع به ارسال اطلاعات به‌سمت وب‌ سرویس بکند.

### count

چه تعداد از داده‌های بازیابی شده توسط مرکز تماس به سمت وب‌ سرویس ارسال شود.

### sorting

مرتب سازی داده‌ها براساس کدام ستون و به ترتیب صعودی یا نزولی باشد (مقدار ۱ برابر با صعودی و مقدار ۱- برابر با نزولی می‌باشد).


- **مثال)** بازیابی اطلاعات بخش گروه‌ها به نوعی که

	۱. از ۴امین رکورد،اطلاعات بازیابی شده توسط مرکزتماس به سمت وب‌سرویس ارسال شوند.
	
	۲. به طور کلی ۲ رکورد از داده‌های بازیابی شده بازگردانده شود.
	
	۳. گزارش بازگشتی براساس تاریخ و به صورت صعودی مرتب باشد.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'نمونه داده ارسالی  سرویس وب از متد autodialer/groups/', value: 'usageCode'},
      {label: 'نمونه خروجی', value: 'outputCode'},
    ]}>

    <TabItem value="usageCode">
      <Tabs
        defaultValue="Curl"
        values={[
          {label: 'Curl', value: 'Curl'},
        ]}>


        <TabItem value="Curl">
          <details>
            <summary> نمونه کد با  Curl</summary>
            <br/>

```shell
{
    "alike":"true",
    "conditions":{"name":"","description":""},
    "pagination":{"start":4,"count":2,"sorting":{"date":1}}
}
```

          </details>
        </TabItem>

      </Tabs>
    </TabItem>

    <TabItem value="outputCode">

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "pagination": {
            "start": 4,
            "count": 2,
            "sorting": {
                "date": 1
            },
            "total": 17
        },
        "data": [
            {
                "_id": "5cab4ed776c2c0747f3a7f7b",
                "name": "nasim-contact-update-980119",
                "description": "",
                "count": 109,
                "date": "1398-01-19 18:08:31"
            },
            {
                "_id": "5cac595276c2c011a94f4b43",
                "name": "nasimcontact-step2",
                "description": "",
                "count": 101,
                "date": "1398-01-20 13:05:30"
            }
        ]
    }
}

```
    </TabItem>

  </Tabs>


## پارامترهای ضروری و منطقی

درآینده در جداول با ستونی به نام `پارمترهای ضروری[**]/منطقی[*]` مواجه می‌شویم که مقادیر آن مشخص کننده

۱. **پارامترهای ضروری**: حتما باید این مقادیر در درخواست وب‌ سرویس به سمت سیموتل ارسال شوند و در غیر این صورت سیموتل در پاسخ خطا برمی‌گرداند.

۲. **پارامترهای منطقی**: مقادیری که عدم وجودشان در درخواست باعث ایجاد خطا در سیستم نمی‌شود اما منطقی است که باتوجه به درخواست این مقادیر به سمت سیموتل فرستاده شوند.