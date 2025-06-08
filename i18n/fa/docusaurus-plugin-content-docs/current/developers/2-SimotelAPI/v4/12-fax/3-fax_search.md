---
sidebar_label: "جستجو در فکس"
title: "جستجو در فکس"
---



# Fax Search

از این سرویس برای جستجو در فکس‌های  استفاده می شود.

## پارامتر‌ها
<div class="custom-table">
|      توضیحات      | داده های تعریف شده |  داده های نمونه  | پارامترهای ضروری[**]/منطقی[*] |       پارامترها      |
|:-----------------:|:------------------:|:----------------:|:----------------------:|:--------------------:|
| یافتن موارد مشابه |     true/false     |       true       |           **           |         alike        |
|         -         |          -         |         0        |                        |  pagination-->start  |
|         -         |          -         |        20        |                        |  pagination-->count  |
|         -         |          -         |         -        |                        | pagination-->sorting |
|         -         |          -         | 2020-12-25 13:47 |                        |   date_range-->from  |
|         -         |          -         | 2020-12-27 13:47 |                        |    date_range-->to   |
|         -         |          -         |         -        |                        |   conditions-->src   |
|         -         |          -         |         -        |                        |   conditions-->dst   |
|         -         |          -         |         -        |                        |  conditions-->status |
|         -         |          -         |         -        |                        |   conditions-->type  |
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
	  CURLOPT_URL => 'http://192.168.51.21/api/v4/pbx/faxes/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"pagination":{
			"start":0,
			"count":20,
			"sorting":{}
		},
		"date_range":{
			 "from":"2020-12-25 13:20",
       		 "to":"2023-12-27 13:47"
		},
		"conditions":{
			"src":"",
			"dst":"",
			"status":"",
			"type":""
		}
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

        <TabItem value="Curl">
          <details>
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.21/api/v4/pbx/faxes/search' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"pagination":{
			"start":0,
			"count":20,
			"sorting":{}
		},
		"date_range":{
			 "from":"2020-12-25 13:20",
        	 "to":"2023-12-27 13:47"
		},
		"conditions":{
			"src":"",
			"dst":"",
			"status":"",
			"type":""
		}
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
                "_id": "64b801737ec8cb8899ee28a4",
                "type": "outbox",
                "src": "100",
                "dst": "101",
                "status": "SENDING",
                "file": "file-20230719152253-45890-at31m401tif.tif",
                "description": "",
                "date": "1402-04-28 19:59:55",
                "ext": "101",
                "trunk": "t1541",
                "channel": "SIP/t1541/101"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
