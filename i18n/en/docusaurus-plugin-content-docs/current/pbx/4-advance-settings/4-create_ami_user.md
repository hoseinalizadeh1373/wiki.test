---

---

# Creating an AMI Account

To create AMI access in the Simotel Call Center, you need shell access to Linux. First, open the following file using the nano text editor:

```shell
root@simotel:~# nano /etc/asterisk/manager.conf
```

At the end of the file, enter your account username and password information according to the template below:

```shell
[ami_user_test]         ; Account username
secret = testpassword   ; Account password
deny = 0.0.0.0/0.0.0.0  ; Deny access
permit = 127.0.0.1/255.255.255.255  ; Allowed IP access
read = call,user,agent,cdr   ; Read permissions for the account
write = system,call,agent,originate   ; Write permissions for the account
```

Note that to read information or make changes to the system using AMI, the user account must have the appropriate access level. Below is a complete list of access levels:

```shell
read = system,call,log,verbose,agent,user,config,dtmf,reporting,cdr,dialplan
write = system,call,agent,user,config,command,reporting,originate,message
```

Finally, restart the Asterisk service with the following command to activate the user account. Note that restarting Asterisk will disconnect current calls in the Call Center.

```shell
root@simotel:~# service asterisk restart
```