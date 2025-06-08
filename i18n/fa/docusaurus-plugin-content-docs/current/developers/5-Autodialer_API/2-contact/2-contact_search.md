---

sidebar_label: "جستجوی مخاطب"
title: "جستجوی مخاطب"
---




# Contact Search

از این سرویس برای جستجو مخاطبین استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|      توضیحات      | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |        پارامترها        |
|:-----------------:|:------------------:|:--------------:|:----------------------:|:-----------------------:|
| یافتن موارد مشابه |       yes/no       |      true      |           **           |          alike          |
|     نام مخاطب     |          -         |        -       |                        |     conditions->name    |
|      توضیحات      |          -         |        -       |                        | conditions->description |
|         -         |          -         |        -       |                        |    conditions->status   |
|         -         |          -         |       20       |                        |    pagination->start    |
|         -         |          -         |        0       |                        |    pagination->count    |
|         -         |          -         |       {}       |                        |   pagination->sorting   |

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
	  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/contacts/search",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"alike\":\"true\",\r\n    \"conditions\":{\"name\":\"\",\"number\":\"\",\"description\":\"\"},\r\n    \"pagination\":{\"start\":0,\"count\":20,\"sorting\":{}}\r\n}",
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
				  "url": "http://192.168.51.21/api/v4/autodialer/contacts/search",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "alike": "true",
					  "conditions": {
						"name": "",
						"number": "",
						"description": ""
					  },
					  "pagination": {
						"start": 0,
						"count": 20,
						"sorting": {}
					  }
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
	curl --location --request POST 'http://192.168.51.21/api/v4/autodialer/contacts/search' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"conditions":{"name":"","number":"","description":""},
		"pagination":{"start":0,"count":20,"sorting":{}}
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
                "name": 1
            },
            "total": 1
        },
        "data": [
            {
                "_id": "60461561095d840c2e477098",
                "name": "test_contact",
                "number": "112233",
                "description": "Just for test",
                "date": "1399-12-18 15:45:29"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
