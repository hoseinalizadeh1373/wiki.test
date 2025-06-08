---

---
# CDR Ordered

This service is used to retrieve the full list of Quick Search table data from the beginning to the end. The input parameter for this service is the record ID after which you want to retrieve the data. The service returns the table records sequentially (20 records per request).

:::tip Note  
If you want to retrieve the table data from the beginning, set the `id_` parameter to empty.
:::

:::tip Note  
The `last_id` parameter will be returned in the response and contains the ID of the last retrieved record. To retrieve the next set of data (sequentially), provide this ID again as the input.
:::

## Parameters
<div class="custom-table">
| Description | Defined Data | Sample Data | Required[**]/Optional[*] | Parameters |
|:-----------:|:------------:|:-----------:|:------------------------:|:---------:|
| Unique ID after which we want to retrieve the data sequentially (last_id) | - | 5ddb9e925171cd0429088bad | | id_ |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/cdr/ordered/id',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"_id": ""
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2Fkcjo=',
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
				  "url": "http://192.168.51.20/api/v4/reports/cdr/ordered/id",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2Fkcjo=",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"_id": ""
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
            <summary>Show Full Source Code Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/cdr/ordered/id' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2Fkcjo=' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id": ""
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
        "last_id": "64b802d343180c714b12b636",
        "data": [
            {
                "_id": "631e25455cdfddf334adfa11",
                "type": "outgoing",
                "cuid": "1662920001.4837",
                "clid": "\"\" <09155326344>",
                "src": "09155326344",
                "dst": "09155326344",
                "dcontext": "main_routing",
                "channel": "SIP/t7075-000011f1",
                "dstchannel": "SIP/t1541-000011f2",
                "lastapp": "Dial",
                "lastdata": "SIP/t1541/09155326344,30,TtKk",
                "start": "1401-06-20 22:43:21",
                "answer": "2022-09-11 22:43:22",
                "duration": 1,
                "billsec": 1,
                "disposition": "BUSY",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1662920001.4837",
                "userfield": "",
                "sequence": "4653",
                "comment": "originated call: orig.call.1662920001.861610",
                "v": 2,
                "outgoing_point": "t1541",
                "originated_call_id": "orig.call.1662920001.861610",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.033743,
                        "date": {
                            "$date": {
                                "$numberLong": "1662920002254"
                            }
                        }
                    },
                    {
                        "type": "Trunk",
                        "name": "Trunk",
                        "duration": 1.632207,
                        "date": {
                            "$date": {
                                "$numberLong": "1662920003890"
                            }
                        }
                    }
                ],
                "wait": 3,
                "starttime": "1401-06-20 22:43:24",
                "endtime": "1401-06-20 22:43:25",
                "BUSY": 1,
                "outgoing": 1,
                "billsec_hhmmss": "00:00:01",
                "wait_hhmmss": "00:00:03"
            },
            {
                "_id": "6320bea45cdfddf334adfa2b",
                "type": "local",
                "cuid": "1663090338.4898",
                "clid": "\"\" <123>",
                "src": "200",
                "dst": "123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:02:18",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090338.4898",
                "userfield": "",
                "sequence": "4699",
                "comment": "originated call: orig.call.1663090338.906690",
                "v": 2,
                "originated_call_id": "orig.call.1663090338.906690",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.047694,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090338596"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:02:19",
                "endtime": "1401-06-22 22:02:20",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320bf735cdfddf334adfa2c",
                "type": "local",
                "cuid": "1663090546.4900",
                "clid": "\"\" <123123>",
                "src": "200",
                "dst": "123123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:05:46",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090546.4900",
                "userfield": "",
                "sequence": "4700",
                "comment": "originated call: orig.call.1663090546.236468",
                "v": 2,
                "originated_call_id": "orig.call.1663090546.236468",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.047784,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090546116"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:05:46",
                "endtime": "1401-06-22 22:05:47",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320bf9a5cdfddf334adfa2d",
                "type": "local",
                "cuid": "1663090584.4901",
                "clid": "\"\" <123>",
                "src": "200",
                "dst": "123123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:06:24",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090584.4901",
                "userfield": "",
                "sequence": "4701",
                "comment": "originated call: orig.call.1663090584.477936. originated call: orig.call.1663090585.591270",
                "v": 2,
                "originated_call_id": "orig.call.1663090584.477936",
                "details": [
                    {
                        "date": "1401-06-22 22:06:24",
                        "billsec": 0,
                        "status": null,
                        "exten": "failed",
                        "comment": "originated call: orig.call.1663090584.477936. originated call: orig.call.1663090585.591270"
                    },
                    {
                        "date": "1401-06-22 22:06:26",
                        "billsec": 0,
                        "status": "NO ANSWER",
                        "exten": "failed",
                        "comment": null
                    }
                ],
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.043157,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090584648"
                            }
                        }
                    },
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.046354,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090586055"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:06:25",
                "endtime": "1401-06-22 22:06:26",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320bf9b5cdfddf334adfa2e",
                "type": "local",
                "cuid": "1663090584.4901",
                "clid": "\"\" <123123>",
                "src": "123",
                "dst": "failed",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "AGI",
                "lastdata": "agi://127.0.0.1:4573/dialplan, main_routing",
                "start": "1401-06-22 22:06:27",
                "answer": "",
                "duration": 0,
                "billsec": 0,
                "disposition": "NO ANSWER",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090587.4903",
                "userfield": "",
                "sequence": "4703",
                "comment": "originated call: orig.call.1663090584.477936. originated call: orig.call.1663090585.591270",
                "v": 2,
                "originated_call_id": "orig.call.1663090585.591270",
                "details": [
                    {
                        "date": "1401-06-22 22:06:24",
                        "billsec": 0,
                        "status": null,
                        "exten": "failed",
                        "comment": "originated call: orig.call.1663090584.477936. originated call: orig.call.1663090585.591270"
                    },
                    {
                        "date": "1401-06-22 22:06:26",
                        "billsec": 0,
                        "status": "NO ANSWER",
                        "exten": "failed",
                        "comment": null
                    }
                ],
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.043157,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090584648"
                            }
                        }
                    },
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.046354,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090586055"
                            }
                        }
                    }
                ],
                "wait": 2,
                "starttime": "1401-06-22 22:06:27",
                "endtime": "1401-06-22 22:06:27",
                "NO ANSWER": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:02"
            },
            {
                "_id": "6320bff05cdfddf334adfa30",
                "type": "local",
                "cuid": "1663090670.4904",
                "clid": "\"\" <123123>",
                "src": "200",
                "dst": "123123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:07:50",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090670.4904",
                "userfield": "",
                "sequence": "4704",
                "comment": "originated call: orig.call.1663090670.813361",
                "v": 2,
                "originated_call_id": "orig.call.1663090670.813361",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.044777,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090670850"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:07:51",
                "endtime": "1401-06-22 22:07:52",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320bff75cdfddf334adfa31",
                "type": "local",
                "cuid": "1663090677.4905",
                "clid": "\"\" <123123123>",
                "src": "200",
                "dst": "123123123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:07:57",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090677.4905",
                "userfield": "",
                "sequence": "4705",
                "comment": "originated call: orig.call.1663090677.536078. originated call: orig.call.1663090678.176089",
                "v": 2,
                "originated_call_id": "orig.call.1663090677.536078",
                "details": [
                    {
                        "date": "1401-06-22 22:07:57",
                        "billsec": 0,
                        "status": null,
                        "exten": "failed",
                        "comment": "originated call: orig.call.1663090677.536078. originated call: orig.call.1663090678.176089"
                    },
                    {
                        "date": "1401-06-22 22:07:58",
                        "billsec": 0,
                        "status": "NO ANSWER",
                        "exten": "failed",
                        "comment": null
                    }
                ],
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.053833,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090677633"
                            }
                        }
                    },
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.045647,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090678872"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:07:58",
                "endtime": "1401-06-22 22:07:59",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320bff85cdfddf334adfa32",
                "type": "local",
                "cuid": "1663090677.4905",
                "clid": "\"\" <123123123>",
                "src": "200",
                "dst": "123123123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:07:58",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090678.4906",
                "userfield": "",
                "sequence": "4706",
                "comment": "originated call: orig.call.1663090677.536078. originated call: orig.call.1663090678.176089",
                "v": 2,
                "originated_call_id": "orig.call.1663090678.176089",
                "details": [
                    {
                        "date": "1401-06-22 22:07:57",
                        "billsec": 0,
                        "status": null,
                        "exten": "failed",
                        "comment": "originated call: orig.call.1663090677.536078. originated call: orig.call.1663090678.176089"
                    },
                    {
                        "date": "1401-06-22 22:07:58",
                        "billsec": 0,
                        "status": "NO ANSWER",
                        "exten": "failed",
                        "comment": null
                    }
                ],
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.053833,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090677633"
                            }
                        }
                    },
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.045647,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090678872"
                            }
                        }
                    }
                ],
                "wait": 2,
                "starttime": "1401-06-22 22:07:59",
                "endtime": "1401-06-22 22:08:00",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:02"
            },
            {
                "_id": "6320bff95cdfddf334adfa33",
                "type": "local",
                "cuid": "1663090678.4906",
                "clid": "\"\" <123123>",
                "src": "200",
                "dst": "123123",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:07:59",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090679.4907",
                "userfield": "",
                "sequence": "4707",
                "comment": "originated call: orig.call.1663090679.355313",
                "v": 2,
                "originated_call_id": "orig.call.1663090679.355313",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.042995,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090679676"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:08:00",
                "endtime": "1401-06-22 22:08:01",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c0335cdfddf334adfa34",
                "type": "local",
                "cuid": "1663090738.4908",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:08:58",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090738.4908",
                "userfield": "",
                "sequence": "4708",
                "comment": "originated call: orig.call.1663090738.232689",
                "v": 2,
                "originated_call_id": "orig.call.1663090738.232689",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.047314,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090738269"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:08:58",
                "endtime": "1401-06-22 22:08:59",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c0c55cdfddf334adfa35",
                "type": "local",
                "cuid": "1663090884.4909",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:11:24",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090884.4909",
                "userfield": "",
                "sequence": "4709",
                "comment": "originated call: orig.call.1663090884.714394",
                "v": 2,
                "originated_call_id": "orig.call.1663090884.714394",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.042723,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090884084"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:11:24",
                "endtime": "1401-06-22 22:11:25",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c0f15cdfddf334adfa36",
                "type": "local",
                "cuid": "1663090927.4910",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:12:07",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663090927.4910",
                "userfield": "",
                "sequence": "4710",
                "comment": "originated call: orig.call.1663090927.486356",
                "v": 2,
                "originated_call_id": "orig.call.1663090927.486356",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.042818,
                        "date": {
                            "$date": {
                                "$numberLong": "1663090927724"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:12:08",
                "endtime": "1401-06-22 22:12:09",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c31a5cdfddf334adfa37",
                "type": "local",
                "cuid": "1663091480.4911",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:21:20",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663091480.4911",
                "userfield": "",
                "sequence": "4711",
                "comment": "originated call: orig.call.1663091480.836814",
                "v": 2,
                "originated_call_id": "orig.call.1663091480.836814",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.046078,
                        "date": {
                            "$date": {
                                "$numberLong": "1663091480750"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:21:21",
                "endtime": "1401-06-22 22:21:22",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c32c5cdfddf334adfa38",
                "type": "local",
                "cuid": "1663091499.4912",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:21:39",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663091499.4912",
                "userfield": "",
                "sequence": "4712",
                "comment": "originated call: orig.call.1663091499.992905",
                "v": 2,
                "originated_call_id": "orig.call.1663091499.992905",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.047142,
                        "date": {
                            "$date": {
                                "$numberLong": "1663091499214"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:21:39",
                "endtime": "1401-06-22 22:21:40",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c3b25cdfddf334adfa39",
                "type": "local",
                "cuid": "1663091632.4913",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:23:52",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663091632.4913",
                "userfield": "",
                "sequence": "4713",
                "comment": "originated call: orig.call.1663091632.442785",
                "v": 2,
                "originated_call_id": "orig.call.1663091632.442785",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.04448,
                        "date": {
                            "$date": {
                                "$numberLong": "1663091632531"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:23:53",
                "endtime": "1401-06-22 22:23:54",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c4155cdfddf334adfa3a",
                "type": "local",
                "cuid": "1663091731.4914",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:25:31",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663091731.4914",
                "userfield": "",
                "sequence": "4714",
                "comment": "originated call: orig.call.1663091731.792878",
                "v": 2,
                "originated_call_id": "orig.call.1663091731.792878",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.044469,
                        "date": {
                            "$date": {
                                "$numberLong": "1663091731666"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:25:32",
                "endtime": "1401-06-22 22:25:33",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c4285cdfddf334adfa3b",
                "type": "local",
                "cuid": "1663091751.4915",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:25:51",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663091751.4915",
                "userfield": "",
                "sequence": "4715",
                "comment": "originated call: orig.call.1663091751.271903",
                "v": 2,
                "originated_call_id": "orig.call.1663091751.271903",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.048014,
                        "date": {
                            "$date": {
                                "$numberLong": "1663091751085"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:25:51",
                "endtime": "1401-06-22 22:25:52",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c5c65cdfddf334adfa3c",
                "type": "local",
                "cuid": "1663092165.4918",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:32:45",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663092165.4918",
                "userfield": "",
                "sequence": "4718",
                "comment": "originated call: orig.call.1663092162.399277",
                "v": 2,
                "originated_call_id": "orig.call.1663092162.399277",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.044119,
                        "date": {
                            "$date": {
                                "$numberLong": "1663092165340"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:32:45",
                "endtime": "1401-06-22 22:32:46",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c5c85cdfddf334adfa3d",
                "type": "local",
                "cuid": "1663092167.4919",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:32:47",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663092167.4919",
                "userfield": "",
                "sequence": "4719",
                "comment": "originated call: orig.call.1663092161.590786",
                "v": 2,
                "originated_call_id": "orig.call.1663092161.590786",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.041649,
                        "date": {
                            "$date": {
                                "$numberLong": "1663092167193"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:32:47",
                "endtime": "1401-06-22 22:32:48",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "6320c5d25cdfddf334adfa3e",
                "type": "local",
                "cuid": "1663092176.4921",
                "clid": "\"\" <09370331680>",
                "src": "200",
                "dst": "09370331680",
                "dcontext": "main_routing",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-06-22 22:32:56",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1663092176.4921",
                "userfield": "",
                "sequence": "4721",
                "comment": "originated call: orig.call.1663092174.349111",
                "v": 2,
                "originated_call_id": "orig.call.1663092174.349111",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.047398,
                        "date": {
                            "$date": {
                                "$numberLong": "1663092177031"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1401-06-22 22:32:57",
                "endtime": "1401-06-22 22:32:58",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "64b62a6543180c714b12b628",
                "type": "local",
                "cuid": "1689660003.48",
                "clid": "\"100\" <100>",
                "src": "100",
                "dst": "101",
                "dcontext": "main_routing",
                "channel": "SIP/100-0000001a",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1402-04-27 10:30:03",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689660003.48",
                "userfield": "",
                "sequence": "29",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.012684,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660003715"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 0.015595,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660003734"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1402-04-27 10:30:04",
                "endtime": "1402-04-27 10:30:05",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "64b62a7743180c714b12b629",
                "type": "local",
                "cuid": "1689660021.49",
                "clid": "\"100\" <100>",
                "src": "100",
                "dst": "101",
                "dcontext": "main_routing",
                "channel": "SIP/100-0000001b",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1402-04-27 10:30:21",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689660021.49",
                "userfield": "",
                "sequence": "30",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.012309,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660021882"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 0.019087,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660021905"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1402-04-27 10:30:22",
                "endtime": "1402-04-27 10:30:23",
                "FAILED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "64b62c2043180c714b12b62a",
                "type": "local",
                "cuid": "1689660330.50",
                "clid": "\"101\" <101>",
                "src": "101",
                "dst": "100",
                "dcontext": "main_routing",
                "channel": "SIP/101-0000001c",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1402-04-27 10:37:28",
                "answer": "2023-07-18 10:37:28",
                "duration": 0,
                "billsec": 112,
                "disposition": "ANSWERED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689660330.50",
                "userfield": "",
                "sequence": "33",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.013199,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660330630"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 116.664123,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660447298"
                            }
                        }
                    }
                ],
                "wait": 3,
                "starttime": "1402-04-27 10:37:28",
                "endtime": "1402-04-27 10:37:28",
                "ANSWERED": 1,
                "local": 1,
                "billsec_hhmmss": "00:01:52",
                "wait_hhmmss": "00:00:03"
            },
            {
                "_id": "64b62cec43180c714b12b62b",
                "type": "local",
                "cuid": "1689660648.54",
                "clid": "\"101\" <101>",
                "src": "101",
                "dst": "103",
                "dcontext": "main_routing",
                "channel": "SIP/101-0000001e",
                "dstchannel": "SIP/103-0000001f",
                "lastapp": "Dial",
                "lastdata": "SIP/103,,TtKkg",
                "start": "1402-04-27 10:40:48",
                "answer": "",
                "duration": 2,
                "billsec": 0,
                "disposition": "BUSY",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689660648.54",
                "userfield": "",
                "sequence": "34",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.014751,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660648723"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 2.589351,
                        "date": {
                            "$date": {
                                "$numberLong": "1689660651318"
                            }
                        }
                    }
                ],
                "wait": 4,
                "starttime": "1402-04-27 10:40:50",
                "endtime": "1402-04-27 10:40:52",
                "BUSY": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:04"
            },
            {
                "_id": "64b63b5843180c714b12b62c",
                "type": "local",
                "cuid": "1689664341.57",
                "clid": "\"103\" <103>",
                "src": "103",
                "dst": "101",
                "dcontext": "main_routing",
                "channel": "SIP/103-00000020",
                "dstchannel": "SIP/101-00000021",
                "lastapp": "Dial",
                "lastdata": "SIP/101,,TtKkg",
                "start": "1402-04-27 11:42:21",
                "answer": "",
                "duration": 1,
                "billsec": 0,
                "disposition": "NO ANSWER",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689664341.57",
                "userfield": "",
                "sequence": "36",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.018989,
                        "date": {
                            "$date": {
                                "$numberLong": "1689664341471"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 1.470117,
                        "date": {
                            "$date": {
                                "$numberLong": "1689664342946"
                            }
                        }
                    }
                ],
                "wait": 3,
                "starttime": "1402-04-27 11:42:23",
                "endtime": "1402-04-27 11:42:24",
                "NO ANSWER": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:03"
            },
            {
                "_id": "64b7a34e43180c714b12b62f",
                "type": "local",
                "cuid": "1689756458.65",
                "clid": "\"100\" <100>",
                "src": "100",
                "dst": "101",
                "dcontext": "main_routing",
                "channel": "SIP/100-00000026",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1402-04-28 13:18:13",
                "answer": "2023-07-19 13:18:13",
                "duration": 0,
                "billsec": 12,
                "disposition": "ANSWERED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689756458.65",
                "userfield": "",
                "sequence": "44",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.011792,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756458430"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 22.48743,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756480923"
                            }
                        }
                    },
                    {
                        "type": "Poll",
                        "name": "Poll",
                        "duration": 11.750317,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756492680"
                            }
                        }
                    }
                ],
                "wait": 10,
                "starttime": "1402-04-28 13:18:14",
                "endtime": "1402-04-28 13:18:14",
                "ANSWERED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:12",
                "wait_hhmmss": "00:00:10"
            },
            {
                "_id": "64b7a3d043180c714b12b630",
                "type": "local",
                "cuid": "1689756562.69",
                "clid": "\"100\" <100>",
                "src": "100",
                "dst": "101",
                "dcontext": "main_routing",
                "channel": "SIP/100-00000028",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1402-04-28 13:20:24",
                "answer": "",
                "duration": 0,
                "billsec": 0,
                "disposition": "NO ANSWER",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689756562.69",
                "userfield": "",
                "sequence": "47",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.011911,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756562962"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 60.454433,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756623420"
                            }
                        }
                    }
                ],
                "wait": 62,
                "starttime": "1402-04-28 13:20:24",
                "endtime": "1402-04-28 13:20:24",
                "NO ANSWER": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:01:02"
            },
            {
                "_id": "64b7a3f443180c714b12b631",
                "type": "local",
                "cuid": "1689756645.72",
                "clid": "\"101\" <101>",
                "src": "101",
                "dst": "100",
                "dcontext": "main_routing",
                "channel": "SIP/101-0000002a",
                "dstchannel": "SIP/100-0000002b",
                "lastapp": "Dial",
                "lastdata": "SIP/100,,TtKkg",
                "start": "1402-04-28 13:20:45",
                "answer": "2023-07-19 13:20:47",
                "duration": 12,
                "billsec": 11,
                "disposition": "ANSWERED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1689756645.72",
                "userfield": "",
                "sequence": "48",
                "comment": "",
                "v": 2,
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "Outgoing Route",
                        "duration": 0.013127,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756645791"
                            }
                        }
                    },
                    {
                        "type": "Extension",
                        "name": "Extension",
                        "duration": 12.898469,
                        "date": {
                            "$date": {
                                "$numberLong": "1689756658694"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1402-04-28 13:20:48",
                "endtime": "1402-04-28 13:21:00",
                "hangup": "callee",
                "ANSWERED": 1,
                "local": 1,
                "billsec_hhmmss": "00:00:11",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "64b802d343180c714b12b636",
                "type": "outgoing",
                "cuid": "1689780939.84",
                "clid": "\"\" <000>",
                "src": "100",
                "dst": "101",
                "dcontext": "simotel-fax-send",
                "channel": "OutgoingSpoolFailed",
                "dstchannel": "",
                "lastapp": "SendFAX",
                "lastdata": "/var/www/html/files/fax/file-20230719153520-91583-at31m401tif.tif",
                "start": "1402-04-28 20:05:39",
                "answer": "",
                "duration": 6,
                "billsec": 0,
                "disposition": "FAILED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "{\"Uniqueid\":\"64b802ca7ec8cb8899ee28a6\", \"type\":\"fax\", \"src\": \"100\", \"dst\": \"101\"}",
                "uniqueid": "1689780939.84",
                "userfield": "",
                "sequence": "58",
                "comment": "fax",
                "v": 2,
                "wait": 7,
                "starttime": "1402-04-28 20:05:41",
                "endtime": "1402-04-28 20:05:47",
                "FAILED": 1,
                "outgoing": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:07"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
