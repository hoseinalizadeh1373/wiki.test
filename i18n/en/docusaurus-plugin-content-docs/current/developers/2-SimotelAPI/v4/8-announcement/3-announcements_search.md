---

---
# Announce Search

This service is used for searching audio files.

## Parameters
<div class="custom-table">
| Description       | Defined Data     | Example Data | Required Parameters[**]/Optional[*] | Parameters          |
|:-----------------:|:----------------:|:------------:|:----------------------:|:-------------------:|
| Find similar items| true/false       | true         | **                     | alike               |
| Audio file name   | -                | -            |                        | conditions->name    |
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
				CURLOPT_URL => 'http://192.168.51.21/api/v4/pbx/announcements/search',
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => '',
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 0,
				CURLOPT_FOLLOWLOCATION => true,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => 'POST',
				CURLOPT_POSTFIELDS =>'{
					"alike":"true",
					"conditions":{"name":""}
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
						"url": "http://192.168.51.21/api/v4/pbx/announcements/search",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
							"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
							"Content-Type": "application/json"
						},
						"data": JSON.stringify({
							"alike": "true",
							"conditions": {
								"name": ""
							}
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
			curl --location --request POST 'http://192.168.51.21/api/v4/pbx/announcements/search' \
			--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
			--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"alike":"true",
				"conditions":{"name":""}
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
				"_id": "5ea534550a1a2b1d207b1426",
				"filename": "file-20200426071221-22185-whatsapp-audio-2020-_.wav",
				"name": "3",
				"comment": "",
				"date": "1399-02-07 11:42:21"
			},
			{
				"_id": "5ea534650a1a2b12f6133357",
				"filename": "file-20200426071237-58502-whatsapp-audio-2020-_.wav",
				"name": "1",
				"comment": "",
				"date": "1399-02-07 11:42:37"
			},
			{
				"_id": "5f832be7095d8456d8453638",
				"filename": "file-20201011155935-37443-123mp3mp3_.wav",
				"name": "123",
				"comment": "",
				"date": "1399-07-20 19:29:35"
			}
		]
	}
	```
    </TabItem>

  </Tabs>


