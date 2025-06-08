---
sidebar_label: "تنظیمات simotel.ini"
title: "تنظیمات simotel.ini مباحث پیشرفته"
---


# تنظیمات simotel.ini

simotel.ini فایلی می‌باشد که در آن تنظیمات مربوط به مرکزتماس تعریف شده‌اند، مسیر دسترسی به این فایل etc/simotel/simotel.ini/ می‌باشد. با استفاده از دستور زیر می‌توان این فایل را باز کرد و تغییرات را در آن اعمال کرد.

```shell

nano /etc/simotel/simotel.ini
```

:::caution هشدار
پس از اعمال تغییرات در فایل simotel.ini حتما سرویس simotel و simotelagi ریست شوند، در غیر این صورت تغییرات اعمال نمی‌شوند.
:::
```shell

Debian
service simotel restart
service simotelagi restart

Ubuntu
stop simotel
stop simotelagi
start simotel
start simotelagi
```
:::


### تنظیمات پایگاه‌داده MongoDB 
```shell

[mongodb]

mongodb_connection_string = mongodb://username:password@localhost:27017

```
۱. **mongodb_connection_string**: آدرس اتصال به پایگاه‌داده که شامل نام کاربری، پسورد، آدرس اتصال، پورت اتصال به پایگاه‌داده می‌باشد.

### تنظیمات System Logs

```shell

[logging]

log_level = DEBUG

log_file_rotate_backup_count = 50

log_to_file = True

log_to_console = False

log_to_redis = True

log_directory = /var/log/simotel/

log_file_rotate_when = 'D'

log_file_rotate_interval = 1    

log_file_name_simotel = simotel.log

log_file_name_simotelagi = simotelagi.log

log_file_name_webservice = webservice.log

log_monitor_exten = False

log_monitor_trunk = False

log_monitor_api = False

log_ram_and_cpu_stat = False

log_monitor_channel = False

```
۱. **log_level**: سطح لاگ سیستم.

۲.  **log_file_rotate_backup_count**: تعداد فایل های لاگ، که به صورت پیش فرض برابر با 50 می باشد. در صورتی که مقدار این پارامتر برابر با 50 باشد به این معنی است تنها فایل ها را تا 50 رو قبل نگه می‌دارد و فایل‌های لاگی که بیشتر از 50 روز از زمان ساخته شدن آن‌ها می گذرد، اوتوماتیک حذف می‌شوند. مثلا درصورتی که این مقدار 100 باشد شما للاگ‌ها را تا 100 روز قبل دارید.

۳. **log_to_file**: درصورتی که این پارامتر برابر با True باشد ، لاگ‌ها در فایل ذخیره می‌شود.

۴. **log_to_console**: در صورتی که این پارامتر برابر با True باشد، لاگ‌ها در کنسول ترمینال نمایش داده می‌شود.

۵. **log_to_redis**: در صورتی که این پارامتر برابر با True باشد، لاگ‌ها روی چنل Redis ارسال می شود در صورت غیرفعال بودن این پارامتر در منو گزارشات، لاگ تماسها ، ذخیره و نمایش داده نمی‌شود.

۶. **log_directory**: مسیر ذخیره فایل‌های لاگ. باید  فیلد log_to_file برابر با True باشد.

۷. **log_file_rotate_when**: تولید فایل simotel.log به صورت روزانه.

۸. **log_file_rotate_interval**: به ازائی هر روز تنها یک فایل simotel.log تولید شود.

۹. **log_file_name_simotel**: نام فایل لاگ simotel.

۱۰. **log_file_name_simotelagi**: نام فایل لاگ simoteagi.

۱۱. **log_file_name_webservice**: نام فایل لاگ وب‌سرویس simotel.

۱۲. **log_monitor_exten**: در صورت فعال سازی این پارامتر لاگ‌های exten نمایش داده می‌شود.

