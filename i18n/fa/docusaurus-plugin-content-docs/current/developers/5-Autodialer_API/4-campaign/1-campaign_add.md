---

sidebar_label: "افزودن کمپین"
title: "افزودن کمپین"
---


# Campaign Add

از این سرویس برای افزودن کمپین استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|                   توضیحات                  | داده های تعریف شده |                     داده های نمونه                    | پارامترهای ضروری[**]/منطقی[*] |     پارامترها     |
|:------------------------------------------:|:------------------:|:-----------------------------------------------------:|:-----------------------------:|:-----------------:|
|                  نام کمپین                 |          -         |                          test                         |               **              |        name       |
|   شناسه‌یکتا ترانک که از جستجو بدست می‌آید   |          -         |                5f6c5b56c92de0068f32e592               |               **              |  trunk_manager_id |
| مقدار context در کامپوننت autodialer route |          -         |                          auto                         |                               | interface_context |
|   مقدار text در کامپوننت autodialer route  |          -         |                         text1                         |                               |   interface_text  |
|                شماره مخاطبین               |          -         |                      09212396500                      |               *               |      numbers      |
|    شناسه‌یکتا گروه که از جستجو به دست می‌آید   |          -         | "5e96c8c2c92de0468920657e" "5e96d40cc92de025690d0a61" |               *               |       groups      |
|           فاصله زمانی بین هر تلاش          |          -         |                          600                          |               *               |    try_interval   |
|                 تعداد تکرار                |          -         |                           1                           |               *               |        try        |
|               زمان شروع کمپین              |          -         |                    2021-02-19 15:17                   |               *               |       start       |
|              زمان پایان کمپین              |          -         |                    2021-02-23 15:17                   |               *               |        end        |
|  شناسه‌یکتا فایل‌صوتی که از جستجو به دست می‌آید |          -         |                5e5b629ec92de075df7af457               |               *               |    announcement   |
|                   توضیحات                  |          -         |                           -                           |                               |    description    |
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
	  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/campaigns/add",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"name\":\"test\",\r\n    \"trunk_manager_id\":\"5f6c5b56c92de0068f32e592\",\r\n    \"interface_context\":\"auto\",\r\n    \"interface_text\":\"text1\",\r\n    \"numbers\":[\"09212396500\"],\r\n    \"groups\":[\"5e96c8c2c92de0468920657e\",\"5e96d40cc92de025690d0a61\"],\r\n    \"try_interval\":\"600\",\r\n    \"try\":\"1\",\r\n    \"start\":\"2021-02-19 15:17\",\r\n    \"end\":\"2021-02-23 15:17\",\r\n    \"announcement\":\"5e5b629ec92de075df7af457\",\r\n    \"description\":\"\",\r\n    \"count\":3\r\n}",
	  CURLOPT_HTTPHEADER => array(
		"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
		"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",
		"Content-Type: application/json"
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
				  "url": "http://192.168.51.21/api/v4/autodialer/campaigns/add",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "name": "test",
					  "trunk_manager_id": "5f6c5b56c92de0068f32e592",
					  "interface_context": "auto",
					  "interface_text": "text1",
					  "numbers": [
						"09212396500"
					  ],
					  "groups": [
						"5e96c8c2c92de0468920657e",
						"5e96d40cc92de025690d0a61"
					  ],
					  "try_interval": "600",
					  "try": "1",
					  "start": "2021-02-19 15:17",
					  "end": "2021-02-23 15:17",
					  "announcement": "5e5b629ec92de075df7af457",
					  "description": "",
					  "count": 3
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
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.21/api/v4/autodialer/campaigns/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"name":"test",
		"trunk_manager_id":"5f6c5b56c92de0068f32e592",
		"interface_context":"auto",
		"interface_text":"text1",
		"numbers":["09212396500"],
		"groups":["5e96c8c2c92de0468920657e","5e96d40cc92de025690d0a61"],
		"try_interval":"600",
		"try":"1",
		"start":"2021-02-19 15:17",
		"end":"2021-02-23 15:17",
		"announcement":"5e5b629ec92de075df7af457",
		"description":"",
		"count":3
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
        "_id": "654338c7766d71477c6319c3"
    }
}
```
    </TabItem>

  </Tabs>

