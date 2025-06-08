---
sidebar_label: "ضبط مکالمات در  Storage"
title: "ضبط مکالمات در  Storage مباحث پیشرفته"
---

# ضبط‌مکالمات در Storage

برای انتقال فایل‌های صوتی ضبط مکالمات به فضای ذخیره‌سازی مجزا (NAS) نیاز به تنظیم دوبخش می‌باشد

۱- مانت storage و تنظیم سرور درجهت ذخیره‌سازی اطلاعات در مسیر مانت ‌شده

۲- تنظیم فایل global.php برای نمایش مکالمات ضبط شده در محیط وب سیموتل



### ۱- مانت storage  و تنظیم سرور

در مرحله اول با دستور زیر storage تحت‌شبکه را به سرور خود مانت می‌کنیم.


```shell

mount -t cifs --options user=test,password=test.456 //172.18.XX.XXX/Zabt /mnt/Zabt

user = نام‌کاربری فضای ذخیره‌سازی 

password = رمزعبور فضای ذخیره‌سازی

//172.18.XX.XXX/Zabt =  آدرس و مسیر ضبط مکالمات

/mnt/Zabt = مسیر لوکالی که استوریج مانت می‌شود

```


در مرحله دوم با استفاده از اسکریپت پایتون زیر اقدام به انتقال مکالمات به فضای ذخیره سازی می‌کنیم.

```shell

#author = Morteza Iravani
#email = irmorteza@hotmail.com
#create date = 9/17/2017
import shutil
import os
from conf.config import Config
Config.log_file_name_simotel = 'simotelfilemover.log'
from logger import logger
from concurrent.futures import ThreadPoolExecutor
from _version import __version__, __edition__
import time

src = '/var/spool/asterisk/monitor_converted/'
dst = '/mnt/Zabt/asterisk_monitor/'


def move_files():
    try:
        for path, subdirs, files in os.walk(src):
            for name in files:
                file_path = os.path.join(path, name)
                new_path = None
                directory = None
                if '_' in name:
                    sub_directory, _, __ = name.partition('_')
                    directory = '%s%s' % (dst, sub_directory)
                    new_path = '%s/%s' % (directory, name)
                else:
                    new_path = '%s%s' % (dst, name)

                if directory and not os.path.exists(directory):
                    os.makedirs(directory)
                if new_path:
                    logger.debug('move file from %s to %s' % (file_path, new_path))
                    shutil.move(file_path, new_path)

        for path, subdirs, files in os.walk(src):
            import datetime
            today = datetime.datetime.now().strftime('%Y%m%d')
            for d in subdirs:
                path2 = os.path.join(path, d)
                if d < today and len(os.listdir(path2)) == 0:
                    os.rmdir(path2)
    except Exception as e:
        logger.exception(e)


def worker():
    while True:
        try:
            logger.debug('run mover to move files')
            move_files()
        except Exception as e:
            logger.exception()
        time.sleep(10)


if __name__ == '__main__':
    logger.info('file mover version: %s.%s' % (__version__, __edition__))

    executor = ThreadPoolExecutor(max_workers=100)
    future = executor.submit(worker)



```

درنظر داشته باشید که مقدار متغیر `=dst` در فایل بالا مشخص کننده مسیر ذخیره‌سازی اطلاعات می‌باشد و باتوجه به مسیر mount مربوط به storage باید مقداردهی شود.

درنهایت نیز فایل monitor_files_mover.py(اسکریپت پایتون بالا) را در مسیر /usr/src/simotel-file-mover/ ایجاد می‌نماییم  و با دستور زیر اسکریپت پایتون را اجرا می‌کنیم.

```shell

python3.4 /usr/src/simotel-file-mover/monitor_files_mover.py &

```


:::tip نکته
برای اجرای اسکریپت بالا از قابلیت screen لینوکس استفاده کنید تا برنامه به صورت خودکار در background فعال شود.
:::


:::tip نکته
پیشنهاد می‌شود دستور بالا در فایل rc.local ثبت گردد تا پس از ریبوت برنامه به صورت خودکار در background فعال شود.
:::



### ۲- تنظیم فایل global.php


با مراجعه به فایل ` /var/www/html/global.php` اقدام به تفییر مقدار `<="call_record_directory"` می‌کنیم تا از این به بعد در محیط وب نیز مکالمات قابل مشاهده باشند.


```shell

"pbx"=> array(
                "call_record_directory"=> "/mnt/Zabt/asterisk_monitor/",    این مقدار باید به مسیر جدید تغییر پیدا کند
                "voicemail_directory"=> "/var/spool/asterisk/voicemail/simotel-voicemail/",
                "voicemailv2_directory"=> "/var/spool/asterisk/voicemailv2/"


```


:::caution هشدار
درنظر داشته باشید که تغییرات اعمال شده با آپدیت سیستم از بین می‌روند، پس حتما قبل از آپدیت، پشتیبانی از تنظیمات به صورت دستی تهیه فرمایید.
:::