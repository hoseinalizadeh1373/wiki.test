---

---
# Report Search

This service is used to search campaign reports.

## Parameters

<div class="custom-table">
| Description                          | Defined Data          | Sample Data             | Required[**]/Optional[*]      | Parameters                 |
|:------------------------------------:|:---------------------:|:-----------------------:|:----------------------------:|:---------------------------:|
| Find Similar Items                   | true/false            | true                    | **                           | alike                       |
| Start Search                         | -                     | 0                       |                              | pagination->start           |
| Number of Results                    | -                     | 20                      |                              | pagination->count           |
| Sorting Criteria                     | -                     | {}                      |                              | pagination->sorting         |
| Campaign Search From Date            | -                     | 2020-12-26 15:29        |                              | date_range->from            |
| Campaign Search To Date              | -                     | 2022-12-26 15:29        |                              | date_range->to              |
| Call Status                          | -                     | LOST                    |                              | conditions->disposition     |
| Campaign ID                          | -                     | 60c74cec7d2c21279a29b4e  |                              | conditions->campaign_id     |
| Search by Number                     | -                     | 09376131239             |                              | conditions->number          |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/reports/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"pagination":{"start":0,"count":20,"sorting":{}},
		"date_range":{"from":"2020-12-26 15:29","to":"2022-12-28 15:29"},
		"conditions":{
			"disposition":"",
			"campaign_id":"60c74cec7d2c21279a295b4e",
			"number":"09376131239"}
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
				  "url": "http://192.168.51.20/api/v4/autodialer/reports/search",
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
					  "from": "2020-12-26 15:29",
					  "to": "2022-12-28 15:29"
					},
					"conditions": {
					  "disposition": "",
					  "campaign_id": "60c74cec7d2c21279a295b4e",
					  "number": "09376131239"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/autodialer/reports/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"pagination":{"start":0,"count":20,"sorting":{}},
		"date_range":{"from":"2020-12-26 15:29","to":"2022-12-28 15:29"},
		"conditions":{
			"disposition":"",
			"campaign_id":"60c74cec7d2c21279a295b4e",
			"number":"09376131239"}
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
            "total": 1
        },
        "data": [
            {
                "_id": "60c74f8b00035c9848c6fd5b",
                "start": "1399-12-01 15:17:00",
                "end": "1400-12-04 15:17:00",
                "date": "1400-03-24 12:46:03",
                "campaign_id": {
                    "$oid": "60c74cec7d2c21279a295b4e"
                },
                "campaign": "test1111api",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5f7586bcce4f6d03da37cf17"
                },
                "announcement": "5f3ce4f1ce4f6d20217c8830",
                "number": "09376131239",
                "disposition": "LOST",
                "try": 1,
                "repeat": 1,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "60c74f8b00035c9848c6fd5a"
                        },
                        "cause": null,
                        "cause-txt": null,
                        "starttime": {
                            "$date": {
                                "$numberLong": "1623658563809"
                            }
                        },
                        "disposition": "LOST",
                        "wait": 0
                    }
                ],
                "LOST": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
