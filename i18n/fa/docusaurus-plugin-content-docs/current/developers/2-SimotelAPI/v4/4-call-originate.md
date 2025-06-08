---
sidebar_position: 2
sidebar_label: "تماس دو طرفه"
title: "تماس دو طرفه"
---



# تماس دوطرفه

با استفاده از این سرویس تماس دوطرفه (Number Masking) ایجاد می‌شود. تماس گیرنده می‌تواند هم داخلی باشد و هم شماره مخابراتی. چنان که تماس گیرنده شماره مخابراتی 
باشد، نام ترانک نیز باید وارد شود. مقدار time_out اختیاری است و در صورت عدم تخصیص بصورت پیش‌فرض 30 ثانیه در نظر گرفته می‌شود.

:::danger نکته مهم
در تماس دوطرفه در صورتی که نفر اول پاسخ ندهد و تماس را قطع کند؛ اطلاعات مربوط به تماس(CDR) به سمت وب‌ سرویس شما ارسال نمی‌شود. اگر این موضوع برای شما اهمیت بالایی دارد می‌توانید از APIهای مربوط به ساخت کمپین به همراه کامپوننت `autodialer route` برای ایجاد تماس دوطرفه استفاده کنید. برای توضیحات بیشتر به **[این قسمت](/developers/Autodialer_API/call_originate)** مراجعه فرمایید.
:::



<!-- ### پارامترها -->
## پارامترها


<div class="custom-table">
|                              توضیحات                              | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*]  |  پارامترها |
|:-----------------------------------------------------------------:|:------------------:|:--------------:|:-----------------------:|:----------:|
|                    (نفر اول در تماس)تماس گیرنده                   |          -         |       557      |            **           |   caller   |
|                    (نفر دوم در تماس)شماره مخاطب                   |          -         |       552      |            **           |   callee   |
| مسیر تماس نفر اول را مشخص می‌کند(به همراه کامپوننت Outgoing_Route) |          -         |  main_routing  |            **           |   context  |
|                                557                                |          -         |       557      |            **           |  caller_id |
|                  مسیر تماس نفر دوم را مشخص می‌کند                  |          -         |                |            *            | trunk_name |
|                   مدت زمان انتظار برای پاسخگویی                   |          -         |       30       |                         |   timeout  |
|                   مدت زمان تماس تلفنی                   |          -         |       30       |                         |   call_limit  |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/call/originate/act',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"caller":"557",
		"callee":"552",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"cisco",
		"timeout":"30",
		"call_limit":"30"
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
				  "url": "http://192.168.51.20/api/v4/call/originate/act",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "caller": "557",
					  "callee": "552",
					  "context": "main_routing",
					  "caller_id": "557",
					  "trunk_name": "cisco",
					  "timeout": "30",
					  "call_limit":"30"
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

	curl --location --request POST 'http://192.168.51.20/api/v4/call/originate/act' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"557",
		"callee":"552",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"",
		"timeout":"30",
		"call_limit":"30"
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
    "message": null,
    "data": {
        "originated_call_id": "orig.call.1703145054.787335"
    }
}
```
    </TabItem>

  </Tabs>


 به جهت آشنایی بیشتر، در بخش مثال‌های کاربردی چند نمونه از [کاربردهای](/developers/Scenarios/call_originate) این سرویس مورد بررسی قرار گرفته‌ است.

