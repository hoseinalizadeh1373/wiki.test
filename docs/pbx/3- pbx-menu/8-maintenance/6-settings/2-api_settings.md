# API Settings

:::caution
**Warning**: Versions 1, 2, and 3 are deprecated.
:::

This section pertains to the settings for SEA and SA, which we will explain below.

## Parameters of Simotel Event API

- **API Enabled**: Specifies whether the SEA service is active.

- **API Version**: Simotel can send information to the web service in various formats. There are generally two main formats:
  - **G Services (General)**: In G services, all events are exclusively sent to the web service address, and the provider categorizes the events using the `event_name` parameter.
  - **Rest Services**: In Rest services, the event name is appended to the address, and then the information is sent to the web service.

### Example of Rest Call

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```shell
Call <WebService_address>/newstate
Call <WebService_address>/cdr
```

- **API Method**:
  - **Get**: Simotel sends data as parameters to the web service.
  - **Post**: From version 4 (Rest4, G4), data is sent in JSON format in the body of the request. In versions 2 and 3, it is sent as parameters similar to GET.

### Example of G4 Service Call:

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

### Example of Rest4 Service Call:

<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

curl -u username:password --location -- \
	request GET 'http://192.168.51.193/call/NewState?event_name=NewState&exten=991&state=Unavailable'

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

- **API Events**: This section categorizes the system events and information. Depending on your needs, you can specify which information should be sent to your web service. Events and their details will be examined in further sections.

- **API Address**: This is where the web service address is entered.

- **API Username**: If authentication is required by the web service, the username is entered here.

- **API Password**: If authentication is required by the web service, the password is entered here.

## Parameters of SA

- **Allow All IPs**: Checking this option allows all IPs to send requests to Simotel.

- **Allowed IPs**: If a specific IP is desired, enter it here and press the Enter key.