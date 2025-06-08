---
sidebar_label: "ابزار simotelhelper "
title: "ابزار simotelhelper مباحث پیشرفته"
---


#  ابزار simotelhelper 

**simotelhelper** ابزاری برای مدیریت و نگهداری سرویس‌های مرکز تماس می‌باشد. این ابزار نقش حیاتی در انجام فرایند خطایابی دارد به نحوی که از اولین ابزارهای مورد استفاده در خطایابی سیستم می‌باشد.

:::info اطلاعات
**simotelhelper** ابزاری تحت خط‌فرمان می‌باشد و برای استفاده از آن باید به shell لینوکس سرور دسترسی داشته باشید.
:::

:::caution هشدار
پیشنهاد می‌شود تا زمانی که نسبت به نحوه عملکرد مرکز تماس و سرویس‌های اصلی آن دیدی پیدا نکرده‌اید، از این ابزار استفاده نکنید.
:::

در پایین، دستورات مربوط به این ابزار به طور کامل مورد بررسی قرار می‌گیرند.

## simotelhelper help

خروجی این‌ دستور راهنمایی از دستورات موجود می‌باشد.

** نمونه خروجی دستور**

```shell
root@simotel:~# simotelhelper help
simotel Helper

Usage:
  simotelhelper [flags]
  simotelhelper [command]

Available Commands:
  check        check simotel tools and server
  db           do something on database
  help         Help about any command
  initiate     initiate simotel
  iptables     manage iptables
  patch        patch
  reinstall    doing update
  scmid        show scmid
  serial       show serial
  serverstatus Server status
  timezone     change server timezone
  update       doing update
  version      show simotel helper version

Flags:
  -h, --help          help for simotelhelper
      --host string   Address of server (default "update.mysup.ir")
      --port int      Port of server (default 4994)

Use "simotelhelper [command] --help" for more information about a command.
```

## simotelhelper check

یکی از وظایف این دستور بررسی وضعیت سرویس‌های حیاتی سرور و ارائه گزارش از آن‌ها می‌باشد.

** نمونه خروجی دستور**

```shell
root@simotel:~# simotelhelper check

simotel version : 6.2.22
simotelHelper version : 23

simotel package p38: 1
Sound PR: 8
PBX configs version: 8


simotel: NOT RUNNING
simotelagi: RUNNING
simotelhelper: RUNNING
Mongodb: RUNNING
Redis: RUNNING
PBX: RUNNING

```

همان‌طور که مشاهده می‌فرمایید، در ابتدا توضیحاتی در مورد نسخه سیموتل نصب‌شده، نسخه **simotelhelper**، نسخه فایل‌های صوتی و ... ارائه شده و در نهایت نیز وضعیت سرویس‌های مرکز تماس مشخص شده است.

## simotelhelper db

این دستور وظیفه انجام امور مربوط به پایگاه‌داده را برعهده دارد. آرگومان‌های مربوط به این دستور را در ادامه بررسی می‌کنیم.

### simotelhelper db help

```shell
root@simotel:~# simotelhelper db help
do something on database

Usage:
  simotelhelper db [command]

Available Commands:
  backup      backup datable by some strategies
  connect     connect to mongodb cli
  repair      repair database
  restore     restore backup files to database
  start       start database
  status      show database status
  stop        stop database

Flags:
  -h, --help   help for db

Global Flags:
      --host string   Address of server (default "update.mysup.ir")
      --port int      Port of server (default 4994)

Use "simotelhelper db [command] --help" for more information about a command.
subcommand is required


```
خروجی این دستور راهنمایی دستورات مربوط به مدیریت پایگاه‌داده می‌باشد.


### simotelhelper db backup

این دستور وظیفه تهیه فایل پشتیبان از پایگاه‌داده را برعهده دارد. برای مشاهده انواع استراتژی‌های بکاپ‌گیری دستور **simotelhelper db backup show** را وارد کنید.

**خروجی دستور simotelhelper db backup show**