۱۳. **log_monitor_trunk**: در صورت فعال‌سازی این پارامتر لاگ‌های trunk نمایش داده می‌شود.

۱۴. **log_monitor_api**: در صورت فعال‌سازی این پارامتر لاگ‌های API نمایش داده می‌شود.

۱۵. **log_ram_and_cpu_stat**: در صورت فعال‌سازی این پارامتر لاگ میزان ram و cpu نمایش داده می‌شود.


### تنظیمات عمومی سیموتل

```shell

[general]

agi_directory = /var/www/html/files/agi/

```
۱. **agi_directory**: مسیر فایل‌های کامپوننت AGI.


### تنظیمات گزارشات 

```shell

[reports]

report_file_path = /var/www/html/files/report_files/

```
۱. **report_file_path**: مسیرذخیره فایل‌های گزارشات تماس‌ها.



### تنظیمات panel
```shell
[setting]
panel_report_days = 7
exten_complicated_passwords =  1
account_password_length = 6
account_session_expiration_days = 30
account_hash_enabled = 0
```
۱. **panel_report_days**: بازه زمانی گزارش‌گیری در منوهای مرتبط با گزارشات.

۲.**exten_complicated_passwords**: با فعال شدن این گزینه کاربران مجبور خواهند بود پسورد را به صورت پیچیده وارد نمایند.

۳.**account_password_length**:تعداد کاراکتر قابل قبول برای رمز حساب کاربری.

۴.**account_session_expiration_days**: تعداد روز قابل قبول بودن پسورد تنظیم شده.

۵.**account_hash_enabled**: با فعال شدن این پارامتر ; از تغییرات غیر مجاز داده کاربران جلوگیری میشود و امنیت داده های کاربران حفظ میشود 
### تنظیمات TimeZone
 
```shell

[timezone ]

timezone_name = Asia/Tehran

client_api_use_local_timezone = False

```
۱. **timezone_name**: مقدار timezone که در تولید فایل csv گزارش استفاده می‌شود.

۲. **client_api_use_local_timezone**: ساعت و تاریخ ارسالی در SEA را مشخص می کند. بصورت پیش‌فرض زمان‌ها با timezone UTC ارسال می گردند. با فعال کردن این قابلیت زمان‌ ارسالی در API با ساعت لوکال سیستم یکسان می گردد.

### تنظیمات فایل‌های ضبط شده

```shell

[record]

call_record_source_directory = '/var/spool/asterisk/monitor/'

call_record_directory = /var/spool/asterisk/monitor_converted/

call_record_removed_directory = '/var/spool/asterisk/monitor_removed/'

```

۱. **call_record_source_directory**: درابتدا فایل‌های صوتی مکالمات به صورت کوتاه مدت در این مسیر ذخیره می‌شوند.

۲. **call_record_directory**: مسیر فایل‌های ذخیره شده مکالمات پس‌از فشرده سازی.

۳. **call_record_removed_directory**: فایل‌های صوتی مکالمات که قرار بر حذف‌شان می‌باشد در این مسیر قرار می‌گیرند.


### تنظیمات مربوط به BackUp

```shell

[backup]

backup_directory = /var/spool/simotel/backup/

```

۱. **backup_directory**: انواع بک‌آپ‌هایی که در سیستم گرفته می‌شود در این مسیر ذخیره می‌شود، از جمله بک‌آپ‌های کد helper که به صورت اتوماتیک گرفته می‌شوند و داخل فولدارهای daily (برای بک‌آپ‌های روزانه) و weekly (برای بک‌آپ‌های هفتگی) ذخیره می‌شوند و همچنین بک‌آپ‌هایی که از طریق وب گرفته می‌شود در این مسیر در یک فولدر جدا ذخیره می‌شود.




### تنظیمات VoiceMail 

```shell

[voicemail]

voicemail_directory = /var/spool/asterisk/voicemail/

voicemailv2_directory = /var/spool/asterisk/voicemailv2/

```
۱. **voicemail_directory**:  مسیر ذخیره فایل‌های صوتی در  VoiceMail V1 (منسوخ شده از ورژن 6.2.7 ).

