---
sidebar_position: 1
sidebar_label: "به روز رسانی کاربر"
title: "به روز رسانی کاربر"
---


# User Edit

از این سرویس برای ویرایش داخلی استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|                     توضیحات                    |       داده های تعریف شده       |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] |          پارامترها          |
|:----------------------------------------------:|:------------------------------:|:------------------------:|:----------------------:|:---------------------------:|
| شناسه داخلی که از طریق [سرویس جستجو](/developers/SimotelAPI/v4/users/users_search) بدست می آید |                -               | 603b41443e14270c550bf15a |           **           |             id_             |
|             فعال/غیرفعال بودن کاربر            |             yes/no             |            yes           |            *           |            active           |
|                    نام‌کاربر                    |                -               |         Test User        |            *           |             name            |
|                   شماره‌داخلی                   |                -               |            530           |            *           |            number           |
|                        -                       |                -               |            530           |            *           |          cid_number         |
|                     رمزعبور                    |                -               |            530           |            *           |            secret           |
|                   ضبط مکالمات                  |             yes/no             |            no            |            *           |         call_record         |
|                        -                       |             yes/no             |            no            |            *           |      push_notification      |
|                 IPهای غیر مجاز                 |                -               |      0.0.0.0/0.0.0.0     |            *           |             deny            |
|                   IPهای مجاز                   |                -               |      0.0.0.0/0.0.0.0     |            *           |            permit           |
|                   پروتکل dtmf                  |                -               |          rfc2833         |            *           |           dtmfmode          |
|                        -                       |             yes/no             |            no            |            *           |         canreinvite         |
|                -               |             yes/no             |            no            |            *           |         directmedia         |
|                        -                       |                -               |       main_routing       |            *           |           context           |
|                        -                       |                -               |          dynamic         |            *           |             host            |
|                        -                       |        User/Peer/Friend        |           user           |            *           |             type            |
|                        -                       | yes/no/Force Report & Co-Media |            no            |            *           |             nat             |
|                        -                       |                -               |           5060           |            *           |             port            |
|                        -                       |             yes/no             |            no            |            *           |           qualify           |
|                        -                       |                -               |             1            |            *           |          callgroup          |
|                        -                       |                -               |             1            |            *           |         pickupgroup         |
|                        -                       |             yes/no             |            no            |            *           |         callcounter         |
|                  -                  |             yes/no             |            no            |            *           |          faxdetect          |
|                        -                       |                -               |             -            |            *           |          call_limit         |
|                        -                       |             yes/no             |            no            |            *           |            trunk            |
|                        -                       |             yes/no             |            no            |            *           |           transfer          |
|                        -                       |                -               |             -            |                        |            email            |
|                        -                       |                -               |            571           |                        |     forward_policy->Busy    |
|                        -                       |                -               |        09158315762       |                        |  forward_policy->No Answer  |
|                        -                       |                -               |            570           |                        | forward_policy->UnAvailable |
|                        -                       |                -               |           2121           |                        |     forward_policy->All     |
|                        -                       |                -               |           2121           |                        |     forward_policy->All     |

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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/users/update',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
			"_id":"6033876dc92de036d1390923",
			"user_type":"SIP",
			"active":"yes",
			"name":"Test User",
			"number":"999",
			"cid_number":"999",
			"secret":"999",
			"call_record":"no",
			"push_notification":"no",
			"deny":"0.0.0.0/0.0.0.0",
			"permit":"0.0.0.0/0.0.0.0",
			"dtmfmode":"rfc2833",
			"canreinvite":"no",
			"directmedia":"no",
			"context":"main_routing",
			"host":"dynamic",
			"type":"user",
			"nat":"no",
			"port":"5060",
			"qualify":"no",
			"callgroup":"1",
			"pickupgroup":"1",
			"callcounter":"no",
			"faxdetect":"no",
			"call_limit":"",
			"trunk":"no",
			"transfer":"no",
			"email":"",
			"forward_policy":{"Busy":"571","No Answer":"093411452671","UnAvailable":"588","All":"2020"},
			"more_options":""
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
				"url": "http://192.168.51.20/api/v4/pbx/users/update",
				"method": "POST",
				"timeout": 0,
				"headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				},
				"data": JSON.stringify({
					"_id": "603b41443e14270c550bf15a",
					"user_type": "SIP",
					"active": "yes",
					"name": "Test User",
					"number": "530",
					"cid_number": "530",
					"secret": "530",
					"call_record": "no",
					"push_notification": "no",
					"deny": "0.0.0.0/0.0.0.0",
					"permit": "0.0.0.0/0.0.0.0",
					"dtmfmode": "rfc2833",
					"canreinvite": "no",
					"directmedia": "no",
					"context": "main_routing",
					"host": "dynamic",
					"type": "user",
					"nat": "no",
					"port": "5060",
					"qualify": "no",
					"callgroup": "1",
					"pickupgroup": "1",
					"callcounter": "no",
					"faxdetect": "no",
					"call_limit": "",
					"trunk": "no",
					"transfer": "no",
					"email": "",
					"forward_policy": {
						"Busy": "571",
						"No Answer": "09158315762",
						"UnAvailable": "570",
						"All": "2121"
					},
					"more_options": ""
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

		curl --location --request POST 'http://192.168.51.20/api/v4/pbx/users/update' \
			--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
			--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
			"_id":"603f4ea7fcff3269187a3da3",
			"user_type":"SIP",
			"active":"yes",
			"name":"Test User2",
			"number":"909",
			"cid_number":"909",
			"secret":"909",
			"call_record":"no",
			"push_notification":"no",
			"deny":"0.0.0.0/0.0.0.0",
			"permit":"0.0.0.0/0.0.0.0",
			"dtmfmode":"rfc2833",
			"canreinvite":"no",
			"directmedia":"no",
			"context":"main_routing",
			"host":"dynamic",
			"type":"user",
			"nat":"no",
			"port":"5060",
			"qualify":"no",
			"callgroup":"1",
			"pickupgroup":"1",
			"callcounter":"no",
			"faxdetect":"no",
			"call_limit":"",
			"trunk":"no",
			"transfer":"no",
			"email":"",
			"forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},
			"more_options":""
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
