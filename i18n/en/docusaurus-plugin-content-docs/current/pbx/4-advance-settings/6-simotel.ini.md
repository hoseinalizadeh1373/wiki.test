# Settings for simotel.ini

**simotel.ini** is a file where the settings related to the Call Center are defined. The path to access this file is `/etc/simotel/simotel.ini`. You can open this file and make changes using the following command:

```shell
nano /etc/simotel/simotel.ini
```

:::caution Warning
After making changes to the `simotel.ini` file, the `simotel` and `simotelagi` services must be restarted; otherwise, the changes will not take effect.
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

### MongoDB Database Settings
```ini
[mongodb]
mongodb_connection_string = mongodb://username:password@localhost:27017
```
1. **mongodb_connection_string**: The connection string for the database, which includes the username, password, connection address, and database port.

### System Logs Settings

```ini
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
1. **log_level**: The logging level of the system.

2. **log_file_rotate_backup_count**: The number of log files, which is set to 50 by default. If this parameter is set to 50, it means that only files from the last 50 days will be kept, and logs older than 50 days will be automatically deleted. For example, if this value is 100, you will have logs from up to 100 days ago.

3. **log_to_file**: If this parameter is set to True, logs will be saved to a file.

4. **log_to_console**: If this parameter is set to True, logs will be displayed in the terminal console.

5. **log_to_redis**: If this parameter is set to True, logs will be sent to the Redis channel. If this parameter is disabled, call logs will not be stored or displayed in the reports menu.

6. **log_directory**: The path for storing log files. The `log_to_file` field must be set to True.

7. **log_file_rotate_when**: The `simotel.log` file will be generated daily.

8. **log_file_rotate_interval**: Only one `simotel.log` file will be generated for each day.

9. **log_file_name_simotel**: The name of the `simotel` log file.

10. **log_file_name_simotelagi**: The name of the `simotelagi` log file.

11. **log_file_name_webservice**: The name of the simotel web service log file.

12. **log_monitor_exten**: If this parameter is enabled, exten logs will be displayed.

13. **log_monitor_trunk**: If this parameter is enabled, trunk logs will be displayed.

14. **log_monitor_api**: If this parameter is enabled, API logs will be displayed.

15. **log_ram_and_cpu_stat**: If this parameter is enabled, RAM and CPU usage logs will be displayed.

### General Simotel Settings

```ini
[general]
agi_directory = /var/www/html/files/agi/
```
1. **agi_directory**: The path for AGI component files.

### Reports Settings

```ini
[reports]
report_file_path = /var/www/html/files/report_files/
```
1. **report_file_path**: The path for storing call report files.

### Panel Settings
```ini
[setting]
panel_report_days = 7
exten_complicated_passwords = 1
account_password_length = 6
account_session_expiration_days = 30
account_hash_enabled = 0
```
1. **panel_report_days**: The reporting period in the related reports menus.

2. **exten_complicated_passwords**: If this option is enabled, users will be required to enter a complex password.

3. **account_password_length**: The acceptable number of characters for account passwords.

4. **account_session_expiration_days**: The number of days an account password remains valid.

5. **account_hash_enabled**: If this parameter is enabled, it prevents unauthorized changes to user data and maintains user data security.

### TimeZone Settings
 
```ini
[timezone]
timezone_name = Asia/Tehran
client_api_use_local_timezone = False
```
1. **timezone_name**: The timezone value used in generating CSV reports.

2. **client_api_use_local_timezone**: Specifies the time and date sent in SEA. By default, times are sent with UTC timezone. Enabling this feature aligns the time sent in the API with the local system time.

### Recorded Files Settings

```ini
[record]
call_record_source_directory = '/var/spool/asterisk/monitor/'
call_record_directory = /var/spool/asterisk/monitor_converted/
call_record_removed_directory = '/var/spool/asterisk/monitor_removed/'
```
1. **call_record_source_directory**: Initially, audio files of calls are temporarily stored in this path.

2. **call_record_directory**: The path for storing calls after compression.

3. **call_record_removed_directory**: The path for audio files of calls that are to be deleted.

### Backup Settings

```ini
[backup]
backup_directory = /var/spool/simotel/backup/
```
1. **backup_directory**: The types of backups taken in the system are stored in this path, including helper code backups that are taken automatically and stored in daily (for daily backups) and weekly (for weekly backups) folders. Additionally, backups taken through the web are stored in a separate folder in this path.

### VoiceMail Settings 

```ini
[voicemail]
voicemail_directory = /var/spool/asterisk/voicemail/
voicemailv2_directory = /var/spool/asterisk/voicemailv2/
```
1. **voicemail_directory**: The path for storing audio files in VoiceMail V1 (deprecated since version 6.2.7).

2. **voicemailv2_directory**: The path for storing audio files in VoiceMail V2.

### Redis Settings

```ini
[redis]
redis_host = localhost
redis_port = 6379
redis_db = 0
redis_password = None
```
1. **redis_host**: The connection address to Redis.

2. **redis_port**: The Redis port.

3. **redis_db**: By default, Redis has 16 databases indexed from 0 to 15. The default is 0, which means selecting the first database.

4. **redis_password**: The Redis password, which is None by default. Redis is bound to localhost, so it does not require a password.

### WebSocket Settings

```ini
[websocket]
web_socket_port = 8888
web_socket_bind_address = 127.0.0.1
web_socket_check_origin = False
web_socket_permitted_origin = ['localhost:88']
web_socket_check_authentication = True
web_socket_timeout = 60 * 100
```
1. **web_socket_port**: The WebSocket port (this value should not change from version 6.2).

2. **web_socket_bind_address**: The socket address.

3. **web_socket_check_origin**: If this parameter is enabled, connections to the socket from external IPs are not allowed.

4. **web_socket_permitted_origin**: Origin policies for when enabled, including an array of IP:port pairs that are allowed to connect to the WebSocket.

5. **web_socket_check_authentication**: If this parameter is enabled, authentication is checked when connecting to the WebSocket.

6. **web_socket_timeout**: The timeout value for the socket.

### CDR Settings

```ini
[cdr]
record_file_format = mp3
save_original_cdr = False
```
1. **record_file_format**: The format for recording audio files, which can be either wav or mp3.

2. **save_original_cdr**: If this parameter is enabled, the raw CDR sent from Asterisk will be added to the stored CDRs in the database (in the field `original_cdr`, which is used for debugging).

### Call Recording Settings 
```ini
[call]
channel_session_ttl_long = 60 * 60
```
1. **channel_session_ttl_long**: The maximum duration for recording a call in the Call Center. This setting has been added to reduce system overhead, and the duration can be increased if needed (in seconds).

### Call Security Settings 
```ini
[security]
barred_call_pre_codes = 00,+ 
```
1. **barred_call_pre_codes**: Numbers that Simotel does not allow calls to. For example, by default, two zeros are barred in Simotel, and if a number starting with two zeros or + is dialed, it will be dropped by default. If you have a range of numbers or prefixes that should not be called from Simotel, this parameter should be set accordingly.

:::info Information
If a call is barred, its status will be displayed as barred in the reports.
:::

### API Settings 
```ini
[client_api_service]
client_api_caller_timeout = 5
```
1. **client_api_caller_timeout**: The timeout duration for calling client web services such as SCM and others.

### Fax Settings
```ini
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
1. **fax_directory**: The path for storing fax files.