۲. **voicemailv2_directory**: مسیر ذخیره فایل‌های صوتی در VoiceMail V2.


### تنظیمات Redis

```shell

[redis]

redis_host = localhost

redis_port = 6379

redis_db = 0

redis_password = None

```

۱. **redis_host**: آدرس اتصال به redis.

۲. **redis_port**: پورت redis.

۳. **redis_db**: به صورت پیش‌فرض redis دارای 16 دیتابیس می‌باشد که از ایندکس 0 تا 15 مشخص می‌شود، به صورت پیش فرض 0 می باشد که معنی انتخاب دیتابیس اول می‌باشد.

۴. **redis_password**: پسورد redis که به صورت پیش‌فرض None می باشد. redis به دلیل اینکه bind به لوکال می باشد، بدون پسورد است.

### تنطیمات WebSocket

```shell

[websocket]

web_socket_port = 8888

web_socket_bind_address = 127.0.0.1

web_socket_check_origin = False

web_socket_permitted_origin = ['localhost:88']

web_socket_check_authentication = True

web_socket_timeout = 60 * 100

```

۱. **web_socket_port**: پورت وب‌سوکت (این مقدار از ورژن 6.2 نباید تغییر پیدا کند).

۲. **web_socket_bind_address**: آدرس سوکت.

۳. **web_socket_check_origin**: درصورت فعال بودن این پارامتر اجازه اتصال به سوکت از IP های بیرون (خارجی) داده نمی‌شود.

۴. **web_socket_permitted_origin**: سیاست‌های origin برای زمانی که فعال می‌باشد. که شامل آرایه ای از ip:port هایی می‌باشد که اجازه اتصال به وب‌سوکت را دارند.

۵. **web_socket_check_authentication**: در صورت فعال‌سازی این پارامتر هنگام اتصال به وب سوکت احراز هویت بررسی می شود.

۶. **web_socket_timeout**: مقدار timeout سوکت.


### تنظیمات CDR

```shell
 
[cdr]

record_file_format = mp3
save_original_cdr = False
```

۱. **record_file_format**: فرمت ضبط فایل‌های صوتی که می‌تواند wav یا mp3 باشد.

۲. **save_original_cdr**: در صورت فعال شدن این پارامتر cdr خام ارسال شده از سوی استریک به cdr های ذخیره شده در دیتابیس افزوده می شود (در فیلد orginal_cdr  . این فیلد استفاده دیباگ دارد)
### تنظیمات رکورد تماس 
```shell

[call]

channel_session_ttl_long = 60 * 60

```
۱. **channel_session_ttl_long**: حداکثر زمان ظبط‌ مکالمه در مرکزتماس،این تنظیم در جهت کاهش سربار سیستم اضاف شده و در صورت نیاز امکان افزایش زمان آن می‌باشد (برحسب ثانیه).


### تنظیمات امنیتی تماس 
```shell

[security]

barred_call_pre_codes = 00,+

```

۱. **barred_call_pre_codes**: شماره‌هایی که توسط سیموتل اجازه تماس با آن‌ها داده نمی شود. مثلا به صورت پیش‌فرض دو صفر در سیموتل بسته است و 
اگر شماره‌گیری در سیموتل انجام شود که اولش دو صفر و یا + باشد، به صورت پیش فرض drop می‌شود. اگر شما رنج شماره‌ای یا پیش‌شماره‌ای دارید که 
نباید از سیموتل با آن‌ها تماس گرفته شود این پارامتر را باید مقداردهی کنید.



:::info اطلاعات
درصورتی که تماسی  barred call شود، وضعیت آن در گزارشات به صورت barred نمایش داده می‌شود.
:::


### تنظیمات API 
```shell

[client_api_service]

client_api_caller_timeout = 5

```

