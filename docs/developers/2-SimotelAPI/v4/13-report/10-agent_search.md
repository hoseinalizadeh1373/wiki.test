
# Agent Search

This service is used to retrieve information related to queue operators.

## Parameters
<div class="custom-table">
| Description         | Defined Data  | Sample Data        | Required[**]/Optional[*] | Parameters            |
|:--------------------:|:-------------:|:------------------:|:------------------------:|:----------------------:|
| Source Number       |         -     |         -          |                          |   conditions->from     |
| Destination Number  |         -     |         -          |                          |   conditions->to       |
|         -            |         -     |        550         |                          |   conditions->exten    |
| Queue Number        |         -     |        903         |                          |   conditions->queue    |
| Search From Date    |         -     | 2019-06-15 15:16   |           **             |   date_range->from     |
| Search To Date      |         -     | 2022-06-22 15:16   |           **             |   date_range->to       |
|         -            |         -     |         0          |                          |   pagination->start    |
|         -            |         -     |        20          |                          |   pagination->count    |
|         -            |         -     |                    |                          |   pagination->sorting  |
| Find Similar Items  |     true/false|       true         |           **             |         alike          |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/agent/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "", "to": "", "exten":"550", "queue":"903"},
		"date_range":{"from":"2019-06-15 15:16","to":"2022-06-22 15:16"},
		"pagination":{"start":0,"count":20,"sorting":{}},
		"alike":"true"
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
				  "url": "http://192.168.51.20/api/v4/reports/agent/search",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"conditions": {
					  "from": "",
					  "to": "",
					  "exten": "550",
					  "queue": "903"
					},
					"date_range": {
					  "from": "2019-06-15 15:16",
					  "to": "2022-06-22 15:16"
					},
					"pagination": {
					  "start": 0,
					  "count": 20,
					  "sorting": {}
					},
					"alike": "true"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/agent/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "", "to": "", "exten":"550", "queue":"903"},
		"date_range":{"from":"2019-06-15 15:16","to":"2022-06-22 15:16"},
		"pagination":{"start":0,"count":20,"sorting":{}},
		"alike":"true"
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
                "end": -1
            },
            "total": 1
        },
        "target": "agent",
        "useGroupBy": false,
        "data": [
            {
                "_id": "60cb10824f9805dce1490b25",
                "type": "inout",
                "exten": "550",
                "qnum": "903",
                "start": "1400-03-27 13:35:52",
                "end": "1400-03-27 13:36:10",
                "duration": 18,
                "inout": 1,
                "inout_du": 18,
                "duration_hhmmss": "00:00:18"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
