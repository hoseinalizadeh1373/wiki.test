---
sidebar_label: "تنظیمات Api"
title: "تنظیمات Api"
---



# API Settings
:::caution هشدار
نسخه 1 و 2 و 3 منسوخ شده است
:::
این قسمت مربوط به تنظیمات SEA و SA می‌باشد که به تشریح آن می‌پردازیم.

## پارامترهای Simotel Event API

- **API Enabled**: مشخص می‌کند سرویس SEA فعال باشد یا خیر.
 
- **API Version**: سیموتل توانایی ارسال اطلاعات به سمت وب‌سرویس تحت فرمت‌های مختلف را دارد، به طور کلی دو قالب اصلی وجود دارد:
	- **سرویس‌های G (General)**: در سرویس‌های G تمام رویدادها منحصراً به آدرس وب‌سرویس ارسال می‌گردند و فراهم‌کننده، رویدادها را با استفاده از پارامتر event_name تفکیک می‌کند.
	- **سرویس‌های Rest**: در سرویس‌های Rest، نام رویداد به انتهای آدرس اضافه شده و سپس اطلاعات به سمت وب‌سرویس ارسال می‌شوند.

#### نمونه Endpoint نوع rest

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```shell
Call <WebService_address>/newstate
Call <WebService_address>/cdr
```

- **API Method**
	- **Get**: سیموتل داده‌ها را در قالب پارامتر به وب‌سرویس ارسال می‌کند.
	- **Post**: از ورژن 4 (Rest4، G4)، داده‌ها با فرمت JSON در بدنه درخواست قرار گرفته و به سمت WebService ارسال می‌گردد. در ورژن‌های 2 و 3 همانند GET به صورت پارامتر ارسال می‌گردد.


#### نمونه فراخوانی سرویسG4:

<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

    ```bash
	curl -u username:password --location --request GET \
	'http://192.168.51.193/call/?event_name=NewState&exten=991&state=Unavailable' --data-raw ''
    ```

</TabItem>
<TabItem value="Post">

```bash

	curl -u username:password --location --request POST 'http://192.168.51.193/call/' \
	--header 'Content-Type: application/json' \
	--data-raw '{
        "event_name": "NewState",
        "exten": "991",
        "state": "Unavailable"
	}'
```

</TabItem>
</Tabs>


#### نمونه فراخوانی سرویسRest4:

<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

    
	curl -u username:password --location -- \
	request GET 'http://192.168.51.193/call/NewState?event_name=NewState&exten=991&state=Unavailable'
    

</TabItem>
<TabItem value="Post">

```bash
	curl -u username:password --location --request POST 'http://192.168.51.193/call/NewState' \
	--header 'Content-Type: application/json' \
	--data-raw '{
        "event_name": "NewState",
        "exten": "991",
        "state": "Unavailable"
	}'
```

</TabItem>
</Tabs>


- **API Events**: در این قسمت اطلاعات و رویدادهای سیستم دسته‌بندی شده‌اند و بسته به نیاز شما مشخص می‌کنید چه اطلاعاتی باید به سمت وب‌سرویس شما ارسال شود. رویدادها و اطلاعات آن‌ها به صورت دقیق‌تر در بخش‌های آینده بررسی می‌شوند.

- **API Address**: در اینجا آدرس وب‌سرویس قرار می‌گیرد.

- **API Username**: در صورتی که احراز هویت از سمت وب‌سرویس انجام ‌شود، نام کاربری اینجا وارد می‌شود.

- **API Password**: در صورتی که احراز هویت از سمت وب‌سرویس انجام ‌شود، رمز عبور اینجا وارد می‌شود.

## پارامترهای SA

- **Allow All IPs**: با زدن تیک این بخش، دسترسی تمامی IPها برای ارسال درخواست به سمت سیموتل باز می‌شود.

- **Allowed IPs**: در صورتی که IP خاصی مدنظر می‌باشد، در این بخش وارد کنید و در نهایت دکمه Enter را وارد کنید.
