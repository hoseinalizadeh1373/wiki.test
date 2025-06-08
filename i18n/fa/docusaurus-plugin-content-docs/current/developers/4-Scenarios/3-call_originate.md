---

sidebar_label: "سناریو تماس دو طرفه"
title: "سناریو تماس دو طرفه"
---



# تماس دوطرفه

:::tip توصیه
پیشنهاد می‌شود قبل از مطالعه این مطلب، ابتدا [اینجا](/fa/developers/SimotelAPI/v4/call-originate) را بررسی فرمایید.
:::

### ۱: ایجاد تماس دوطرفه بین دو داخلی 570 و 553


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
		"caller":"570",
		"callee":"553",
		"context":"main_routing",
		"caller_id":"masking",
		"timeout":"30"
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
				  "url": "http://192.168.51.20/api/v4/call/originate/act",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"caller": "570",
					"callee": "553",
					"context": "main_routing",
					"caller_id": "masking",
					"timeout": "30"
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
			curl --location --request POST 'http://192.168.51.20/api/v4/call/originate/act' \
			--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
			--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"caller":"570",
				"callee":"553",
				"context":"main_routing",
				"caller_id":"masking",
				"timeout":"30"
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


<!--  -->

### ۲: ایجاد تماس دوطرفه بین شماره 09376131239 و داخلی 521


باتوجه به اینکه مسیر خروجی caller (نفر اول تماس) توسط پارامتر `trunk_name` مشخص می‌شود، وجود این مقدار در سناریو ضروری می‌باشد.
که در مثال برابر با **Cisco** می‌باشد.


## نمونه فراخوانی 

<!--  -->

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
		"caller":"09376131239",
		"callee":"521",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
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
				  "url": "http://192.168.51.20/api/v4/call/originate/act",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"caller": "09376131239",
					"callee": "521",
					"context": "main_routing",
					"caller_id": "557",
					"trunk_name": "Cisco",
					"timeout": "30"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/call/originate/act' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"09376131239",
		"callee":"521",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
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


<!--  -->
 
### ۳: ایجاد تماس بین داخلی 521 و شماره 09376131239
 

دقت فرمایید با توجه به اینکه مسیر خروجی calle (نفر دوم تماس) توسط پارامتر `context` مشخص می‌شود، پس در صورتی که نفر دوم تماس بر
روی شبکه مخابراتی بود نیاز می‌باشد context یا بهتر است بگوییم کامپوننت `Outgoing Route` مربوط به این context به شبکه مخابراتی
دسترسی داشته باشد، برای انجام این کار کامپوننت `Outgoing Route` را به کامپوننت ترانک متصل می‌کنیم.

در این مثال مقدار context برابر با **main_routing** قرار داده شده است و در کامپوننت Outgoing_Route نیز مقدار context  برابر با
 **main_routing** تنظیم شده‌است. بنابراین تماس نفر دوم از این Outgoing Route خارج شده که به ترانک نیز دسترسی دارد.
 
<a href='https://dialplan.mysup.ir/live/plan/i1ywiloewqlybxrsrz0on5aqdwbu8vw2t2tjurzk1a4k91xqjo' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/i1ywiloewqlybxrsrz0on5aqdwbu8vw2t2tjurzk1a4k91xqjo/plan.png' /></a>



 ## نمونه فراخوانی 

<!--  -->
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
		"caller":"521",
		"callee":"09376131239",
		"context":"main_routing",
		"caller_id":"557",
		"timeout":"30"
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
				  "url": "http://192.168.51.20/api/v4/call/originate/act",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"caller": "521",
					"callee": "09376131239",
					"context": "main_routing",
					"caller_id": "557",
					"timeout": "30"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/call/originate/act' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"521",
		"callee":"09376131239",
		"context":"main_routing",
		"caller_id":"557",
		"timeout":"30"
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