2. **fax_sender_caller_id**: The caller ID used for sending faxes. In some telecommunication systems, a valid caller ID is required for sending faxes; otherwise, the call will be dropped by the telecommunication provider.

3. **fax_sender_timeout_sec**: The timeout duration for fax (in seconds).

4. **fax_sender_wait_before_send_sec**: The wait time before sending the fax (in seconds).

5. **fax_sender_wait_before_dtmf_sec**: The wait time before sending DTMF (in seconds).

6. **fax_sender_wait_after_dtmf_sec**: The wait time after sending DTMF (in seconds).

7. **fax_sender_options**: Options for sending the fax. Default is empty.

8. **fax_sender_excluded_prefix**: Excluded prefixes before sending the fax. If you want to exclude a prefix, enter it here. Default is empty.

9. **fax_sender_dtmf_timeout_ms**: The time interval between entering DTMF digits (in milliseconds).

10. **fax_abandon_timeout**: The duration for checking the fax status. By default, it is set to 60 * 5, which means 15 minutes (in seconds).

11. **fax_entry_file_format**: The format of the incoming fax file, which is saved as pdf by default and can also be tiff.

### Call Limit Settings 
```ini
[call_limit]
call_limit_warning_beeper_enabled = True
call_limit_warning_beeper_announce = beep
call_limit_warning_beeper_time_to_end_sec = 20
call_limit_warning_beeper_repeat_time_sec = 10
```
1. **call_limit_warning_beeper_enabled**: This parameter enables call limits in exten, trunk, etc. If this parameter is used during a call and is enabled, a warning will be played for the caller about the end of the call.

