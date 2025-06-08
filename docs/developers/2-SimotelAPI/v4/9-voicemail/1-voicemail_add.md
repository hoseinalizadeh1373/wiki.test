---

---
# Voicemail Add

This service is used for adding a voicemail box.

## Parameters
<div class="custom-table">
| Description                  | Defined Data     | Example Data                       | Required Parameters[**]/Optional[*] | Parameters            |
|:----------------------------:|:----------------:|:----------------------------------:|:-----------------------------------:|:---------------------:|
| Voicemail box name           | -                | test voicemail                     | **                                  | name                  |
| Voicemail box number         | -                | 999                                | **                                  | number                |
| Password                     | -                | 999                                | **                                  | password              |
| Email address                | -                | -                                  |                                     | email                 |
| Password request             | yes/no           | no                                 | *                                   | required_password     |
| Allow password change        | yes/no           | no                                 | *                                   | allow_change_password |
| Email sending status         | yes/no           | no                                 | *                                   | send_email            |
| Attach audio file to email   | yes/no           | no                                 | *                                   | attach_file_email     |
| Play busy message            | yes/no           | no                                 | *                                   | play_busy             |
| Play unavailable message     | yes/no           | no                                 | *                                   | play_unavailable      |
| Play welcome message         | yes/no           | no                                 | *                                   | play_welcome          |
| Play Caller ID               | yes/no           | no                                 | *                                   | Play_CID              |
| Play envelope message        | yes/no           | no                                 | *                                   | Play_Envelope         |
| Delete voicemail             | yes/no           | no                                 | *                                   | Delete_Voicemail      |
| Additional options           | yes/no           | no                                 | *                                   | more_options          |
</div>


## Sample Invocation

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
				CURLOPT_URL => 'http://192.168.51.20/api/v4/voicemails/voicemails/add',
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => '',
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 0,
				CURLOPT_FOLLOWLOCATION => true,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => 'POST',
				CURLOPT_POSTFIELDS =>'{
					"name":"test voicemail",
					"number":"999",
					"password":"999",
					"email":"",
					"required_password":"no",
					"allow_change_password":"no",
					"send_email":"no",
					"attach_file_email":"no",
					"play_busy":"no",
					"play_unavailable":"no",
					"play_welcome":"no",
					"Play_CID":"no",
					"Play_Envelope":"no",
					"Delete_Voicemail":"no",
					"more_options":""
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
							"url": "http://192.168.51.20/api/v4/voicemails/voicemails/add",
							"method": "POST",
							"timeout": 0,
							"headers": {
								"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
								"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
								"Content-Type": "application/json"
							},
							"data": JSON.stringify({
								"name": "test voicemail",
								"number": "999",
								"password": "999",
								"email": "",
								"required_password": "no",
								"allow_change_password": "no",
								"send_email": "no",
								"attach_file_email": "no",
								"play_busy": "no",
								"play_unavailable": "no",
								"play_welcome": "no",
								"Play_CID": "no",
								"Play_Envelope": "no",
								"Delete_Voicemail": "no",
								"more_options": ""
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
	curl --location --request POST 'http://192.168.51.21/api/v4/voicemails/voicemails/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"name":"test voicemail",
		"number":"999",
		"password":"999",
		"email":"",
		"required_password":"no",
		"allow_change_password":"no",
		"send_email":"no",
		"attach_file_email":"no",
		"play_busy":"no",
		"play_unavailable":"no",
		"play_welcome":"no",
		"Play_CID":"no",
		"Play_Envelope":"no",
		"Delete_Voicemail":"no",
		"more_options":""
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
    "message": "Requested operation is done successfully",
    "data": {
        "_id": "64b7f79011294d248a477216"
    }
}
```
    </TabItem>

  </Tabs>