<!--  -->
### ۴: ایجاد تماس بین شماره 31041570 و شماره 09376131239


 ##  نمونه فراخوانی 

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
		"caller":"31041570",
		"callee":"09376131239",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
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
					  "url": "http://192.168.51.20/api/v4/call/originate/act",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"caller": "31041570",
						"callee": "09376131239",
						"context": "main_routing",
						"caller_id": "557",
						"trunk_name": "Cisco",
						"timeout": "30"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/call/originate/act' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"caller":"31041570",
		"callee":"09376131239",
		"context":"main_routing",
		"caller_id":"557",
		"trunk_name":"Cisco",
		"timeout":"30"
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

<!--  -->


### ۵: اعمال محدودیت زمان مکالمه بر روی تماس دوطرفه

برای اعمال محدودیت زمانی در مکالمه نیاز می‌باشد از API دیگری  به نام `Trunk API` کمک گرفت که در واقع یک کامپوننت در Dialplan می‌باشد
که وظیفه ارسال اطلاعات تماس به سمت وب‌سرویس و در پاسخ دریافت شماره نفر دوم تماس و مقدار محدودیت  زمانی `call_limit` از وب‌ سرویس را برعهده دارد.
 
برای کسب اطلاعات بیشتر در مورد `Trunk API` به [اینجا](../SimotelWebhooks/DialplanApiComponents/trunk_api) مراجعه کنید.

**به طور کلی پیاده‌سازی سناریو به چهار  بخش تقسیم می‌شود**

**۱-**  ارسال درخواست تماس دوطرفه توسط وب‌ سرویس، پس از دریافت درخواست تماس دوطرفه از وب‌ سرویس، مرکز تماس شروع به تماس گرفتن با شماره اول می‌کند.

**۲-**  پس از اینکه شماره اول به تماس پاسخ داد کامپوننت `Trunk API` درخواستی با شماره نفر اول  تماس به همراه اطلاعت دیگر تماس را به سمت وب‌ سرویس شما ارسال می‌کند، در اینجا وب‌
سرویس در جواب شماره نفر دوم تماس به همراه محدودیت زمانی را به سمت مرکز تماس برمی‌گرداند و مرکزتماس با نفر دوم نیز تماس می‌گیرد.

**۳-**  پس از پاسخ دادن نفر دوم، تماس برقرار می‌شود و محدودیت زمانی بر روی تماس اعمال می‌شود و به محض رسیدن به محدودیت زمانی کانال تماس از سمت مرکز
تماس قطع می‌شود.در اینجا قابلیتی وجود دارد که چند دقیقه قبل از پایان مکالمه مرکز تماس به نفر اول تماس (مشاور یا ...) هشدار بدهد که زمان در حال به پایان رسیدن است.

**۴-**  پس از پایان رسیدن تماس، اطلاعات کامل تماس با استفاده از رویداد `CDR` مرکزتماس به سمت وب‌ سرویس ارسال می‌شود و با استفاده از `unique id` ارسالی در مرحله دوم می‌توانید گزارشات تماس‌ها را از یک‌دیگر تفکیک کنید.

برای کسب اطلاعات بیشتر در مورد `CDR` به [اینجا](../SimotelWebhooks/Events/cdr) مراجعه کنید.


در پایین سناریوی پیاده سازی شده در دایل‌پلن که به جای کامپوننت Trunk از کامپوننت **Trunk API** استفاده شده نشان داده شده‌است.
دقت فرمایید که در تنظیمات مربوط به **Trunk API** آدرس وب‌سرویس خود را قرار دهید.

<a href='https://dialplan.mysup.ir/live/plan/1mdp1s7bw0860pa4tng7unmancjydue62x7zuidd9jayi9if5s' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/1mdp1s7bw0860pa4tng7unmancjydue62x7zuidd9jayi9if5s/plan.png' /></a>

### ۶: ضبط مکالمات تماس دوطرفه
برای فعال‌سازی ضبط مکالمات، کافیست از کامپوننت `Mix Monitor` در دایل‌پلن استفاده کنید. پس از پایان مکالمه نام فایل‌صوتی به عنوان پارامتر رویداد 
`CDR` به سمت وب‌ سرویس ارسال می‌شود. برای دانلود فایل از API `reports/quick/cdr` استفاده می‌شود. برای کسب اطلاع بیشتر به [اینجا](../SimotelAPI/v4/report/audio_download) مراجعه فرمایید.