```shell
root@simotel:~# simotelhelper db backup show

sterategies     description
all             backup full database (simotel and autodialer)
all-no-reports  backup all simotel data expect reports
custom          selective backup
dashboard       backup dashboards
dialer          backup autodialer without reports
dialer-report   backup autodialer reports
dialer-sounds   backup autodialer sounds (announcements)
pbx             backup pbx entities, burst calls, voice mails and dial plan editor
reports         backup cdr, cdr of queues, queue logs and poll
settings        backup setting
sound           backup simotel sounds (announcements)
voice-mail      backup simotel voice mails with sounds (db format)
web-members     backup web accounts and account types


```
در این قسمت انواع روش‌های بکاپ‌گیری نمایش داده می‌شوند که با نوشتن نام استراتژی در جلوی دستور، سیستم شروع به بکاپ‌گیری می‌کند.

**خروجی دستور simotelhelper db backup pbx**

```shell
root@simotel:~# simotelhelper db backup pbx
DEBUG 2021-06-23T12:03:04.454+0430      writing simotel.dialplan_editor_history to archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz.creating'
DEBUG 2021-06-23T12:03:04.461+0430      writing simotel.music_on_hold to archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz.creating'
DEBUG 2021-06-23T12:03:10.847+0430      done dumping simotel.dialplan_editor_orders (1 document)
DEBUG 2021-06-23T12:03:12.365+0430      writing simotel.featurecode to archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz.creating'
DEBUG 2021-06-23T12:03:12.374+0430      done dumping simotel.burstcall (0 documents)
DEBUG 2021-06-23T12:03:12.375+0430      writing simotel.queue to archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz.creating'
DEBUG 2021-06-23T12:03:13.778+0430      done dumping simotel.pbx_groups (0 documents)
DEBUG 2021-06-23T12:03:13.779+0430            simotel.sound  0
DEBUG 2021-06-23T12:03:13.779+0430      simotel.featurecode  0
DEBUG 2021-06-23T12:03:13.779+0430
DEBUG 2021-06-23T12:03:13.779+0430      simotel.featurecode  9
DEBUG 2021-06-23T12:03:13.779+0430      done dumping simotel.featurecode (9 documents)
DEBUG 2021-06-23T12:03:13.783+0430      simotel.sound  10
DEBUG 2021-06-23T12:03:13.855+0430      done dumping simotel.queue (2 documents)
DEBUG 2021-06-23T12:03:13.855+0430      done dumping simotel.sound (10 documents)
DEBUG backup completed, successfully. /var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz

```
با وارد کردن این دستور، سیستم شروع به بکاپ‌گیری از محتویات بخش **pbx** می‌کند و در نهایت نیز مسیر فایل بکاپ نمایش داده می‌شود (این مسیر در زمان **restore** کردن بکاپ کاربرد دارد).

### simotelhelper db connect

با استفاده از این دستور می‌توان مستقیماً به shell پایگاه‌داده MongoDB متصل شد.

**خروجی دستور simotelhelper db connect**:


```shell
root@simotel:~# simotelhelper db connect
MongoDB shell version v4.4.0
connecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("c13b4753-59e4-41cc-83f8-9f42a23048e3") }
MongoDB server version: 4.4.0
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
        https://community.mongodb.com
---
The server generated these startup warnings when booting:
        2021-06-23T09:51:28.056+04:30: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
        2021-06-23T09:51:32.054+04:30: You are running this process as the root user, which is not recommended
        2021-06-23T09:51:32.054+04:30: /sys/kernel/mm/transparent_hugepage/enabled is 'always'. We suggest setting it to 'never'
        2021-06-23T09:51:32.054+04:30: Soft rlimits too low
        2021-06-23T09:51:32.054+04:30:         currentValue: 1024
        2021-06-23T09:51:32.054+04:30:         recommendedMinimum: 64000
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
>

```
:::caution هشدار
در‌صورتی که نسبت به طراحی و کار با پایگاه داده mongodb اطلاعی ندارید، اکیدا استفاده از این دستور و تغییر در سطح پایگاه‌داده توصیه نمی‌شود.
:::



