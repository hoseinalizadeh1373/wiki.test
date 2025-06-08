---

---
# Inbox Search

This service is used to search for existing voicemail box information.

## Parameters
<div class="custom-table">
| Description                                  | Defined Data     | Example Data          | Required Parameters[**]/Optional[*] | Parameters              |
|:--------------------------------------------:|:----------------:|:----------------------:|:-----------------------------------:|:-----------------------:|
| Search for similar items                     | true/false       | true                   | **                                  | alike                   |
| -                                            | -                | 0                      |                                     | pagination->start       |
| -                                            | -                | 20                     |                                     | pagination->count       |
| -                                            | -                | -                      |                                     | pagination->sorting     |
| Search from date                             | -                | 2020-12-25 13:53       |                                     | date_range->from        |
| Search to date                               | -                | 2022-12-27 13:53       |                                     | date_range->to          |
| -                                            | -                | -                      |                                     | conditions->src         |
| Voicemail box number                        | -                | 400                    |                                     | condition->number       |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/voicemails/inbox/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"pagination":{
			"start":0,
			"count":20,
			"sorting":{}
		},
		"date_range":{
			"from":"2020-12-25 13:53",
			"to":"2022-12-27 13:53"
		},
		"conditions":{
			"src":"",
			"number":"400"
		}
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
				  "url": "http://192.168.51.20/api/v4/voicemails/inbox/search",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"alike": "true",
					"pagination": {
					  "start": 0,
					  "count": 20,
					  "sorting": {}
					},
					"date_range": {
					  "from": "2020-12-25 13:53",
					  "to": "2022-12-27 13:53"
					},
					"conditions": {
					  "src": "",
					  "number": "400"
					}
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
	curl --location --request POST 'http://192.168.51.20/api/v4/voicemails/inbox/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"pagination":{
			"start":0,
			"count":20,
			"sorting":{}
		},
		"date_range":{
			"from":"2020-12-25 13:53",
			"to":"2022-12-27 13:53"
		},
		"conditions":{
			"src":"",
			"number":"400"
		}
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
    "data": {
        "pagination": {
            "start": 0,
            "count": 20,
            "sorting": {
                "date": -1
            },
            "total": 11
        },
        "data": [
            {
                "_id": "60c856c88b2427f7c61c55b6",
                "number": "400",
                "caller_id": "570",
                "filename": "400_1623742139-vm-record-file-9758.wav",
                "voice_mail_id": {
                    "$oid": "5c2dd8f5fbdbe25519496c09"
                },
                "duration": 2,
                "read": false,
                "v": 2,
                "date": "1400-03-25 11:59:12"
            },
            {
                "_id": "60740c3ef303ef9ff3d87970",
                "number": "400",
                "caller_id": "570",
                "error": "This file has not been saved properly",
                "voice_mail_id": {
                    "$oid": "5c2dd8f5fbdbe25519496c09"
                },
                "read": true,
                "v": 2,
                "date": "1400-01-23 13:30:46"
            },
            {
                "_id": "60740c27f303ef9ff3d8796e",
                "number": "400",
                "caller_id": "570",
                "error": "This file has not been saved properly",
                "voice_mail_id": {
                    "$oid": "5c2dd8f5fbdbe25519496c09"
                },
                "read": true,
                "v": 2,
                "date": "1400-01-23 13:30:23"
            },
        ]
    }
}
```
    </TabItem>

  </Tabs>
