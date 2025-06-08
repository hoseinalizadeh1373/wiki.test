---
sidebar_position: 1
---
# Trunk Add

This service is used to add a trunk.

## Parameters
<div class="custom-table">
|        Description       |       Defined Data       |    Sample Data    | Required[**]/Optional[*] |    Parameters    |
|:------------------------:|:------------------------:|:------------------:|:-------------------------:|:-----------------:|
|       Trunk Type         |         SIP/IAX2/DAHDI   |        SIP         |            *              |    trunk_type     |
|       Trunk Name         |                -         |    trunk_name_new2 |           **              |       name        |
|           -              |                -         | some-register-string|            *              | register_string   |
|   Active/Inactive        |             yes/no       |        no          |            *              |      active       |
|           -              |                -         |    0.0.0.0/0.0.0.0 |            *              |       deny        |
|           -              |                -         |    0.0.0.0/0.0.0.0 |            *              |      permit       |
|    DTMF Standard         |                -         |      rfc2833      |            *              |     dtmfmode      |
|           -              |             yes/no       |        no          |            *              |   canreinvite     |
|           -              |             yes/no       |        no          |            *              |   directmedia     |
|           -              |                -         |     from-pstn      |            *              |     context       |
| Service Provider IP      |                -         |     192.168.1.10   |            *              |       host        |
|           -              |        User/Peer/Friend  |      friend        |            *              |       type        |
|           -              | yes/no/Force Report & Co-Media |  force_rport,comedia |            *           |       nat         |
|           -              |                -         |         5060       |            *              |       port        |
|           -              |             yes/no       |        yes          |            *              |     qualify       |
|           -              |    Port/Invite/Port & Invite   |      port,invite   |            *              |     insecure      |
|           -              |                -         |        all         |            *              |     disallow      |
|           -              |                -         |     ulaw,alaw      |            *              |      allow        |
</div>


## Sample Invocation


<!--  -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="usageCode"
  values={[
    {label: 'Example Code To Use', value: 'usageCode'},
    {label: 'Example Output', value: 'outputCode'},
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
          <summary>Show Full Source Code PHP</summary>
          <br/>

          ```php

		  <?php
	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/trunks/add',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
			"trunk_type":"SIP",
			"name":"trunk_name_new",
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
          <summary>Show Full Source Code JS</summary>
          <br/>

          ```js

<html>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			</head>
		<body>
			<script>
				var settings = {
				  "url": "http://192.168.51.20/api/v4/pbx/trunks/add",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "trunk_type": "SIP",
					  "name": "trunk_name_new",
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
          <summary>Show Full Source Code Curl</summary>
          <br/>

          ```bash

			curl --location --request POST 'http://192.168.51.20/api/v4/pbx/trunks/add' \
			--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
			--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
			--header 'Content-Type: application/json' \
			--data-raw '{
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
			"data": {
				"_id": "64b788b111294d248a477205"
			}
		}

      ```
  </TabItem>

</Tabs>
