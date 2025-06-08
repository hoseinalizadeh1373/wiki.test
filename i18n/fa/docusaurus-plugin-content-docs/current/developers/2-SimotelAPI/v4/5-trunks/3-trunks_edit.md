---
sidebar_position: 1
sidebar_label: "به روز رسانی ترانک"
title: "به روز رسانی ترانک"
---


# Trunk Edit

از این سرویس برای ویرایش ترانک استفاده می‌شود.

## پارامتر‌ها
<div class="custom-table">
|                  توضیحات                 |       داده های تعریف شده       |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] |    پارامترها    |
|:----------------------------------------:|:------------------------------:|:------------------------:|:----------------------:|:---------------:|
| شناسه یکتای ترانک که از [جستجو](/developers/SimotelAPI/v4/trunks/trunks_search) بدست می‌آید |                -               | 6033876dc92de036d1390923 |           **           |       id_       |
|                 نوع ترانک                |         SIP/IAX2/DAHDI         |            SIP           |            *           |    trunk_type   |
|                 نام‌ترانک                 |                -               |      trunk_name_new2     |            *           |       name      |
|                     -                    |                -               |   some-register-string   |            *           | register_string |
|             فعال/غیرفعال‌بودن             |             yes/no             |            no            |            *           |      active     |
|                     -                    |                -               |      0.0.0.0/0.0.0.0     |            *           |       deny      |
|                     -                    |                -               |      0.0.0.0/0.0.0.0     |            *           |      permit     |
|              استاندارد dtmf              |                -               |          rfc2833         |            *           |     dtmfmode    |
|                     -                    |             yes/no             |            no            |            *           |   canreinvite   |
|                     -                    |             yes/no             |            no            |            *           |   directmedia   |
|                     -                    |                -               |         from-pstn        |            *           |     context     |
|           ip ارائه دهنده سرویس           |                -               |       192.168.1.10       |            *           |       host      |
|                     -                    |        User/Peer/Friend        |          friend          |            *           |       type      |
|                     -                    | yes/no/Force Report & Co-Media |    force_rport,comedia   |            *           |       nat       |
|                     -                    |                -               |           5060           |            *           |       port      |
|                     -                    |             yes/no             |            yes           |            *           |     qualify     |
|                     -                    |    Port/Invite/Port & Invite   |        port,invite       |            *           |     insecure    |
|                     -                    |                -               |            all           |            *           |     disallow    |
|                     -                    |                -               |         ulaw,alaw        |            *           |      allow      |

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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/trunks/update',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
			"_id":"6033876dc92de036d1390923",
			"trunk_type":"SIP",
			"name":"trunk_name_new2",
			"register_string":"3591011020:as#3591011020@192.168.1.10/3591011020\\t",
			"active":"no",
			"deny":"0.0.0.0/0.0.0.0",
			"permit":"0.0.0.0/0.0.0.0",
			"dtmfmode":"rfc2833",
			"canreinvite":"no",
			"directmedia":"no",
			"context":"from-pstn",
			"host":"192.168.1.10",
			"type":"friend",
			"nat":"force_rport,comedia",
			"port":"5060",
			"qualify":"yes",
			"insecure":"port,invite",
			"disallow":"all",
			"allow":"ulaw,alaw",
			"more_options":"fromuser=3591011020\\nusername=3591011020\\nsecret=as#3591011020",
			"description":""
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
				  "url": "http://192.168.51.20/api/v4/pbx/trunks/update",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "_id": "6033876dc92de036d1390923",
					  "trunk_type": "SIP",
					  "name": "trunk_name_new2",
					  "register_string": "3591011020:as#3591011020@192.168.1.10/3591011020\t",
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
					  "more_options": "fromuser=3591011020\nusername=3591011020\nsecret=as#3591011020",
					  "description": ""
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

			curl --location --request POST 'http://192.168.51.20/api/v4/pbx/trunks/update' \
			--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
			--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"_id":"6033876dc92de036d1390923",
				"trunk_type":"SIP",
				"name":"trunk_name_new",
				"register_string":"3591011020:as#3591011020@192.168.1.10/3591011020\t",
				"active":"no",
				"deny":"0.0.0.0/0.0.0.0",
				"permit":"0.0.0.0/0.0.0.0",
				"dtmfmode":"rfc2833",
				"canreinvite":"no",
				"directmedia":"no",
				"context":"from-pstn",
				"host":"192.168.1.10",
				"type":"friend",
				"nat":"force_rport,comedia",
				"port":"5060",
				"qualify":"yes",
				"insecure":"port,invite",
				"disallow":"all",
				"allow":"ulaw,alaw",
				"more_options":"fromuser=3591011020\nusername=3591011020\nsecret=as#3591011020",
				"description":""
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
