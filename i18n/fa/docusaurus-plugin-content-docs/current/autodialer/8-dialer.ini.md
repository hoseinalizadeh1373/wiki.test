---
sidebar_label: " تنظیمات Dialer.ini "
title: "Dialer.ini تنظیمات"
---


# تنظیمات dialer.ini 

dialer.ini فایلی می‌باشد که در آن تنظیمات مربوط به ماژول‌تماس‌انبوه تعریف شده‌اند، مسیر دسترسی به این فایل etc/simotel/dialer.ini/ می‌باشد.با استفاده از دستور زیر می‌توان این فایل را باز کرد و تغییرات را در آن اعمال کرد.

```shell

nano /etc/simotel/dialer.ini
```

:::caution هشدار
پس از اعمال تغییرات در فایل dialer.ini حتما سرویس simoteldialer ریست شود، در غیر اینصورت تغییرات اعمال نمی‌شوند.

```shell

Debian
service simoteldialer restart

Ubuntu
stop simoteldialer
start simoteldialer
```
:::


### تنظیمات پایگاه‌داده MongoDB 
```shell

[mongodb]

mongodb_connection_string = mongodb://username:password@localhost:27017

```
۱. **mongodb_connection_string**: آدرس اتصال به پایگاه‌داده که شامل نام کاربری، پسورد، آدرس اتصال، پورت اتصال به پایگاه‌داده می‌باشد.


### تنظیمات فایل‌های صوتی
```shell

[directories]

announcement_directory = /var/www/html/files/	

```
۱. **announcement_directory**: مسیر ذخیره فایل‌های صوتی ماژول تماس‌انبوه.


### تنظیمات dialer logs
```shell

[logging]
log_level = DEBUG

log_to_file = True	

log_to_console = False		

log_directory = /var/log/simotel/

log_file_name = simoteldialer.log	

```
۱. **log_level**: سطح لاگ ماژول تماس‌انبوه.

۲. **log_to_file**: درصورتی که این پارامتر برابر با True باشد، لاگ‌ها در فایل ذخیره می‌شوند.

۳. **log_to_console**: در صورتی که این پارامتر برابر با True باشد، لاگ‌ها در کنسول ترمینال نمایش داده می‌شوند.

۴. **log_directory**: مسیر ذخیره فایل‌های لاگ. باید فیلد log_to_file برابر با True باشد.

۵. **log_file_name**: نام فایل simoteldialer.



### تنظیمات AMI

این تنظیمات مربوط به خود مر‌کزتماس می‌باشند و درصورت نیاز به دسترسی AMI باید به مسیر **/etc/asterisk/manager.conf** مراجعه فرمایید.

```shell

[ami]

ami_host = 'localhost'

ami_port = '5038'

ami_username = 'test'

ami_password = 'test'

```

۱. **localhost**: آدرس میزبان AMI.

۲. **ami_port**: پورت سرویس AMI.

۳. **ami_username**: نام کاربری حساب.

۴. **ami_password**: رمز‌عبور حساب.

:::info اطلاعات
برای کسب اطلاعات بیشتر در مورد نحوه ساخت حساب AMI به [این قسمت](/pbx/advance-settings/create_ami_user) مراجعه فرمایید.
:::

### تنظیمات تماس

```shell

[originate-options]

ami_originate_caller_id = AutoDialer

```

۱. **ami_originate_caller_id**: مقدار caller_id که برروی ترانک ارسال می‌شود در این بخش تعریف می‌شود.



:::danger نکته مهم
درمواردی ارائه دهنده سرویس (برای مثال مخابرات) caller_id با مقدار AutoDialer را تشخیص نمی‌دهد و تماس‌های ماژول Drop می‌شوند.برای رفع این مشکل مقدار caller_id را برابر با عدد قرار دهید.
:::