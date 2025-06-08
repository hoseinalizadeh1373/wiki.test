---

---
# Originate Call

:::tip Recommendation
It is recommended to review [this](../SimotelAPI/v4/call-originate) before studying this section.
:::

### 1: **Call Originate** Between Extensions 570 and 553

## **Sample Invocation**
<!--  -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'ٍExample To Use ', value: 'usageCode'},
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
		"caller":"570",
		"callee":"553",
		"context":"main_routing",
		"caller_id":"masking",
		"timeout":"30"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

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
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"caller": "570",
					"callee": "553",
					"context": "main_routing",
					"caller_id": "masking",
					"timeout": "30"
				  }),
				};

				$.ajax(settings).done(function (response) {
				  console.log(response);
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
			--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
			--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"caller":"570",
				"callee":"553",
				"context":"main_routing",
				"caller_id":"masking",
				"timeout":"30"
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


<!--  -->

### 2: **Call Originate** Between Number 09371234567 and Extension 521

Since the exit path for the caller (the first person in the call) is determined by the `trunk_name` parameter, it is essential to specify this value in the scenario. In this example, it is set to **Cisco**.


## Sample Invocation
<!--  -->

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'Example To Use', value: 'usageCode'},
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
		"caller":"09371234567",
		"callee":"521",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

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
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"caller": "09371234567",
					"callee": "521",
					"context": "main_routing",
					"caller_id": "557",
					"trunk_name": "Cisco",
					"timeout": "30"
				  }),
				};

				$.ajax(settings).done(function (response) {
				  console.log(response);
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
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"09371234567",
		"callee":"521",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
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


<!--  -->
 
### 3: **Call Originate** Between Extension 521 and Number 09371234567

Note that since the exit path for the callee (the second person in the call) is determined by the `context` parameter, if the callee is on the telecommunication network, it is necessary for the corresponding `Outgoing Route` component to have access to the telecommunication network. To achieve this, the `Outgoing Route` component is connected to the trunk component.

In this example, the value of `context` is set to **main_routing**, and in the `Outgoing_Route` component, the `context` is also configured to **main_routing**. Therefore, the second person's call exits via this `Outgoing Route`, which has access to the trunk.
 
<a href='https://dialplan.mysup.ir/live/plan/i1ywiloewqlybxrsrz0on5aqdwbu8vw2t2tjurzk1a4k91xqjo' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/i1ywiloewqlybxrsrz0on5aqdwbu8vw2t2tjurzk1a4k91xqjo/plan.png' /></a>



 ## Sample Invocation

<!--  -->
  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'Example To Use', value: 'usageCode'},
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
		"caller":"521",
		"callee":"09371234567",
		"context":"main_routing",
		"caller_id":"557",
		"timeout":"30"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

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
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"caller": "521",
					"callee": "09371234567",
					"context": "main_routing",
					"caller_id": "557",
					"timeout": "30"
				  }),
				};

				$.ajax(settings).done(function (response) {
				  console.log(response);
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
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"521",
		"callee":"09371234567",
		"context":"main_routing",
		"caller_id":"557",
		"timeout":"30"
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


<!--  -->
### 4: Originate Call between 31041570 and 09371234567


 ##  Sample Invocation 

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'Example To Use', value: 'usageCode'},
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
		"caller":"31041570",
		"callee":"09371234567",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

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
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"caller": "31041570",
						"callee": "09371234567",
						"context": "main_routing",
						"caller_id": "557",
						"trunk_name": "Cisco",
						"timeout": "30"
					  }),
					};

					$.ajax(settings).done(function (response) {
					  console.log(response);
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
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"31041570",
		"callee":"09371234567",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
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

<!--  -->


### 5: Apply call time limit on a Originate call

To apply a time limit on the call, another API called `Trunk API` is required, which is a component in the Dialplan. Its role is to send call information to the web service and receive the second party's number and the `call_limit` from the web service in response.

For more information about the `Trunk API`, visit [here](../SimotelWebhooks/DialplanApiComponents/trunk_api).

**The implementation of the scenario is divided into four main steps:**

**1-** A Originate call request is sent by the web service. After receiving the Originate call request, the contact center starts calling the first number.

**2-** After the first number answers the call, the `Trunk API` component sends a request with the first party's number and other call details to the web service. The web service then returns the second party's number and the time limit to the contact center, which then proceeds to call the second party.

**3-** After the second party answers, the call is established, and the time limit is applied. As soon as the time limit is reached, the call channel is disconnected by the contact center. There is a feature where the contact center can warn the first party (consultant, etc.) a few minutes before the conversation ends that time is running out.

**4-** After the call ends, the full call details are sent to the web service using the `CDR` event. With the `unique id` sent in the second step, you can differentiate the call reports.

For more information about `CDR`, visit [here](../SimotelWebhooks/Events/cdr).


The implementation scenario in the Dialplan, where the **Trunk API** component is used instead of the Trunk component, is shown below. 

Please make sure to set your web service address in the **Trunk API** settings.

<a href='https://dialplan.mysup.ir/live/plan/1mdp1s7bw0860pa4tng7unmancjydue62x7zuidd9jayi9if5s' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/1mdp1s7bw0860pa4tng7unmancjydue62x7zuidd9jayi9if5s/plan.png' /></a>

### 6: Record Originate call conversations

To enable call recording, simply use the `Mix Monitor` component in the Dialplan. After the call ends, the audio file name is sent as a parameter in the `CDR` event to the web service. To download the file, the `reports/quick/cdr` API is used. For more information, visit [here](../SimotelAPI/v4/report/audio_download).

<a href='https://dialplan.mysup.ir/live/plan/0z0jkz6prd7i5oi0vd0daninji4zm19cg237q76e1zbaed4ibu' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/0z0jkz6prd7i5oi0vd0daninji4zm19cg237q76e1zbaed4ibu/plan.png' /></a>


### 7: Conduct a survey after the call

By connecting the `poll` component to the output `S` of the `Trunk API` component, a survey can be conducted after the call ends. The survey score is sent as a parameter in the `CDR` event to the web service.
 
<a href='https://dialplan.mysup.ir/live/plan/hdy7b9nhxaiu6co3o0ijppybho1z14ht2d38ya098w9pz3mmo8' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/hdy7b9nhxaiu6co3o0ijppybho1z14ht2d38ya098w9pz3mmo8/plan.png' /></a>

### 8: Warning Before Call Ends

In a two-way call, this feature allows a beep to be played for the second party (advisor, etc.) a few minutes before the call is disconnected, notifying them that the call is about to end.

To activate this feature, simply add the following settings in the simotel.ini file under the path /etc/simotel.

```shell

[api]
# default=None
client_api_caller_timeout = 1
call_limit_warning_beeper_enabled = True
    call_limit_warning_beeper_announce = beep
    call_limit_warning_beeper_time_to_end_sec = 20
    call_limit_warning_beeper_repeat_time_sec = 10
	
```

1. **call_limit_warning_beeper_enabled**: This parameter activates the call_limit in exten, trunk, etc. When used in a call, if this option is enabled, a warning beep will be played for the caller before the call ends.

2. **call_limit_warning_beeper_announce**: The audio file to be played for the caller, which must either contain valid characters and words or be the full path to the file.

3. **call_limit_warning_beeper_time_to_end_sec**: Specifies the number of seconds before the call limit ends when the warning should be given. For example, for a 4-minute warning, set this to 240 seconds. It is based on seconds.

4. **call_limit_warning_beeper_repeat_time_sec**: Specifies how often the warning message should be repeated after the call limit is reached, in seconds.


### 9: Play Hold Music for the First Party

After the first party answers the call, the system starts dialing the second party. During this time, a ringing sound is played for the first party, which might confuse the user and even lead to them hanging up before the second party answers.

In a Originate call, you can play hold music for the first party after they answer and before the second party is called. There is also the option to implement dynamic hold music per user, though this is not the main focus here. To use this feature, simply use the `Announcement` component in your scenario.

<a href='https://dialplan.mysup.ir/live/plan/6bd4pe2ng8gxreqszgj6aryb6vpmd55nfqjb6jszvlj4m0sf4k' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/6bd4pe2ng8gxreqszgj6aryb6vpmd55nfqjb6jszvlj4m0sf4k/plan.png' /></a>