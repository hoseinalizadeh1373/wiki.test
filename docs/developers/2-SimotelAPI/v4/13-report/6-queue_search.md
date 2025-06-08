
# Queue Search

This service is used to retrieve queue reports.

## Parameters
<div class="custom-table">
| Description         | Defined Data       | Sample Data        | Required[**]/Optional[*] | Parameters           |
|:-------------------:|:------------------:|:------------------:|:------------------------:|:--------------------:|
| Source number       | -                  | -                  |                          | conditions->from     |
| Destination number  | -                  | -                  |                          | conditions->to       |
| Report unique ID    | -                  | 1623762811.55413   |                          | conditions->cuid     |
| Queue number        | -                  | 901                |                          | conditions->qnum     |
| Search from date    | -                  | 2020-06-15 15:16   | **                       | date_range->from     |
| Search to date      | -                  | 2022-06-22 15:16   | **                       | date_range->to       |
| Pagination start    | -                  | 0                  |                          | pagination->start    |
| Pagination count    | -                  | 20                 |                          | pagination->count    |
| Pagination sorting  | -                  | -                  |                          | pagination->sorting  |
| Find similar cases  | true/false         | true               | **                       | alike                |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/queue/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "", "to": "", "cuid":"1623762811.55413", "qnum":"901"},
		"date_range":{"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
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
				  "url": "http://192.168.51.20/api/v4/reports/queue/search",
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
					  "cuid": "1623762811.55413",
					  "qnum": "901"
					},
					"date_range": {
					  "from": "2020-06-15 15:16",
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
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/queue/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "", "to": "", "cuid":"1623762811.55413", "qnum":"901"},
		"date_range":{"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
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
                "starttime": -1
            },
            "total": 1
        },
        "target": "queue_stat",
        "useGroupBy": false,
        "data": [
            {
                "_id": "60c8a7ad8b2427f7c61c58ae",
                "duration": 0,
                "wait": 0,
                "agent_wait": 0,
                "billsec": 0,
                "queue_id": "1623762829.4035",
                "src": "02191015010",
                "dst": "564",
                "cuid": "1623762811.55413",
                "qnum": "901",
                "starttime": "1400-03-25 17:43:49",
                "endtime": {
                    "$date": {
                        "$numberLong": "1623762861416"
                    }
                },
                "ringtime": {
                    "$date": {
                        "$numberLong": "1623762829873"
                    }
                },
                "queue_status": "TIMEOUT",
                "disposition": "MISSED",
                "hangup": "caller",
                "MISSED": 1,
                "v": 2,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00",
                "duration_hhmmss": "00:00:00",
                "dst_name": "564"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
