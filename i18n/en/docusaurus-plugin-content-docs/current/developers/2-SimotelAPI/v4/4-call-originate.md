---
sidebar_position: 2
---
# Originate call
This service creates a Originate call (Number Masking). The caller can be either internal or a telecommunications number. If the caller is a telecommunications number, the trunk name must also be provided. The time_out value is optional, and if not assigned, it is set to 30 seconds by default.

:::danger Important note  
In a Originate call, if the first person does not answer and disconnects the call, the call data (CDR) will not be sent to your web service. If this is important for you, you can use the campaign creation APIs along with the `autodialer route` component to create a Originate call. For more details, please refer to **[this section](/developers/Autodialer_API/call_originate)**.
:::



### Parameters 


<div class="custom-table">
|                              Description                              | Defined Data | Sample Data | Required Parameters[**]/Logical[*] | Parameters |
|:-----------------------------------------------------------------:|:------------------:|:--------------:|:-----------------------:|:----------:|
|                    (First person in the call) Caller                   |          -         |       557      |            **           |   caller   |
|                    (Second person in the call) Contact Number         |          -         |       552      |            **           |   callee   |
| Specifies the first person's call route (along with the Outgoing_Route component) |          -         |  main_routing  |            **           |   context  |
|                                557                                |          -         |       557      |            **           |  caller_id |
|                  Specifies the second person's call route             |          -         |                |            *            | trunk_name |
|                   Waiting time for answering                        |          -         |       30       |                         |   timeout  |
|                   Call duration time                               |          -         |       30       |                         |   call_limit  |
</div>


### Sample Invocation

<!--  -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'Example Code To Use', value: 'usageCode'},
      {label: 'Example Output', value: 'outputCode'},
    ]}>

    <!-- تب نمونه کد استفاده -->
    <TabItem value="usageCode">
      <Tabs
        defaultValue="PHP"
        values={[
          {label: 'PHP', value: 'PHP'},
          {label: 'JS', value: 'JS'},
          {label: 'Curl', value: 'Curl'},
        ]}>

        <!-- کد PHP -->
        <TabItem value="PHP">
      
          <details>
            <summary>Show Full Source Code PHP</summary>
            <br/>

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/call/originate/act',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"caller":"557",
		"callee":"552",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"cisco",
		"timeout":"30",
		"call_limit":"30"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',
		'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

		if (!curl_errno($curl)) {
		$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		echo 'response code:'.$httpcode, '<br/>';
	}

	curl_close($curl);
	echo $response;
?>
```

          </details>
        </TabItem>

        <!-- کد JS -->
        <TabItem value="JS">
          <details>
            <summary>Show Full Source Code JS</summary>
            <br/>

```js	
	<html>
		<head>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		</head>
		<body>
			<script>
				var settings = {
				  "url": "http://192.168.51.20/api/v4/call/originate/act",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "caller": "557",
					  "callee": "552",
					  "context": "main_routing",
					  "caller_id": "557",
					  "trunk_name": "cisco",
					  "timeout": "30",
					  "call_limit":"30"
					}),
				};


					$.ajax(settings).always(function (jqXHR) {
						console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);
						console.log("response body: " + jqXHR.responseText);
					});
			</script>
		</body>
	</html>
```

          </details>
        </TabItem>

        <TabItem value="Curl">
          <details>
            <summary>Show Full Source Code Curl</summary>
            <br/>
```bash

	curl --location --request POST 'http://192.168.51.20/api/v4/call/originate/act' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"557",
		"callee":"552",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"",
		"timeout":"30",
		"call_limit":"30"
	}'
```

          </details>
        </TabItem>

      </Tabs>
    </TabItem>

    <TabItem value="outputCode">

```shell
{
    "success": 1,
    "message": null,
    "data": {
        "originated_call_id": "orig.call.1703145054.787335"
    }
}
```
    </TabItem>

  </Tabs>


For further familiarity, several examples of [use cases](/developers/Scenarios/call_originate) for this service are discussed in the practical examples section.
