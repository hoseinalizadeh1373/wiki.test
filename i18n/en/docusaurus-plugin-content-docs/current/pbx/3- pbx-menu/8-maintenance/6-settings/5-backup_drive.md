# Backup Drive

One of the key features of the Simotel Call Center is the ability to transfer daily and weekly backup files to an FTP server or cloud storage. This is to prevent data loss during times when the system encounters issues and recovery of information is not possible (disaster recovery plan).

Please note that after applying the necessary settings in Simotel, backups will be performed automatically and systematically, requiring no further action. This feature is available in version 6.1.9 and later.

:::tip
**Note**: Automatic backups of the Call Center do not include recorded call audio files. If you need a backup of the audio files related to calls, this must be done manually (reason: large backup size if recorded call audio files are included).
:::

## Backup Methods

1. Using FTP server locally.
2. Using Dropbox for cloud storage.

### Setting Up FTP Server and Connecting Simotel Call Center

First, you need to set up the FTP server. To do this, install the `vsftpd` software on your Debian 9 operating system. The installation and user creation steps are as follows:

```shell
apt-get update
apt-get upgrade
sudo apt install vsftpd
systemctl start vsftpd
systemctl enable vsftpd
vsftpd -versions
```

The final command is to check the installation status of the software, which should display the installed FTP version.

```shell
cp /etc/vsftpd.conf /etc/vsftpd.conf.orig
```

Create a backup file of the default `vsftpd` configuration settings.

```shell
nano /etc/vsftpd.conf
```

Finally, ensure that the settings in the `vsftpd.conf` file match the image below.

![1](/img/simotel/backup_ftp_dropbox/1.png)

```shell
service vsftpd restart
```

The service has been started!

#### Creating a User on the FTP Server

```shell
# Create user
sudo adduser vahid

# Add access
cho "vahid" | sudo tee -a /etc/vsftpd.userlist

# Restart service to add user
service vsftpd restart
```

#### Connecting Simotel Call Center to the Established FTP Server

Configure the settings as shown below:

![2](/img/simotel/backup_ftp_dropbox/2.png)

If the settings are correctly configured, after clicking the **Test&Save** option, the output should return "Backup Drive Is OK".

### Connecting Simotel Call Center to Dropbox

To do this, you first need to create a Dropbox account, which offers a free basic version. After creating the account, you need to perform the necessary settings to create a token, which will be discussed below.

#### Creating a Token

The Dropbox software allows users to store and retrieve data in their allocated cloud space through its API without direct access to the software. Simotel uses this Dropbox capability to store daily and weekly backups.

After creating a Dropbox account, you need to create a new application in the App Center that allows access to your account. Then, you need to define that access to this application is through a token, and using the **Generated access token**, create a token with Write File access to provide to Simotel.

The steps are as follows:

1. After logging into your account, go to the App Center as shown in the image (for better quality, close the sidebar).

   ![3](/img/simotel/backup_ftp_dropbox/3.png)

2. In the App Center, select the **Build an app** option in the left corner.

   ![4](/img/simotel/backup_ftp_dropbox/4.png)

3. On the next page, select **Create apps**.

   ![5](/img/simotel/backup_ftp_dropbox/5.png)

4. Here, specify the access levels. Since the goal is to set up Dropbox for backup, grant full access to your account, then give your app a name and click the **Create app** button.

   ![6](/img/simotel/backup_ftp_dropbox/6.png)

5. After creating the app, you can specify access levels (read, write) in the permissions section. Since the backup will be uploaded to your account, check the box for `files.content.write`.

   ![7](/img/simotel/backup_ftp_dropbox/7.png)

6. Finally, in the settings section, configure the token settings. By clicking the **Generate** option, a unique token will be created that allows access to your account (via API). Simotel will use this generated token to access your account and upload the backup file. The Access expiration should be set to No expiration, as this is not intended for temporary access.

   ![8](/img/simotel/backup_ftp_dropbox/8.png)

7. If Simotel has internet access, after entering the token and clicking the **Test&Save** button, you should see the output "Backup Drive is OK".

   ![9](/img/simotel/backup_ftp_dropbox/9.png)

8. Finally, if the settings are configured correctly, you should see a file named `simotel.test.txt` in your Inbox, which Simotel uploads during its initial test to check connectivity with Dropbox. From now on, backups will be uploaded to your Drive daily and weekly at the end of the day.

   ![10](/img/simotel/backup_ftp_dropbox/10.png)

For further investigation of the Dropbox API capabilities, you can refer to the link **[here](https://www.youtube.com/watch?v=FMOXbmoAG8I)**.