<a href='https://dialplan.mysup.ir/live/plan/0z0jkz6prd7i5oi0vd0daninji4zm19cg237q76e1zbaed4ibu' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/0z0jkz6prd7i5oi0vd0daninji4zm19cg237q76e1zbaed4ibu/plan.png' /></a>


### ۷: انجام نظرسنجی پس از پایان مکالمه
با اتصال کامپوننت `poll` به خروجی `S` کامپوننت `Trunk API` می‌توان پس از پایان مکالمه نظرسنجی انجام داد،
امتیاز نظرسنجی به عنوان پارامتر در رویداد `CDR` به سمت وب‌ سرویس ارسال می‌شود.
 
<a href='https://dialplan.mysup.ir/live/plan/hdy7b9nhxaiu6co3o0ijppybho1z14ht2d38ya098w9pz3mmo8' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/hdy7b9nhxaiu6co3o0ijppybho1z14ht2d38ya098w9pz3mmo8/plan.png' /></a>

### ۸: اعلام هشدار قبل از به پایان رسیدن تماس

در تماس دوطرفه این قابلیت وجود دارد که چند دقیقه قبل از این که تماس قطع شود برای نفر دوم تماس (مشاور یا ...) بوقی مبنی بر اینکه به انتهای تماس رسیده‌اید پخش شود و اطلاع‌رسانی صورت گیرد.

برای فعال‌سازی این قابلیت کافیست در بخش API فایل simotel.ini به مسیر /etc/simotel تنظیمات زیر اعمال شود.

```shell

[api]
# default=None
client_api_caller_timeout = 1
call_limit_warning_beeper_enabled = True
    call_limit_warning_beeper_announce = beep
    call_limit_warning_beeper_time_to_end_sec = 20
    call_limit_warning_beeper_repeat_time_sec = 10
	
```

۱. **call_limit_warning_beeper_enabled**: این پارامتر call_limit را در exten، trunk و ... فعال می‌کند. چنانچه از این پارامتر در تماس استفاده شود اگر این گزینه فعال باشد، برای تماس گیرنده هشدار پایان تماس پخش می‌شود.

۲. **call_limit_warning_beeper_announce**: فایل صوتی که برای تماس گیرنده پخش می‌شود که یا باید کاراکترها و کلمات مجاز باشد یا آدرس کامل فایل.

۳. **call_limit_warning_beeper_time_to_end_sec**: مشخص کننده این می‌باشد که چه مقدار زمانی به ثانیه به پایان call_limit باید این هشدار داده شود. مثلا برای 4 دقیقه باید 240 ثانیه قرار دهید و براساس ثانیه می‌باشد.

۴. **call_limit_warning_beeper_repeat_time_sec**: مشخص کننده این می‌باشد که اگر به call_limit رسید، هر‌چند ثانیه باید پیام را تکرار کند و براساس ثانیه می‌باشد.


### ۹:پخش موزیک انتظار برای نفر اول تماس

پس از پاسخ دادن نفر اول تماس، سیستم شروع به تماس گرفتن با نفر دوم می‌کند، در این بازه زمانی برای نفر اول صدای بوق خوردن پخش می‌شود، شاید این موضوع برای کاربر عجیب باشد و حتی قبل از پاسخ دادن نفر دوم تماس را قطع کند.

در تماس‌ دوطرفه می‌توان بعد از اینکه نفر اول به تماس پاسخ داد و قبل از تماس گرفتن با نفردوم برای نفر اول موزیک انتظار پخش کرد. قابلیت پیاده سازی موزیک انتظار پویا به ازای کاربر نیز وجود دارد که موضوع اصلی ما در این مطلب نمی‌باشد. برای استفاده از این قابلیت کافیست در سناریوی خود از کامپوننت `Announcement` استفاده کنید.

<a href='https://dialplan.mysup.ir/live/plan/6bd4pe2ng8gxreqszgj6aryb6vpmd55nfqjb6jszvlj4m0sf4k' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/6bd4pe2ng8gxreqszgj6aryb6vpmd55nfqjb6jszvlj4m0sf4k/plan.png' /></a>