### simotelhelper db repair

درصورتی که در عملکرد پایگاه داده اختلالی ایجاد شود، با‌استفاده از این دستور می‌توان مشکل پیش‌آمده را برطرف نمود.

** خروجی دستور simotelhelper db repair**


```shell
root@simotel:~# simotelhelper db repair
---------------------------------
Successfully stop mongodb
---------------------------------
Do you want to make a copy of "db" before repairing to "/usr/src/mongodb/dbdata/db-back-repair/" ? [y/n]
y
Starting create copy of db to /usr/src/mongodb/dbdata/db-back-repair/
Finished copy of db to /usr/src/mongodb/dbdata/db-back-repair/
{"t":{"$date":"2021-06-23T12:22:52.925+04:30"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"main","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
{"t":{"$date":"2021-06-23T12:22:53.546+04:30"},"s":"W",  "c":"ASIO",     "id":22601,   "ctx":"main","msg":"No TransportLayer configured during NetworkInterface startup"}
{"t":{"$date":"2021-06-23T12:22:53.547+04:30"},"s":"I",  "c":"NETWORK",  "id":4648601, "ctx":"main","msg":"Implicit TCP FastOpen unavailable. If TCP FastOpen is required, set tcpFastOpenServer, tcpFastOpenClient, and tcpFastOpenQueueSize."}
{"t":{"$date":"2021-06-23T12:22:53.670+04:30"},"s":"I",  "c":"STORAGE",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":1173,"port":27017,"dbPath":"/usr/src/mongodb/dbdata/db","architecture":"64-bit","host":"simotel"}}
{"t":{"$date":"2021-06-23T12:22:53.670+04:30"},"s":"I",  "c":"CONTROL",  "id":23403,   "ctx":"initandlisten","msg":"Build Info","attr":{"buildInfo":{"version":"4.4.0","gitVersion":"563487e100c4215e2dce98d0af2a6a5a2d67c5cf","openSSLVersion":"OpenSSL 1.1.1d  10 Sep 2019","modules":[],"allocator":"tcmalloc","environment":{"distmod":"debian10","distarch":"x86_64","target_arch":"x86_64"}}}}
{"t":{"$date":"2021-06-23T12:22:58.471+04:30"},"s":"I",  "c":"CONTROL",  "id":20565,   "ctx":"initandlisten","msg":"Now exiting"}
{"t":{"$date":"2021-06-23T12:22:58.472+04:30"},"s":"I",  "c":"CONTROL",  "id":23138,   "ctx":"initandlisten","msg":"Shutting down","attr":{"exitCode":0}}

```

### simotelhelper db restore

این دستور وظیفه بازگردانی بکاپ‌های مرکزتماس را برعهده دارد، در نهایت به عنوان پارامتر ورودی مسیر فایل بکاپ تهیه شده نیز نیاز می‌باشد.


** خروجی دستور  simotelhelper db restore BackupPath**

```shell
root@simotel:~# simotelhelper db restore /var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz

Drop collections of database before restore? [Y/n] ?
y
DEBUG 2021-06-23T12:29:44.190+0430      preparing collections to restore from
DEBUG 2021-06-23T12:29:44.258+0430      reading metadata for simotel.user from archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz'
DEBUG 2021-06-23T12:29:44.269+0430      restoring simotel.user from archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz'
DEBUG 2021-06-23T12:29:44.276+0430      restoring indexes for collection simotel.user from metadata
DEBUG 2021-06-23T12:29:44.301+0430      finished restoring simotel.user (34 documents, 0 failures)
DEBUG 2021-06-23T12:29:44.305+0430      reading metadata for simotel.trunk from archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz'
DEBUG 2021-06-23T12:29:44.312+0430      restoring simotel.trunk from archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz'
DEBUG 2021-06-23T12:29:44.320+0430      restoring indexes for collection simotel.trunk from metadata
DEBUG 2021-06-23T12:29:44.335+0430      finished restoring simotel.trunk (2 documents, 0 failures)
DEBUG 2021-06-23T12:29:44.342+0430      reading metadata for simotel.dialplan_editor_history from archive '/var/spool/simotel/backup/cli/simotel-pbx-20210623-1203.gz'
DEBUG 2021-06-23T12:29:44.682+0430      no indexes to restore
DEBUG 2021-06-23T12:29:44.684+0430      finished restoring simotel.sound (10 documents, 0 failures)
DEBUG 2021-06-23T12:29:44.685+0430      112 document(s) restored successfully. 0 document(s) failed to restore.

```

