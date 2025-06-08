---

sidebar_label: "به روز رسانی مدیریت ترانک ها"
title: "به روز رسانی مدیریت ترانک ها"
---


# Trunk Update

از این سرویس برای ویرایش ترانک استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|                            توضیحات                            | داده های تعریف شده |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] |     پارامترها     |
|:-------------------------------------------------------------:|:------------------:|:------------------------:|:----------------------:|:-----------------:|
|     شناسه یکتای مدیریت کننده ترانک که از [جستجو](/developers/Autodialer_API/trunk_manager/trunk_manager_search) به دست می‌آید     |          -         | 5ec65107ce4f6d12c43e250f |           **           |        _id        |
|                     نام مدیریت‌کننده ترانک                     |          -         |        autodialer        |            *           |       title       |
|                     وضعیت مدیرت‌کننده ترانک                    |   active/inactive  |          active          |            *           |       status      |
| تعداد داده‌ای که با هر بار فراخوانی از پایگاه داده بازیابی شود |                    |            100           |            *           | wait_cache_length |
|                 حداکثر ظرفیت مدیرت‌کننده ترانک                 |                    |            50            |            *           |      capacity     |
|               بازه زمانی بین تماس‌ها (برحسب ثانیه)              |                    |             1            |            *           |   dial_interval   |
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
            <summary>نمایش کامل کد Curl</summary>
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
