---
sidebar_position: 1
sidebar_label: "جستجوی ترانک"
title: "جستجوی ترانک"
---


# Trunk Search

از این سرویس برای جستجو ترانک استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|       توضیحات      | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |     پارامترها    |
|:------------------:|:------------------:|:--------------:|:----------------------:|:----------------:|
| مشاهده موارد مشابه |     true/false     |      true      |           **           |       alike      |
|      نام ترانک     |          -         | trunk_name_new |                        | conditions->name |
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
			CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/trunks/search',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => '',
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => 'POST',
			CURLOPT_POSTFIELDS =>'{
				"alike":"true",
				"conditions":{
					"name":"trunk_name_new"
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
			  "url": "http://192.168.51.20/api/v4/pbx/trunks/search",
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
					"name": "trunk_name_new"
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

			curl --location --request POST 'http://192.168.51.20/api/v4/pbx/trunks/search' \
			--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
			--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"alike":"true",
				"conditions":{
					"name":"trunk_name_new"
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
			"data": [
				{
					"_id": "603b7ff482f9b45dfc5429f9",
					"trunk_type": "SIP",
					"name": "trunk_name_new",
					"register_string": "3591011020:as#3591011020@192.168.1.10/3591011020",
					"active": "no",
					"deny": "0.0.0.0/0.0.0.0",
					"permit": "0.0.0.0/0.0.0.0",
					"dtmfmode": "rfc2833",
					"canreinvite": "no",
					"directmedia": "no",
					"context": "from-pstn",
					"host": "192.168.1.10",
					"type": "friend",
					"nat": "force_rport,comedia",
					"port": "5060",
					"qualify": "yes",
					"insecure": "port,invite",
					"disallow": "all",
					"allow": "ulaw,alaw",
					"more_options": "fromuser=3591011020username=3591011020secret=as#3591011020",
					"description": "",
					"date": "1399-12-10 15:05:16"
				}
			]
		}

      ```
  </TabItem>

</Tabs>
