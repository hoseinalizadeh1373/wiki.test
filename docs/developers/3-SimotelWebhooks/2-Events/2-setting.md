---
sidebar_position: 1
---

# Introduction and Settings

## Introduction  
Simotel Event Webhooks are a collection of requests that send information about events occurring in the Call Center to your web service. Using Event Webhooks, you can quickly be informed about all the events happening in the Call Center. This section is responsible for managing all the events sent from Simotel to your web service.

## Settings

To view the settings related to the Simotel Event Webhooks section, go to `Maintenance > Settings > AP Settings`. In the Simotel Event Webhooks section, there are various parts, which we will explain below.

### Event Webhooks Enabled  
This option determines whether the Event Webhooks service is enabled or not.
 
### Event Webhooks Version
Simotel has the ability to send information to the web service in various formats. In general, there are two main formats:

- **G (General) Services**: In G services, all events are exclusively sent to the web service URL, and the provider separates the events using the `event_name` parameter.

- **Rest Services**: In Rest services, the event name is appended to the end of the URL, and then the information is sent to the web service.

Example of a Rest call:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```shell
Call <WebService_address>/newstate
Call <WebService_address>/cdr

```

### Request Method
- **Get**: Simotel sends the data as parameters to the web service.

- **Post**: From version 4 (Rest4, G4), data is sent in JSON format in the request body to the web service. In versions 2 and 3, data is sent as parameters, similar to GET.

#### Example of a G4 service call:

<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

    ```bash
	curl -u username:password --location --request GET \
	'http://192.168.51.193/call/?event_name=NewState&exten=991&state=Unavailable' --data-raw ''
    ```

</TabItem>
<TabItem value="Post">

```bash
	curl -u username:password --location --request POST 'http://192.168.51.193/call/' \
	--header 'Content-Type: application/json' \
	--data-raw '{
    "event_name": "NewState",
    "exten": "991",
    "state": "Unavailable"
	}'
```

</TabItem>
</Tabs>


#### Example of a Rest4 service call:
<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

    ```bash
	curl -u username:password --location -- \
	request GET 'http://192.168.51.193/call/NewState?event_name=NewState&exten=991&state=Unavailable'
    ```

</TabItem>
<TabItem value="Post">

```bash
	curl -u username:password --location --request POST 'http://192.168.51.193/call/NewState' \
	--header 'Content-Type: application/json' \
	--data-raw '{
    "event_name": "NewState",
    "exten": "991",
    "state": "Unavailable"
	}'

```
</TabItem>
</Tabs>


### Events  
In this section, the system's events and information are categorized, and depending on your needs, you specify which information should be sent to the WebService. The events and their details will be examined more thoroughly in the upcoming sections.

### API Address  
Here, the web service URL is provided.

### API Username  
If authentication is required by the web service, the username is entered here.

### API Password  
If authentication is required by the web service, the password is entered here.

:::tip Note  
In some SEA events, there is a parameter called `unique_id`. For every call made in the system, a unique identifier is generated. Therefore, using the `unique_id`, you can identify the different events related to a specific call.
:::