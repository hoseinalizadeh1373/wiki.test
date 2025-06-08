---

---
# Announce Add

This service is used for adding audio.

## Parameters
<div class="custom-table">
| Description | Defined Data | Example Data | Required Parameters[**]/Optional[*] | Parameters |
|:-----------:|:------------:|:------------:|:-----------------------------------:|:----------:|
| Name        |      -       | test_sound   | ** | name     |
| The audio file name returned in the response to the [upload request](/developers/SimotelAPI/v4/announcement/announcements_upload) |      -       | file-20200624051520-61681-announcement-wiresha- | ** | filename |
| Description |      -       | Just for test |   | comment  |
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
			CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/announcements/add',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => '',
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => 'POST',
			CURLOPT_POSTFIELDS =>'{
				"name":"test_sound",
				"filename":"file-20200624051520-61681-announcement-wiresha_",
				"comment":"Just for test"
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
					"url": "http://192.168.51.20/api/v4/pbx/announcements/add",
					"method": "POST",
					"timeout": 0,
					"headers": {
						"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
						"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
						"Content-Type": "application/json"
					},
					"data": JSON.stringify({
						"name": "test_sound",
						"filename": "file-20200624051520-61681-announcement-wiresha_",
						"comment": "Just for test"
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
			curl --location --request POST 'http://192.168.51.20/api/v4/pbx/announcements/add' \
			--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
			--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"name":"test_sound",
				"filename":"file-20200624051520-61681-announcement-wiresha_",
				"comment":"Just for test"
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
			"_id": "64b7f58b7a302f4de51ae494"
		}
	}
	```
    </TabItem>

  </Tabs>

