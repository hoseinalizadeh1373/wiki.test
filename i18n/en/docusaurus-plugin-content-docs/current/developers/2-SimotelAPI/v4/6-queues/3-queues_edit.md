---

---
# Queue Edit


This service is used to edit queues.

## Parameters
<div class="custom-table">
|                Description                |                               Defined Data                               |      Sample Data      | Required Parameters[**]/Logical[*] |          Parameters          |
|:-----------------------------------------:|:----------------------------------------------------------------------:|:--------------------:|:----------------------:|:---------------------------:|
| Unique ID of the queue obtained from [search](/developers/SimotelAPI/v4/queues/queues_search) |                                        -                               | 603c8d9ffc909f2e766d40d3 |       **              |             _id             |
|                 Queue Name                |                                        -                               |          nasimTelecom         |       *                |             name            |
|                Queue Number               |                                        -                               |           9008       |       *                |            number           |
|                Strategy                   | Ring All/Least Recent/Fewest Calls/Random/RR Memory/RR Ordered/Linear/W Random |         Ring All     |       *                |           strategy          |
|                   -                       |                                     yes/no                             |            no        |       *                |          ringinuse          |
|              Call Recording               |                                     yes/no                             |            yes       |       *                |         call_record         |
|                   -                       |                                     yes/no                             |            yes       |       *                |       setinterfacevar       |
|                   -                       |                                     yes/no                             |            yes       |       *                |           autofill          |
|                   -                       |                                     yes/no                             |            yes       |       *                |         setqueuevar         |
|                   -                       |                                     yes/no                             |            yes       |       *                |       setqueueentryvar      |
|                   -                       |                                     yes/no                             |            no        |       *                |      persistentmembers      |
|                   -                       |                                     yes/no                             |            no        |       *                |       shared_lastcall       |
|                   -                       |                                     yes/no                             |            no        |       *                |      announce_holdtime      |
|                   -                       |                                     yes/no                             |            yes       |       *                |      announce_position      |
|                   -                       |                                  yes/no/Strict                         |          strict      |       *                |          joinempty          |
|                   -                       |                                     yes/no                             |            yes       |       *                |        leavewhenempty       |
|                   -                       |                                     yes/no                             |            no        |       *                |        reportholdtime       |
|                   -                       |                                        -                               |             0        |       *                |            maxlen           |
|                   -                       |                                        -                               |            120       |       *                |      announce_frequency     |
|                   -                       |                                        -                               |            60        |       *                |    min_announce_frequency   |
|                   -                       |                                        -                               |            120       |       *                | periodic_announce_frequency |
|              Hold Music                  |                                        -                               |       gole orkideh   |       *                |            music            |
|                   -                       |                                        -                               |    queue-callswaiting |       *                |      queue_callswaiting     |
|                   -                       |                                        -                               |      queue-thankyou  |       *                |        queue_thankyou       |
|                   -                       |                                        -                               |      queue-thereare  |       *                |        queue_thereare       |
|                   -                       |                                        -                               |     queue-youarenext |       *                |       queue_youarenext      |
|     ...                                    |                                        -                               |          ...         |                        |                            |
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
				CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/queues/update',
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => '',
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 0,
				CURLOPT_FOLLOWLOCATION => true,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => 'POST',
				CURLOPT_POSTFIELDS =>'{
					"_id":"603c8d9ffc909f2e766d40d3",
					"name":"nasimTelecom",
					"number":"9008",
					"strategy":"ringall",
					"ringinuse":"no",
					"call_record":"yes",
					"setinterfacevar":"yes",
					"autofill":"yes",
					"setqueuevar":"yes",
					"setqueueentryvar":"yes",
					"persistentmembers":"no",
					"shared_lastcall":"no",
					"announce_holdtime":"no",
					"announce_position":"yes",
					"joinempty":"strict",
					"leavewhenempty":"yes",
					"reportholdtime":"no",
					"maxlen":"0",
					"announce_frequency":"120",
					"min_announce_frequency":"60",
					"periodic_announce_frequency":"120",
					"music":"gole orkideh",
					"queue_callswaiting":"queue-callswaiting",
					"queue_thankyou":"queue-thankyou",
					"queue_thereare":"queue-thereare",
					"queue_youarenext":"queue-youarenext",
					"retry":"5",
					"servicelevel":"60",
					"timeout":"30",
					"weight":"10",
					"wrapuptime":"1",
					"monitor_type":"MixMonitor",
					"monitor_format":"wav",
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
							<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
							</script>
						</head>
					<body>
						<script>
							var settings = {
							"url": "http://192.168.51.20/api/v4/pbx/queues/update",
							"method": "POST",
							"timeout": 0,
							"headers": {
								"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
								"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
								"Content-Type": "application/json"
							},
							"data": JSON.stringify({
								"_id": "603c8d9ffc909f2e766d40d3",
								"name": "nasimTelecom",
								"number": "9008",
								"strategy": "ringall",
								"ringinuse": "no",
								"call_record": "yes",
								"setinterfacevar": "yes",
								"autofill": "yes",
								"setqueuevar": "yes",
								"setqueueentryvar": "yes",
								"persistentmembers": "no",
								"shared_lastcall": "no",
								"announce_holdtime": "no",
								"announce_position": "yes",
								"joinempty": "strict",
								"leavewhenempty": "yes",
								"reportholdtime": "no",
								"maxlen": "0",
								"announce_frequency": "120",
								"min_announce_frequency": "60",
								"periodic_announce_frequency": "120",
								"music": "gole orkideh",
								"queue_callswaiting": "queue-callswaiting",
								"queue_thankyou": "queue-thankyou",
								"queue_thereare": "queue-thereare",
								"queue_youarenext": "queue-youarenext",
								"retry": "5",
								"servicelevel": "60",
								"timeout": "30",
								"weight": "10",
								"wrapuptime": "1",
								"monitor_type": "MixMonitor",
								"monitor_format": "wav",
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
          <summary>Show Full Source Code Curl</summary>
          <br/>

			```bash
				curl --location --request POST 'http://192.168.51.20/api/v4/pbx/queues/update' \
				--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
				--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
				--header 'Content-Type: application/json' \
				--data-raw '{
					"_id":"603c8d9ffc909f2e766d40d3",
					"name":"nasimTelecom",
					"number":"9008",
					"strategy":"ringall",
					"ringinuse":"no",
					"call_record":"yes",
					"setinterfacevar":"yes",
					"autofill":"yes",
					"setqueuevar":"yes",
					"setqueueentryvar":"yes",
					"persistentmembers":"no",
					"shared_lastcall":"no",
					"announce_holdtime":"no",
					"announce_position":"yes",
					"joinempty":"strict",
					"leavewhenempty":"yes",
					"reportholdtime":"no",
					"maxlen":"0",
					"announce_frequency":"120",
					"min_announce_frequency":"60",
					"periodic_announce_frequency":"120",
					"music":"gole orkideh",
					"queue_callswaiting":"queue-callswaiting",
					"queue_thankyou":"queue-thankyou",
					"queue_thereare":"queue-thereare",
					"queue_youarenext":"queue-youarenext",
					"retry":"5",
					"servicelevel":"60",
					"timeout":"30",
					"weight":"10",
					"wrapuptime":"1",
					"monitor_type":"MixMonitor",
					"monitor_format":"wav",
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