۱. **client_api_caller_timeout**: زمان timeout فراخوانی وب سرویس‌های کلاینت همچون SCM  و ...


### تنظیمات Fax
```shell

[fax]

fax_directory = /var/www/html/files/fax/

fax_sender_caller_id = 000

fax_sender_timeout_sec = 60

fax_sender_wait_before_send_sec = 1

fax_sender_wait_before_dtmf_sec = 1

fax_sender_wait_after_dtmf_sec = 3

fax_sender_options = ""

fax_sender_excluded_prefix = ""

fax_sender_dtmf_timeout_ms = 500

fax_abandon_timeout = 5 * 60

fax_entry_file_format = pdf

```
۱. **fax_directory**: مسیر ذخیره فایل‌های فکس.

۲. **fax_sender_caller_id**: مقدار caller_id که در ارسال فکس استفاده می‌شود. در بعضی سیستم‌های مخابراتی برای ارسال فکس نیاز به caller_id معتبر می‌باشد لذا درغیر این صورت تماس از سمت مخابرات Drop می‌شود.

۳. **fax_sender_timeout_sec**: مقدار timeout فکس که براساس ثانیه می‌باشد.

۴. **fax_sender_wait_before_send_sec**: زمان انتظار قبل از ارسال فکس و براساس ثانیه می‌باشد.

۵. **fax_sender_wait_before_dtmf_sec**: زمان انتظار قبل از ارسال exten و براساس ثانیه می‌باشد.

۶. **fax_sender_wait_after_dtmf_sec**: زمان انتظار بعد از ارسال exten و براساس ثانیه می‌باشد.

۷. **fax_sender_options**: آپشن ارسال فکس. پیش فرض خالی می‌باشد.

۸. **fax_sender_excluded_prefix**: حذف پیش شماره، قبل از ارسال فکس. اگر می‌خواهید پیش شماره‌ای حذف شود در این قسمت وارد کنید. پیش فرض خالی می‌باشد.

۹. **fax_sender_dtmf_timeout_ms**: فاصله زمانی بین وارد کردن اعداد exten که براساس میلی‌ثانیه می‌باشد.

۱۰. **fax_abandon_timeout**: مدت زمان بررسی وضعیت فکس. بصورت پیش‌فرض برابر با 60 * 5  می‌باشد که به معنی 15 دقیقه است و براساس ثانیه می‌باشد.

۱۱. **fax_entry_file_format**: فرمت فایل ورودی فکس که به صورت پیش‌فرض با فرمت pdf ذخیره می‌شود و می‌تواند tiff هم باشد.


### تنظیمات call_limit 
```shell

[call_limit]

call_limit_warning_beeper_enabled = True

call_limit_warning_beeper_announce = beep

call_limit_warning_beeper_time_to_end_sec = 20

call_limit_warning_beeper_repeat_time_sec = 10

```

۱. **call_limit_warning_beeper_enabled**: این پارامتر call_limit را در exten، trunk و ... فعال می‌کند. چنان چه از این پارامتر در تماس استفاده شود اگر این گزینه فعال باشد برای تماس گیرنده هشدار پایان تماس پخش می‌شود.

۲. **call_limit_warning_beeper_announce**: فایل صوتی که برای تماس گیرنده پخش می‌شود که یا باید کاراکترها و کلمات مجاز باشد یا آدرس کامل فایل.

۳. **call_limit_warning_beeper_time_to_end_sec**: مشخص کننده این می‌باشد که چه مقدار زمانی به ثانیه به پایان call_limit باید این هشدار داده شود. مثلا برای ۴ دقیقه باید ۲۴۰ ثانیه قرار دهید و براساس ثانیه می‌باشد.

۴. **call_limit_warning_beeper_repeat_time_sec**: مشخص کننده این می‌باشد که اگر به call_limit رسید، هر‌چند ثانیه باید پیام را تکرار کند و براساس ثانیه می‌باشد.

