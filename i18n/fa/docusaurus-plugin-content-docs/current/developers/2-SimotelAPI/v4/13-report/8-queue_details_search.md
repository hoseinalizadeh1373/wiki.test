---
sidebar_label: "بازیابی جزییات گزارشات صف"
title: "بازیابی جزییات گزارشات صف"
---


# Queue Details

این سرویس برای بازیابی گزارشات مربوط به جزئیات صف می‌باشد.

## پارامتر‌ها
<div class="custom-table">
|      توضیحات      | داده‌های تعریف شده |   داده‌های نمونه  | پارامترهای ضروری[**]/منطقی[*] |       پارامتر‌ها      |
|:-----------------:|:-----------------:|:----------------:|:----------------------:|:--------------------:|
|     شماره مبدا    |         -         |    09121234567   |                        |   conditions->from   |
|     شماره مقصد    |         -         |        560       |                        |    conditions->to    |
|         -         |         -         | 1624299033.75565 |                        |   conditions->cuid   |
|      شماره صف     |         -         |        901       |                        |   conditions->queue  |
|   شناسه یکتای صف  |         -         |                  |                        | conditions->queue_id |
|   جستجو از تاریخ  |         -         | 2020-06-15 15:16 |           **           |   date_range->from   |
|   جستجو تا تاریخ  |         -         | 2022-06-22 15:16 |           **           |    date_range->to    |
|         -         |         -         |         0        |                        |   pagination->start  |
|         -         |         -         |        20        |                        |   pagination->count  |
|         -         |         -         |                  |                        |  pagination->sorting |
| یافتن موارد مشابه |     true/flase    |       true       |           **           |         alike        |
</div>


## نمونه فراخوانی


<!--  -->


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'نمونه کد استفاده', value: 'usageCode'},
      {label: 'نمونه خروجی', value: 'outputCode'},
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
            <summary>نمایش کامل کد PHP</summary>
            <br/>

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/queue_details/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "09121234567", "to": "560", "cuid":"", "queue":"901", "queue_id":""},
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
            <summary>نمایش کامل کد JS</summary>
            <br/>

```js
	<html>
		<head>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		</head>
		<body>
			<script>
				var settings = {
				  "url": "http://192.168.51.20/api/v4/reports/queue_details/search",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"conditions": {
					  "from": "09121234567",
					  "to": "560",
					  "cuid": "",
					  "queue": "901",
					  "queue_id": ""
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
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/queue_details/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "09121234567", "to": "560", "cuid":"", "queue":"901", "queue_id":""},
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
        "target": "queue",
        "useGroupBy": false,
        "data": [
            {
                "_id": "60d0d647895b44fe5bbc6672",
                "type": "queue_report",
                "cuid": "1624299033.75565",
                "clid": "\"09129285259\" <09129285259>",
                "src": "09121234567",
                "dst": "560",
                "dcontext": "simotel-local-agents",
                "channel": "Local/560@simotel-local-agents-00000ba6;2",
                "dstchannel": "SIP/560-00009bf4",
                "lastapp": "Dial",
                "lastdata": "SIP/560,15,TtKkm",
                "start": "1400-03-31 22:41:04",
                "answer": "",
                "duration": 15,
                "billsec": 0,
                "disposition": "NO ANSWER",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1624299064.75567",
                "userfield": "",
                "sequence": "53966",
                "comment": "",
                "v": 2,
                "qnum": "901",
                "starttime": "1400-03-31 22:41:04",
                "endtime": {
                    "$date": {
                        "$numberLong": "1624299079724"
                    }
                },
                "queue_id": "1624299064.1411",
                "NO ANSWER": 1,
                "wait": 15,
                "tries": 1,
                "last_try": {
                    "$date": {
                        "$numberLong": "1624299079726"
                    }
                },
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:15",
                "duration_hhmmss": "00:00:15",
                "dst_name": "hoshmand"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>

