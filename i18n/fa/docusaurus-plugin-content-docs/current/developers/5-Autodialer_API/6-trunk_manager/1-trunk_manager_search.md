---

sidebar_label: "جستجوی مدیریت ترانک ها"
title: "جستجوی مدیریت ترانک ها"
---


# Trunk Search

از این سرویس برای جستجو در TrunkManager استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|        توضیحات        | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |     پارامترها     |
|:---------------------:|:------------------:|:--------------:|:----------------------:|:-----------------:|
|   یافتن موارد مشابه   |     true/false     |      true      |           **           |       alike       |
| نام مدیریت‌کننده ترانک |          -         |   autodialer   |                        | conditions->title |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/trunks/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"conditions":{"title":"autodialer"}
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
				  "url": "http://192.168.51.20/api/v4/autodialer/trunks/search",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"alike": "true",
					"conditions": {
					  "title": "autodialer"
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
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/autodialer/trunks/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"conditions":{"title":"autodialer"}
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
            "_id": "5ec63107ce4f6d12c43e250f",
            "title": "autodialer",
            "trunk_id": {
                "$oid": "5f19760ace4f6d16dd2e3e0c"
            },
            "status": "active",
            "active_times": {
                "1": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19"
                ],
                "2": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19"
                ],
                "3": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17"
                ],
                "4": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19"
                ],
                "6": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18"
                ],
                "7": [
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17"
                ]
            },
            "capacity": "5",
            "dial_interval": "1",
            "wait_cache_length": "100",
            "date": "1399-03-01 12:13:03",
            "current_capacity": 0,
            "current_wait_cache_length": 0
        }
    ]
}
```
    </TabItem>

  </Tabs>
