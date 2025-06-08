---
sidebar_label: "جستجوی موزیک انتظار"
title: "جستجوی موزیک انتظار"
---


# Music Search

از این سرویس برای جستجو در بین موزیک‌های انتظار استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|      توضیحات      | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |     پارامترها    |
|:-----------------:|:------------------:|:--------------:|:----------------------:|:----------------:|
| یافتن موارد مشابه |     true/false     |      true      |           **           |       alike      |
|   نام فایل صوتی   |          -         |        -       |                        | conditions->name |
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
		CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/musiconholds/search',
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => '',
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 0,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => 'POST',
		CURLOPT_POSTFIELDS =>'{
			"alike":"true",
			"conditions":{"name":"wait"}
			
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
					"url": "http://192.168.51.20/api/v4/pbx/musiconholds/search",
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
						"name": "wait"
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

	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/musiconholds/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"conditions":{"name":"wait"}
		
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
            "_id": "64b7f3e0f944002b8d333ce0",
            "name": "wait",
            "date": "1402-04-28 19:02:00",
            "path": "file-20230719143200-56732-wait",
            "count": 1,
            "musics": [
                {
                    "file": "file-20230719143208-70416-announcemp3_.wav",
                    "size": "55.18 KB",
                    "date": "1402-04-28 19:02",
                    "type": "file"
                }
            ]
        }
    ]
}
```
    </TabItem>

  </Tabs>
