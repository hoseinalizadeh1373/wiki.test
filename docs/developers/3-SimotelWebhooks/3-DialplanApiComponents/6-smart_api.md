---

---
# Smart API
**SmartAPI** is a semi-interactive component used to execute a combination of commands on a server. It receives commands via a web service and applies them sequentially on calls. If an error occurs in one command, the execution of subsequent commands is halted. Additionally, you can create multiple outputs with different names for this component and manage the call routing to these outputs.

### Component Parameters

- **API Address**: The web service URL to retrieve the command execution string.

### Routing Parameters in the Component

- **Case**: The output identifier. It is used by the Exit function (in the web service response).
- **Text**: A name used only for display purposes in the component, which can be utilized for easy access.

:::tip
In case of an error in executing the commands or failure to receive a correct response from the web service, the call will exit from the output **e**.
:::

### Web Service Format
Based on the values in the **API Method & API Version** settings, the web service URL is called with the following data sent:

- **src**: The caller's number (Caller or CID).
- **dst**: The entered number (Callee, DID, or Exten).
- **data**: Data entered by the caller during the call (e.g., data entered in IVR).
- **unique_id**: The unique identifier for the call.
- **app_name**: The name of the current component.
- **originated_call_id**: The unique identifier for the Originate call

:::info info 
  The originated_call_id, or the unique identifier for a two-way call, is only sent when a two-way call is initiated.
:::

The response from the web service will be returned in **JSON** format.

```shell
{
  "ok": "1",
  "commands": "PlayAnnouncement('announce01'); SayNumber(5201); PlayAnnouncement('announce02');"
}
```

The above command first plays the audio file **announce01**, then reads the number **5201**, and finally plays the audio file **announce02**.

### SmartAPI Functions

**SmartAPI has several functions, each performing a specific task. Below, we will review each of them.**

### PlayAnnouncement

This function plays an audio announcement (the audio file must be uploaded previously in the audio section). The function's input is the name or ID of the audio file (for ID, use the format `:id`).

```shell
Format: PlayAnnouncement(<file:string >);

PlayAnnouncement('id:5be6a5f294c28e3f068b4575');

PlayAnnouncement ('filename-nasim');
```

### Playback

The server's default audio files are played, and the input receives the name of the audio file.

```shell
Format: Playback(<default-file-name:string >);

Playback('hello-world');
```

### SayNumber

It reads a number sequentially (in the example below, it reads: five thousand two hundred and one).

```shell
Format: SayNumber(<number:int>);

SayNumber(5201);
```

### SayDigit

It reads a number digit by digit (in the example below, it reads: one, two, three, nine).

```shell
Format: SayDigit(<number:int>);

SayDigit(1239);
```

### SayDuration

It reads the duration (in the example below, it reads: six days, sixteen hours, and fifty-one seconds).

```shell
Format: SayDuration(<time:string(d.HH:MM:SS)>);

SayDuration('6.16:0:51');
```

### SayClock

It reads the time (in the example below: twelve hours, fourteen minutes, and nine seconds).

```shell
Format: SayClock(<time:string(HH:MM:SS)>);

SayClock('12:14:09');
```

:::tip Note  
The inclusion of seconds in this function is optional.  
:::


### SayDate

Reads the date (e.g., in the example: "21st of Ordibehesht, 1395").

```shell
Format: SayDate(<date:string(YYYY-MM-DD)>, <calendar:string(gregorian/jalali/hijri)>);

SayDate('1395-02-21', 'jalali');
```


### GetData



Receiving a number from the user.

```shell
Format: GetData(<file:string>, <timeout:int>, <max-digit:int>);

GetData('filename-please-enter-number', 10, 1);
```

By using the `:id` expression at the beginning of the file name, you can enter the audio file ID.

:::tip Note  
To read multiple files in the `GetData` function, the `&` operator is used as follows:  
:::

```shell
GetData('filename01&filename03&filename03', 10, 1);
```

### MusicOnHold


It receives the name of the waiting tone class and the duration (in seconds) for its playback.

```shell
Format: MusicOnHold (<class_name:string >, <duration:int >);

MusicOnHold(‘default’, 60);
```


### SetExten

It applies the Exten value (for connecting to an extension).

```shell
Format: SetExten(<exten:string>);

SetExten(‘200’);
```

### SetLimitOnCall

It applies a time limit for the next call. (The input parameter is in seconds).

```shell
Format: SetLimitOnCall(<limit:int>);

SetLimitOnCall(150);
```

### ClearUserData

This command clears the data that was entered in the previous steps of the Smart API (for example, when you call `setExten`, in some cases, this function should also be called).


### Exit

This function selects one of the exit paths to exit from the component. It is always the last function to execute. Note that no other function will run after it, and the call will exit from the SmartAPI component. If the case does not exist, the execution will result in an error.

```shell
Format: Exit(<case:string>);

Exit('3');
```


**To get more familiar, we will explore the implementation of a scenario using SmartAPI in the practical examples section.**