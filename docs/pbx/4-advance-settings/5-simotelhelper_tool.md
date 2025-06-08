---

---

# simotelhelper Tool

**simotelhelper** is a command-line tool for managing and maintaining Call Center services. It plays a crucial role in troubleshooting processes and is often one of the first tools used for system diagnostics.

:::info Information
simotelhelper is a command-line tool, and you need shell access to the Linux server to use it.
:::

:::caution Warning
It is recommended not to use this tool until you have a clear understanding of how the Call Center and its core services operate.
:::

Below are the commands related to this tool, explained in detail.

## simotelhelper help

This command outputs a guide of available commands.

**Sample Output:**

```shell
root@simotel:~# simotelhelper help
Simotel Helper

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

This command checks the status of vital server services and provides a report.

**Sample Output:**

```shell
root@simotel:~# simotelhelper check

Simotel version : 6.2.22
simotelhelper version : 23

Simotel package p38: 1
Sound PR: 8
PBX configs version: 8

Simotel: NOT RUNNING
Simotelagi: RUNNING
simotelhelper: RUNNING
Mongodb: RUNNING
Redis: RUNNING
PBX: RUNNING
```

As shown, the output includes information about the installed Simotel version, the simotelhelper version, sound file versions, and the status of Call Center services.

## simotelhelper db

This command performs database-related tasks. The arguments related to this command are explained below.

### simotelhelper db help

```shell
root@simotel:~# simotelhelper db help
do something on database

Usage:
  simotelhelper db [command]

Available Commands:
  backup      backup database by some strategies
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

The output provides a guide to the commands related to database management.

### simotelhelper db backup

This command is responsible for creating backup files of the database. To see the types of backup strategies, use the command **simotelhelper db backup show**.

**Output of simotelhelper db backup show:**

```shell
root@simotel:~# simotelhelper db backup show

strategies     description
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

This section displays various backup strategies, and by writing the name of the strategy before the command, the system will start backing up.

**Output of simotelhelper db backup pbx:**

```shell
root@simotel:~# simotelhelper db backup pbx
DEBUG 2021-06-23T12:03:04.454+0430      writing Simotel.dialplan_editor_history to archive '/var/spool/simotel/backup/cli/Simotel-pbx-20210623-1203.gz.creating'
...
DEBUG backup completed, successfully. /var/spool/simotel/backup/cli/Simotel-pbx-20210623-1203.gz
```

By entering this command, the system begins backing up the contents of the **pbx** section, and the backup file path is displayed (useful for restoring backups).

### simotelhelper db connect

This command allows direct connection to the MongoDB shell.

**Output of simotelhelper db connect:**

```shell
root@simotel:~# simotelhelper db connect
MongoDB shell version v4.4.0
connecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb
...
Welcome to the MongoDB shell.
```

:::caution Warning
If you are not familiar with designing and working with MongoDB databases, it is strongly advised not to use this command or make changes at the database level.
:::

### simotelhelper db repair

If there is an issue with the database's performance, this command can be used to resolve the problem.

**Output of simotelhelper db repair:**

```shell
root@simotel:~# simotelhelper db repair
---------------------------------
Successfully stop mongodb
---------------------------------
Do you want to make a copy of "db" before repairing to "/usr/src/mongodb/dbdata/db-back-repair/" ? [y/n]
y
...
{"t":{"$date":"2021-06-23T12:22:58.472+04:30"},"s":"I",  "c":"CONTROL",  "id":23138,   "ctx":"initandlisten","msg":"Shutting down","attr":{"exitCode":0}}
```

### simotelhelper db restore

This command is responsible for restoring backups of the Call Center. It requires the backup file path as an input parameter.

**Output of simotelhelper db restore BackupPath:**

```shell
root@simotel:~# simotelhelper db restore /var/spool/simotel/backup/cli/Simotel-pbx-20210623-1203.gz

Drop collections of database before restore? [Y/n] ?
y
DEBUG 2021-06-23T12:29:44.190+0430      preparing collections to restore from
...
DEBUG 2021-06-23T12:29:44.685+0430      112 document(s) restored successfully. 0 document(s) failed to restore.
```

### simotelhelper db start

This command starts the database.

**Output of simotelhelper db start:**

```shell
root@simotel:~# simotelhelper db start
---------------------------------
Successfully start mongodb
---------------------------------
about to fork child process, waiting until server is ready for connections.
...
```

### simotelhelper db status

This command displays the status of the database.

**Output of simotelhelper db status:**

```shell
root@simotel:~# simotelhelper db status
---------------------------------
Mongodb status: Running
---------------------------------
```

### simotelhelper db stop

This command stops the database.

**Output of simotelhelper db stop:**

```shell
root@simotel:~# simotelhelper db stop
---------------------------------
Successfully stop mongodb
---------------------------------
```

## simotelhelper iptables

This command manages iptables configurations.

**Output of simotelhelper iptables --help:**

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

### simotelhelper patch

This command manages patches provided for the Call Center.

**Output of simotelhelper patch:**

```shell
root@simotel:~# simotelhelper patch
checking for new patches update
4 update available for you.
available patches are:
...
Choose patch id:
```

By entering the ID corresponding to each row, the latest patch for the system can be installed.

**Output of simotelhelper patch more:**

```shell
root@simotel:~# simotelhelper patch more
available categories are:
...
Choose category id:
```

This command provides a category of patches available for the Call Center version.

## simotelhelper serial

This command outputs the serial number assigned to the Call Center.

```shell
root@simotel:~# simotelhelper serial
5lWGi2aOHI7Kc9pOPFoLqh3MxhW8PkaMQK
```

## simotelhelper serverstatus

This command provides information about the server and installed services.

**Output of simotelhelper serverstatus:**

```shell
root@simotel:~# simotelhelper serverstatus
{
        "Host": {
                "platform": "debian",
                "platformVersion": "10.6",
                "kernelVersion": "4.19.0-11-amd64",
                ...
        },
        "Version": {
                "Simotel": "6.2.22",
                "SimotelEdition": "gold",
                "Helper": "23"
        },
        ...
}
```

## simotelhelper timezone

This command manages the server's timezone.

## simotelhelper update

This command installs new updates available for the system.

**Output of simotelhelper update:**

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

At this stage, one of the options must be selected to check for updates.

**Output of simotelhelper update check:**

```shell
root@simotel:~# simotelhelper update check
simotel: up to date
helper: up to date
```

## simotelhelper version

This command shows the version of simotelhelper installed on the server.

**Output of simotelhelper version:**

```shell
root@simotel:~# simotelhelper version
simotelhelper version is 23
```