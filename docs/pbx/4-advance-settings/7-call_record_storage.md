# Call Recording in Storage

To transfer recorded audio files of calls to a separate storage space (NAS), two sections need to be configured:

1. Mounting the storage and configuring the server for data storage in the mounted path.
2. Configuring the `global.php` file to display recorded calls in the Simotel web interface.

### 1. Mounting Storage and Server Configuration

First, use the following command to mount the storage network to your server:

```shell
mount -t cifs --options user=test,password=test.456 //172.18.XX.XXX/Zabt /mnt/Zabt
```

- **user**: Username for the storage space.
- **password**: Password for the storage space.
- **//172.18.XX.XXX/Zabt**: Address and path for recording calls.
- **/mnt/Zabt**: The local path where the storage will be mounted.

In the second step, use the following Python script to transfer the calls to the storage space:

```python
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

Please note that the value of the variable `dst` in the script above specifies the storage path, and it should be set according to the mount path of the storage.

Finally, create the `monitor_files_mover.py` (the above Python script) in the `/usr/src/simotel-file-mover/` directory and run the script using the following command:

```shell
python3.4 /usr/src/simotel-file-mover/monitor_files_mover.py &
```

:::tip Note
Use the Linux screen feature to run the above script so that the program runs automatically in the background.
:::

:::tip Note
It is recommended to register the above command in the `rc.local` file so that the program runs automatically in the background after rebooting.
:::

### 2. Configuring the global.php File

Edit the `global.php` file located at `/var/www/html/global.php` to change the value of `"call_record_directory"` so that recorded calls can also be visible in the web interface.

```php
"pbx"=> array(
                "call_record_directory"=> "/mnt/Zabt/asterisk_monitor/",  // This value should be changed to the new path
                "voicemail_directory"=> "/var/spool/asterisk/voicemail/simotel-voicemail/",
                "voicemailv2_directory"=> "/var/spool/asterisk/voicemailv2/"
```

:::caution Warning
Be aware that changes made may be lost with system updates, so be sure to back up your settings manually before updating.
:::