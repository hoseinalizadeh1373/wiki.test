---

sidebar_label: "به روز رسانی کمپین"
title: "به روز رسانی کمپین"
---

# Campaign Update

از این سرویس برای ویرایش کمپین استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|              توضیحات             | داده های تعریف شده |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] |     پارامترها     |
|:--------------------------------:|:------------------:|:------------------------:|:----------------------:|:-----------------:|
| شناسه‌یکتا که از [جستجو](/fa/developers/Autodialer_API/trunk_manager/trunk_manager_search) بدست می‌آید |          -         | 6048aa14095d8438aa64e7c9 |           **           |        id_        |
|             نام کمپین            |          -         |        imrorteza04       |            *           |        name       |
|           شناسه‌یکتا ترانک که از [جستجو](/fa/developers/Autodialer_API/trunk_manager/trunk_manager_search) به دست می‌آید          |          -         | 60508b4e095d840c3019e1bd |            *           |  trunk_manager_id |
|                 -                |          -         |           auto           |                        | interface_context |
|                 -                |          -         |           text1          |                        |   interface_text  |
|      فاصله زمانی بین هر تلاش     |          -         |            600           |            *           |    try_interval   |
|            تعداد تکرار           |          -         |             1            |            *           |        try        |
|          زمان شروع کمپین         |          -         |     2021-02-19 15:17     |            *           |       start       |
|         زمان پایان کمپین         |          -         |     2021-02-23 15:17     |            *           |        end        |
|          شناسه‌یکتا فایل‌صوتی که از [جستجو](/fa/developers/Autodialer_API/announcement/announcement_search) به دست می‌آید         |          -         |   lkjaghdfverfg78345893  |            *           |    announcement   |
|              توضیحات             |          -         |             -            |                        |    description    |
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
	  CURLOPT_URL => 'http://192.168.51.21/api/v4/autodialer/campaigns/update',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"_id":"6048aa14095d8438aa64e7c9",
		"name":"imrorteza04",
		"trunk_manager_id":"60508b4e095d840c3019e1bd",
		"interface_context":"auto",
		"interface_text":"text1",
		"try_interval":"600",
		"try":"1",
		"start":"2021-02-19 15:17",
		"end":"2021-02-23 15:17",
		"announcement":"lkjaghdfverfg78345893",
		"description":"",
		"count":3
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
				  "url": "http://192.168.51.21/api/v4/autodialer/campaigns/update",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "_id": "6048aa14095d8438aa64e7c9",
					  "name": "imrorteza04",
					  "trunk_manager_id": "60508b4e095d840c3019e1bd",
					  "interface_context": "auto",
					  "interface_text": "text1",
					  "try_interval": "600",
					  "try": "1",
					  "start": "2021-02-19 15:17",
					  "end": "2021-02-23 15:17",
					  "announcement": "lkjaghdfverfg78345893",
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
	curl --location --request POST 'http://192.168.51.21/api/v4/autodialer/campaigns/update' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"6048aa14095d8438aa64e7c9",
		"name":"imrorteza04",
		"trunk_manager_id":"60508b4e095d840c3019e1bd",
		"interface_context":"auto",
		"interface_text":"text1",
		"try_interval":"600",
		"try":"1",
		"start":"2021-02-19 15:17",
		"end":"2021-02-23 15:17",
		"announcement":"lkjaghdfverfg78345893",
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
        "count": 0
    }
}
```
    </TabItem>

  </Tabs>
