---
sidebar_position: 1
---
# User Search

This service is used to search for internal users.

## Parameters
<div class="custom-table">
|                        Description                       | Defined Data       | Sample Data   | Required[**]/Optional[*] | Parameters  |
|:-------------------------------------------------------:|:------------------:|:-------------:|:----------------------:|:-----------:|
| Search across all extensions or those that are mapped   |     all/mapped     |       all     |            *           |   status    |
|                   Find similar entries                  |          -         |        1      |           **           |   alike     |
|                       Extension Name                     |          -         |        -      |                        |    name     |
|                      Extension Number                    |          -         |       999     |                        |   number    |
|                Mapped Operator Number                    |          -         |        -      |                        |   mapped    |
</div>

## Sample Invocation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
	CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/users/search',
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => '',
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 0,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => 'POST',
	CURLOPT_POSTFIELDS =>'{
			"status":"all",
			"alike":true,
			"conditions":{"name": "101", "number": "", "mapped": ""}
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
				"url": "http://192.168.51.20/api/v4/pbx/users/search",
				"method": "POST",
			"timeout": 0,
			"headers": {
				"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
				"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
				"Content-Type": "application/json"
			},
			"data": JSON.stringify({
				"status": "all",
				"alike": true,
				"conditions": {
					"name": "101",
					"number": "",
					"mapped": ""
				}
				}),
			};

			$.ajax(settings).done(function (response) {
			console.log(response);
				});
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

	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/users/search' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"status":"all",
		"alike":true,
		"conditions":{"name": "101", "number": "", "mapped": ""}
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
    "message": "",
    "data": [
        {
            "_id": "64b558207af75f2cf37888987",
            "user_type": "SIP",
            "active": "yes",
            "call_record": "no",
            "push_notification": "no",
            "name": "101",
            "number": "101",
            "cid_number": "101",
            "secret": "******",
            "deny": "0.0.0.0/0.0.0.0",
            "permit": "0.0.0.0/0.0.0.0",
            "dtmfmode": "rfc2833",
            "context": "main_routing",
            "host": "dynamic",
            "type": "friend",
            "port": "5060",
            "qualify": "yes",
            "email": "",
            "forward_policy": {
                "Busy": "",
                "No Answer": "",
                "UnAvailable": "",
                "All": ""
            },
            "more_options": "",
            "canreinvite": "no",
            "directmedia": "no",
            "nat": "force_rport,comedia",
            "callgroup": "1",
            "pickupgroup": "1",
            "callcounter": "yes",
            "faxdetect": "no",
            "call_limit": "",
            "description": "",
            "date": "1402-04-26 19:32:56",
            "queues": []
        }
    ]
	}

      ```
  </TabItem>

</Tabs>
