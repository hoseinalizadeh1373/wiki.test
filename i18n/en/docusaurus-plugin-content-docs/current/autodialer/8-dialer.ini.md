---
title: "Dialer.ini"
sidebar_label: "Dialer.ini"
---


# Dialer.ini Settings  

The dialer.ini file contains the settings for the bulk calling module. The path to this file is `/etc/simotel/dialer.ini/`. You can open this file and make changes using the following command.
```shell

nano /etc/simote/dialer.ini
```

:::**Caution:**  
Restart the simoteldialer service after modifying the dialer.ini file, otherwise the changes will not be applied.

```shell

Debian
service simoteldialer restart

Ubuntu
stop simoteldialer
start simoteldialer
```
:::


### MongoDB Database Settings
```shell

[mongodb]

mongodb_connection_string = mongodb://username:password@localhost:27017

```
۱. **mongodb_connection_string**: The database connection address, which includes the username, password, connection address, and database connection port.


### Audio Files Settings
```shell

[directories]

announcement_directory = /var/www/html/files/	

```
1. **announcement_directory**: Path to store the audio files for the bulk calling module.

### dialer logs Settings
```shell

[logging]
log_level = DEBUG

log_to_file = True	

log_to_console = False		

log_directory = /var/log/simotel/

log_file_name = simoteldialer.log	

```
1. **log_level**: The logging level for the bulk calling module.  

2. **log_to_file**: If this parameter is set to True, logs will be saved to a file.  

3. **log_to_console**: If this parameter is set to True, logs will be displayed in the terminal console.  

4. **log_directory**: Path to store log files. The `log_to_file` field must be set to True.  

5. **log_file_name**: Name of the simoteldialer log file.  



###  AMI Settings

These settings relate to the contact center itself. If AMI access is needed, refer to the **/etc/asterisk/manager.conf** path.
```shell

[ami]

ami_host = 'localhost'

ami_port = '5038'

ami_username = 'test'

ami_password = 'test'

```

1. **localhost**: The AMI host address.  

2. **ami_port**: The AMI service port.  

3. **ami_username**: The account username.  

4. **ami_password**: The account password.  

:::For more information on how to create an AMI account, please refer to [this section](/pbx/advance-settings/create_ami_user).
:::

###  call Settings

```shell

[originate-options]

ami_originate_caller_id = AutoDialer

```

1. **ami_originate_caller_id**: The value of the caller_id sent on the trunk is defined in this section.


:::danger Important note  
In some cases, the service provider (e.g., telecommunications) does not recognize the caller_id with the value AutoDialer, and the module calls are dropped. To resolve this issue, set the caller_id value to a number.
:::