### simotelhelper db start

این دستور وظیفه شروع‌به‌کار پایگاه‌داده را برعهده دارد.

** خروجی دستور  simotelhelper db start**

```shell
root@simotel:~# simotelhelper db start
---------------------------------
Successfully start mongodb
---------------------------------
about to fork child process, waiting until server is ready for connections.
forked process: 4322
child process started successfully, parent exiting

```


### simotelhelper db status

این دستور وظیفه نمایش وضعیت پایگاه‌داده را برعهده دارد.

** خروجی دستور  simotelhelper db status**

```shell
root@simotel:~# simotelhelper db status
---------------------------------
Mongodb status: Running
---------------------------------

```


### simotelhelper db stop

این دستور وظیفه توقف‌ کار پایگاه‌داده را برعهده دارد.


** خروجی دستور  simotelhelper db stop**

```shell
root@simotel:~# simotelhelper db stop
---------------------------------
Successfully stop mongodb
---------------------------------

```

## simotelhelper iptables

این دستور وظیفه مدیریت موارد مربوط به iptables را برعهده دارد.


** خروجی دستور  simotelhelper iptables --help**

```shell
root@simotel:~# simotelhelper iptables --help
manage iptables

Usage:
  simotelhelper iptables [command]

Available Commands:
  apply       apply last iptables configuration
  boot        manage iptables booting
  export      export iptables
  flush       flush(stop) iptables
  import      import iptables
  panel       manage iptables panel view

Flags:
  -h, --help   help for iptables

Global Flags:
      --host string   Address of server (default "update.mysup.ir")
      --port int      Port of server (default 4994)

Use "simotelhelper iptables [command] --help" for more information about a command.

```
با استفاده از این دستور تمامی پارامتر‌های مربوط به دستور نمایش داده می‌شوند که در ادامه به صورت مختصر هرکدام را بررسی می‌کنیم.

۱. **apply**: پس از اینکه iptable مد نظر ما import شد، برای اعمال آن نیاز می‌باشد از این دستور استفاده کنیم.

۲. **boot**: فعال یا غیرفعال‌ شدن iptable در زمان شروع‌به‌کار ماشین را مشخص می‌کند. با دستور help می‌توان پارامترهای آن را مشاهده کرد.

۳. **export**:  با استفاده از این دستور امکان خروجی گرفتن از iptable موجود برروی سیستم فراهم می‌شود.

۴. **flush**: این دستور iptable موجود برروی سیستم را غیرفعال می‌کند.

۵. **import**: امکان import فایل iptable سیستم‌ دیگری که با دستور export گرفته شده است را فراهم می‌آورد.
 
۶. **panel**: با استفاده از این دستور می‌توان بخش iptable وب را فعال یا غیر‌فعال کرد. با دستور help می‌توان پارامترهای آن را مشاهده کرد.


## simotelhelper patch

وظیفه مدیریت وصله‌های ارائه ‌شده برای مرکزتماس را برعهده دارد.


**خروجی دستور simotelhelper patch**

```shell
root@simotel:~# simotelhelper patch
checking for new patches update
4 update availble for you.
available patches are:
---------------------------------------------------------------------------------------------
 id  | Name                 | Version  | Description
---------------------------------------------------------------------------------------------
 1   | Package.P38          | 2        |
 2   | Update music on hold (moh) | 2        | Update music on hold
 3   | set ulimit           | 1        | Warning: Proceed With Caution. setting ulimit to asterisk. it hang up all current calls by restarting asterisk
 4   | SoundPR              | 10       | queue sound issue is fixed
---------------------------------------------------------------------------------------------
Choose patch id:

```
با وارد کردن id مربوط به هر ردیف می‌توان آخرین وصله ارائه شده برای سیستم را نصب کرد.



