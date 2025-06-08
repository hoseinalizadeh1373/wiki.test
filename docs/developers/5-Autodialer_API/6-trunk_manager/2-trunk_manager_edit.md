---

---
# Trunk Update

This service is used to edit a trunk manager.

## Parameters
<div class="custom-table">
| Description                                                       | Defined Data      | Example Data           | Required[**]/Optional[*] | Parameters           |
|:-----------------------------------------------------------------:|:-----------------:|:----------------------:|:------------------------:|:---------------------:|
| Unique Trunk Manager ID obtained from [search](/developers/Autodialer_API/trunk_manager/trunk_manager_search) | -                 | 5ec65107ce4f6d12c43e250f | **                       | _id                   |
| Trunk Manager Name                                                | -                 | autodialer             | *                        | title                 |
| Trunk Manager Status                                              | active/inactive   | active                 | *                        | status                |
| Number of records to fetch from the database per call            | -                 | 100                    | *                        | wait_cache_length     |
| Maximum capacity of the Trunk Manager                             | -                 | 50                     | *                        | capacity              |
| Time interval between calls (in seconds)                          | -                 | 1                      | *                        | dial_interval         |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/trunks/update',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"_id":"5ec63107ce4f6d12c43e250f",
		"title":"autodialer1",
		"status":"active",
		"wait_cache_length":"100",
		"capacity":"50",
		"dial_interval":"1"
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
				  "url": "http://192.168.51.20/api/v4/autodialer/trunks/update",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"_id": "5ec63107ce4f6d12c43e250f",
					"title": "autodialer1",
					"status": "active",
					"wait_cache_length": "100",
					"capacity": "50",
					"dial_interval": "1"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/autodialer/trunks/update' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"5ec63107ce4f6d12c43e250f",
		"title":"autodialer1",
		"status":"active",
		"wait_cache_length":"100",
		"capacity":"50",
		"dial_interval":"1"
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
    "data": ""
}
```
    </TabItem>

  </Tabs>
