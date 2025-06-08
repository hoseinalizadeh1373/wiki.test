---
sidebar_label: "ایجاد حساب AMI"
title: "ایجاد حساب AMI"
---



# ایجاد حساب AMI

برای ایجاد دسترسی AMI در مرکزتماس سیموتل نیاز به دسترسی shell لینوکس می‌باشد. در ابتدا فایل زیر را با ویرایشگر متن nano باز کنید

```shell

root@simotel:~# nano /etc/asterisk/manager.conf

```

در انتهای فایل اطلاعات مربوط به حساب‌کاربری و رمزعبور خود را مطابق با الگوی پایین وارد کنید

```shell

[ami_user_test] نام حساب‌ کاربری
secret = testpassword رمزعبور حساب ‌کاربری
deny = 0.0.0.0/0.0.0.0
permit = 127.0.0.1/255.255.255.255   مجاز به دسترسی ip 
read = call,user,agent,cdr   دسترسی‌های خواندن حساب کاربری
write = system,call,agent,originate   دسترسی‌های نوشتن حساب‌ کاربری


```

در نظر داشته باشید برای خواندن اطلاعات و یا ایجاد تغییر در سیستم با استفاده از AMI باید حساب‌کاربری سطح دسترسی مربوطه را داشته باشد. در پایین لیستی کامل از سطوح دسترسی‌ قرار داده شده است.

```shell

read = system,call,log,verbose,agent,user,config,dtmf,reporting,cdr,dialplan
write = system,call,agent,user,config,command,reporting,originate,message

```


در نهایت نیز با دستور زیر سرویس استریسک را ریست کرده و حساب‌کاربری فعال می‌شود، با ریست استریسک تماس‌های جاری مرکزتماس قطع می‌شوند.

```shell

root@simotel:~# service asterisk restart

```