**خروجی دستور simotelhelper patch more**

```shell
root@simotel:~# simotelhelper patch more
available categories are:
---------------------------------------------------------------------------------------------
 id  | Category             | Description
---------------------------------------------------------------------------------------------
 1   | Sound-pr             | Persian sound versions
 2   | DB 4.4.0             | use to manipulate or restore some data template in database
 3   | IPTable              | Configure iptable by some pre-define  strategies
 4   | HDD Maintenance      | Maintenance HDD
---------------------------------------------------------------------------------------------
Choose category id:

```

این دستور دسته‌بندی از وصله‌های ارائه شده برای ورژن مرکز تماس را ارائه می‌دهد، در صورتی که نیاز به بازگشت به ورژن قبلی وصله‌ای بود از طریق این دستور می‌توان اقدام کرد.



## simotelhelper serial

خروجی این دستور شماره سریال اختصاص داده‌شده به مرکزتماس می‌باشد.
```shell
root@simotel:~# simotelhelper serial
5lWGi2aOHI7Kc9pOPFoLqh3MxhW8PkaMQK

```


## simotelhelper serverstatus

با اجرای این دستور اطلاعاتی درمورد سرور و سرویس‌های نصب شده برروی آن بدست می‌آورید.


**خروجی دستور simotelhelper serverstatus**

```shell
root@simotel:~# simotelhelper serverstatus
{
        "Host": {
                "platform": "debian",
                "platformVersion": "10.6",
                "kernelVersion": "4.19.0-11-amd64",
                "PBX": "13.37.0",
                "PBXSBV": "s.2",
                "LatestPython": "3.8.6",
                "Pythons": [
                        "3.8.6"
                ]
        },
        "Version": {
                "simotel": "6.2.22",
                "simotelEdition": "gold",
                "Helper": "23"
        },
        "Mongodb": {
                "FCV": "4.4",
                "Version": "4.4.0",
                "dbName": "simotel",
                "dbSize": 4014080
        },
        "Patch": {
                "CUpdate": "1",
                "PBXConf": "8",
                "Package-p38": "1",
                "Sound-pr": "8",
                "iso": "7"
        },
        "HDD": {
                "Total": 18889785344,
                "Used": 6140174336,
                "Free": 11766468608,
                "Backup": 1769746,
                "Monitor": 129844,
                "MonitorConverted": 161878,
                "MonitorRemoved": 4096
        }
}

```


## simotelhelper timezone

مدیریت timezone سرور با استفاده از این دستور انجام می‌شود.





## simotelhelper update

با استفاده از این دستور می‌توان آپدیت‌های جدید که برای سیستم ارائه شده‌اند را نصب کرد.

**خروجی دستور simotelhelper serverstatus**

```shell
root@simotel:~# simotelhelper update
doing update

Usage:
  simotelhelper update [command]

Available Commands:
  check       check for new updates
  dialer      update simotel dialer
  helper      update simotel helper
  simotel     update simotel simotel

Flags:
  -h, --help   help for update

Global Flags:
      --host string   Address of server (default "update.mysup.ir")
      --port int      Port of server (default 4994)

Use "simotelhelper update [command] --help" for more information about a command.
subcommand is required

```

در این مرحله باید یکی از گزینه‌ها برای بررسی آپدیت انتخاب شود.

**خروجی دستور simotelhelper update check**

```shell
root@simotel:~# simotelhelper update check
simotel: up to date
helper: up to date

```


##  simotelhelper version

ورژن simotelhelper نصب شده برروی سرور را نشان می‌دهد.

**خروجی دستور simotelhelper simotelhelper version**

```shell
root@simotel:~# simotelhelper version
simotelhelper version is 23


```