### تنظیمات شبکه 
```shell

[network]

panel_iptable = 0

```

۱. **panel_iptable**: فعال‌سازی iptables.


### تنظیمات مربوط به Upload

```shell

[upload_size]

panel_fax = 1048576

panel_audio = 5242880

panel_csv = 512000

panel_other = 20971520

```

۱. **panel_fax**: حداکثر سایز مجاز آپلود فایل‌های فکس.

۲. **panel_audio**: حداکثر سایز مجاز آپلود فایل های صوتی.

۳. **panel_csv**: حداکثر سایز مجاز آپلود فایل‌های csv.

۴. **panel_other**: حداکثر سایز مجاز فایل‌های دیگر پنل.



### تنظیمات آواها

```shell

[announcement]

announcement_directory = '/var/www/html/files/' 

```

۱. **announcement_directory**: مسیر ذخیره سازی آواهای بارگذاری شده را مشخص می‌کند.


### تنظیمات موزیک‌انتظار

```shell

[music_on_hold]

pbx_music_on_hold_path = '/var/www/html/files/music_on_hold/'  

```
۱. **pbx_music_on_hold_path**: مسیر ذخیره سازی موزیک‌های انتظار را مشخص می‌کند.




### تنظیمات AMI

این تنظیمات مربوط به خود مر‌کزتماس می‌باشند و درصورت نیاز به دسترسی AMI باید به مسیر **etc/asterisk/manager.conf/** مراجعه فرمایید.

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
برای کسب اطلاعات بیشتر در مورد شیوه ساخت حساب AMI به [این قسمت](/pbx/advance-settings/create_ami_user) مراجعه فرمایید.
:::

### تنظیمات DISA


```shell

[disa]

disa_simulator_data_len = "11"

```

۱. **disa_simulator_data_len**:حداکثر طول شماره وارد شده در DISA.



### تنظیمات سرویس ها
متغیر های ذکر شده جهت فعال یا غیر فعال کردن سرویس های داخلی سیموتل قابل استفاده هستند 
:::caution هشدار
تغییر در متغیر های زیر امکان غیر فعال کردن بخش هایی از سیستم را خواهد داشت 
:::
```shell
service_initializer_enabled = True
service_api_monitor_enabled = True
service_exten_monitor_enabled = True
service_fax_monitor_enabled = False
service_queue_maintenance_enabled = True
service_data_collector_enabled = True
service_server_maintenance_enabled = True
service_web_socket_enabled = True
service_server_controller_enabled = True
service_restful_manager = True
service_report_file_creator = True
service_channel_monitor_enabled = True
service_cache_manager_enabled = True
service_simulator_enabled = True
service_trunk_monitor_enabled = True
service_agi_logger_enabled = True
service_system_log_enabled = True
service_audio_monitor_enabled = True
```

### تنظیمات audio_monitor 

از نسخه 6.3 به بعد، روال مدیریت ذخیره سازی در سیموتل تغییر کرده و مدیریت آن به سرویس Audio Monitor  سپرده شد
این سرویس داری تنظیماتی می باشد که به صورت پیش فرض با مقادیر مناسب مقدار دهی شده است. اما در صورت نیاز میتوان آن ها را تغییر داد


```shell
audio_monitor_time_file_not_changed = 20
```

۱. **audio_monitor_time_file_not_changed**: سروبیس مانیتور به صورت پیوسته در حال مشاهده تغییرات فایل های صوتی می باشد و در صورتی که فایلی در بازه زمانی این متغییر تغییر نکرده باشد، به معنای پایان مکالمه می باشد، و فایل وارد مرحله ذخیره سازی می شود (فایل ها صوتی فعال ، به صورت مداوم در حال تغییر می باشد)
 در صورت افزایش این مقدار زمان ایجاد نهایی فایل صوتی بلند تر شده  و به همان نسبت زمان دسترسی به مکالمه در منوی گزارشات افزایش می یابد 



### تنظیمات queue_maintenance