2. **call_limit_warning_beeper_announce**: The audio file that is played to the caller, which must either be valid characters and words or the complete file path.

3. **call_limit_warning_beeper_time_to_end_sec**: Specifies how many seconds before the end of the call limit the warning should be given. For example, for 4 minutes, you would set this to 240 seconds.

4. **call_limit_warning_beeper_repeat_time_sec**: Specifies how often the warning message should repeat if the call limit is reached (in seconds).

### Network Settings 
```ini
[network]
panel_iptable = 0
```
1. **panel_iptable**: Enables iptables.

### Upload Settings

```ini
[upload_size]
panel_fax = 1048576
panel_audio = 5242880
panel_csv = 512000
panel_other = 20971520
```
1. **panel_fax**: The maximum allowed size for uploading fax files.

2. **panel_audio**: The maximum allowed size for uploading audio files.

3. **panel_csv**: The maximum allowed size for uploading CSV files.

4. **panel_other**: The maximum allowed size for other panel uploads.

### Announcement Settings

```ini
[announcement]
announcement_directory = '/var/www/html/files/' 
```
1. **announcement_directory**: Specifies the path for storing uploaded announcements.

### Music on Hold Settings

```ini
[music_on_hold]
pbx_music_on_hold_path = '/var/www/html/files/music_on_hold/'  
```
1. **pbx_music_on_hold_path**: Specifies the path for storing music on hold.

### AMI Settings

These settings pertain to the Call Center itself, and if you need AMI access, you should refer to the path **etc/asterisk/manager.conf/**.

```ini
[ami]
ami_host = 'localhost'
ami_port = '5038'
ami_username = 'test'
ami_password = 'test'
```
1. **localhost**: The host address for AMI.

2. **ami_port**: The port for the AMI service.

3. **ami_username**: The account username.

4. **ami_password**: The account password.

:::info Information
For more information on how to create an AMI account, please refer to [this section](/pbx/advance-settings/create_ami_user).
:::

### DISA Settings

```ini
[disa]
disa_simulator_data_len = "11"
```
1. **disa_simulator_data_len**: The maximum length of the number entered in DISA.

### Service Settings

The variables mentioned here are used to enable or disable internal Simotel services. 

:::caution Warning
Changing the variables below may disable parts of the system.
:::
```ini
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

### Audio Monitor Settings 

Since version 6.3, the storage management process in Simotel has changed, and it has been assigned to the Audio Monitor service. This service has settings that are set by default with appropriate values, but they can be changed if necessary.

```ini
audio_monitor_time_file_not_changed = 20
```
1. **audio_monitor_time_file_not_changed**: The monitor service continuously observes changes in audio files, and if a file has not changed within the timeframe of this variable, it indicates the end of the conversation, and the file enters the storage phase (active audio files are continuously changing).

---
### تنظیمات queue_maintenance