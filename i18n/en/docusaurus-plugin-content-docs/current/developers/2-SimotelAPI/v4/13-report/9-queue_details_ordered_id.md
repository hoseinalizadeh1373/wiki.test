---

---
# Queue Details Ordered

This service is used to retrieve the queue details table from start to finish. The input parameter for this service is the record ID after which you want to retrieve the information. The output of the service will be the table records in sequential order (20 records will be returned in each call).

:::tip Note
If you want to retrieve the table information from the beginning, set the `id_` parameter to empty.
:::

:::tip Note
The `last_id` parameter will be returned in the response, which gives the ID of the last retrieved record. To retrieve the next set of records (in order), use this ID as input for the service again.
:::


## Parameters
<div class="custom-table">
| Description                                                   | Defined Data       | Sample Data             | Required[**]/Optional[*] | Parameters |
|---------------------------------------------------------------|--------------------|--------------------------|--------------------------|------------|
| Unique ID after which the information should be retrieved in order (last_id) |                    | 5ddb9e925171cd0429088bad |                          | id_        |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/queue_details/ordered/id',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"_id":""
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
					  "url": "http://192.168.51.20/api/v4/reports/queue_details/ordered/id",
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
	curl --location --request POST 'http://192.168.51.20//api/v4/reports/queue_details/ordered/id' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2Fkcjo=' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":""
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
        "last_id": "5ddbbb0a5171cd0429088c3d",
        "data": [
            {
                "_id": "5ddb9c3c5171cd0429088b96",
                "cuid": "1574673453.2",
                "wait": 3,
                "userfield": "",
                "comment": "",
                "billsec": 64,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-00000004",
                "src": "09364348002",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 12:47:43",
                "record": "20191125_1574673453.2.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 12:47:44",
                "type": "queue_report",
                "clid": "\"\" <09364348002>",
                "dcontext": "simotel-local-agents",
                "sequence": "5",
                "duration": 67,
                "uniqueid": "1574673463.6",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 12:47:46",
                "channel": "Local/553@simotel-local-agents-00000000;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 12:47:47",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574673468303"
                    }
                },
                "billsec_hhmmss": "00:01:04",
                "wait_hhmmss": "00:00:03",
                "duration_hhmmss": "00:01:07"
            },
            {
                "_id": "5ddb9c825171cd0429088b99",
                "cuid": "1574673523.11",
                "wait": 5,
                "userfield": "",
                "comment": "",
                "NO ANSWER": 1,
                "billsec": 0,
                "qnum": "910",
                "disposition": "NO ANSWER",
                "v": 2,
                "dstchannel": "SIP/554-00000007",
                "src": "05131233",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 12:48:52",
                "accountcode": "",
                "starttime": "1398-09-04 12:48:53",
                "type": "queue_report",
                "clid": "\"\" <05131233>",
                "dcontext": "simotel-local-agents",
                "sequence": "14",
                "duration": 5,
                "uniqueid": "1574673532.18",
                "amaflags": "DOCUMENTATION",
                "answer": "",
                "channel": "Local/554@simotel-local-agents-00000002;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 12:48:58",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574673538895"
                    }
                },
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:00:05"
            },
            {
                "_id": "5ddb9c825171cd0429088b9a",
                "cuid": "1574673523.11",
                "wait": 5,
                "userfield": "",
                "comment": "",
                "billsec": 434,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-00000008",
                "src": "05131233",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 12:48:52",
                "record": "20191125_1574673523.11.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 12:48:53",
                "type": "queue_report",
                "clid": "\"\" <05131233>",
                "dcontext": "simotel-local-agents",
                "sequence": "12",
                "duration": 439,
                "uniqueid": "1574673532.16",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 12:48:58",
                "channel": "Local/553@simotel-local-agents-00000001;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 12:48:58",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574673538970"
                    }
                },
                "billsec_hhmmss": "00:07:14",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:07:19"
            },
            {
                "_id": "5ddb9ccf5171cd0429088b9e",
                "cuid": "1574673606.30",
                "wait": 1,
                "userfield": "",
                "comment": "",
                "billsec": 96,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-0000000e",
                "src": "05138481480",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 12:50:12",
                "record": "20191125_1574673606.30.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 12:50:13",
                "type": "queue_report",
                "clid": "\"\" <05138481480>",
                "dcontext": "simotel-local-agents",
                "sequence": "26",
                "duration": 97,
                "uniqueid": "1574673612.32",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 12:50:14",
                "channel": "Local/554@simotel-local-agents-00000003;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 12:50:14",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574673614999"
                    }
                },
                "billsec_hhmmss": "00:01:36",
                "wait_hhmmss": "00:00:01",
                "duration_hhmmss": "00:01:37"
            },
            {
                "_id": "5ddb9d735171cd0429088ba5",
                "cuid": "1574673660.40",
                "wait": 2,
                "userfield": "",
                "comment": "",
                "billsec": 46,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-0000001a",
                "src": "09361336200",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 12:52:56",
                "record": "20191125_1574673660.40.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 12:52:56",
                "type": "queue_report",
                "clid": "\"\" <09361336200>",
                "dcontext": "simotel-local-agents",
                "sequence": "42",
                "duration": 48,
                "uniqueid": "1574673776.55",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 12:52:58",
                "channel": "Local/554@simotel-local-agents-00000004;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 12:52:58",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574673779017"
                    }
                },
                "billsec_hhmmss": "00:00:46",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:00:48"
            },
            {
                "_id": "5ddb9ff65171cd0429088bb8",
                "cuid": "1574674397.112",
                "wait": 2,
                "userfield": "",
                "comment": "",
                "billsec": 18,
                "qnum": "900",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/555-0000003b",
                "src": "09034562701",
                "dst": "555",
                "tries": 1,
                "start": "1398-09-04 13:03:39",
                "record": "20191125_1574674397.112.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 13:03:40",
                "type": "queue_report",
                "clid": "\"\" <09034562701>",
                "dcontext": "simotel-local-agents",
                "sequence": "80",
                "duration": 20,
                "uniqueid": "1574674419.115",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 13:03:41",
                "channel": "Local/555@simotel-local-agents-00000005;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 13:03:42",
                "lastdata": "SIP/555,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574674422526"
                    }
                },
                "billsec_hhmmss": "00:00:18",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:00:20"
            },
            {
                "_id": "5ddba7385171cd0429088bd5",
                "cuid": "1574676267.206",
                "wait": 5,
                "userfield": "",
                "comment": "",
                "billsec": 29,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-00000076",
                "src": "05131703324",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 13:34:34",
                "record": "20191125_1574676267.206.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 13:34:35",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "144",
                "duration": 34,
                "uniqueid": "1574676274.208",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 13:34:39",
                "channel": "Local/553@simotel-local-agents-00000006;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 13:34:40",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574676280333"
                    }
                },
                "billsec_hhmmss": "00:00:29",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:00:34"
            },
            {
                "_id": "5ddbaca25171cd0429088bf1",
                "cuid": "1574677645.294",
                "wait": 3,
                "userfield": "",
                "comment": "",
                "billsec": 102,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-000000ad",
                "src": "05131703324",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 13:57:42",
                "record": "20191125_1574677645.294.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 13:57:43",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "204",
                "duration": 105,
                "uniqueid": "1574677662.296",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 13:57:45",
                "channel": "Local/553@simotel-local-agents-00000007;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 13:57:46",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574677666311"
                    }
                },
                "billsec_hhmmss": "00:01:42",
                "wait_hhmmss": "00:00:03",
                "duration_hhmmss": "00:01:45"
            },
            {
                "_id": "5ddbae0b5171cd0429088bfa",
                "cuid": "1574678018.323",
                "wait": 2,
                "userfield": "",
                "comment": "",
                "NO ANSWER": 1,
                "billsec": 0,
                "qnum": "910",
                "disposition": "NO ANSWER",
                "v": 2,
                "dstchannel": "SIP/553-000000bd",
                "src": "05131703324",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 14:03:44",
                "accountcode": "",
                "starttime": "1398-09-04 14:03:45",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "224",
                "duration": 2,
                "uniqueid": "1574678024.325",
                "amaflags": "DOCUMENTATION",
                "answer": "",
                "channel": "Local/553@simotel-local-agents-00000008;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:03:47",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574678027483"
                    }
                },
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:00:02"
            },
            {
                "_id": "5ddbae0b5171cd0429088bfb",
                "cuid": "1574678018.323",
                "wait": 2,
                "userfield": "",
                "comment": "",
                "billsec": 38,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-000000be",
                "src": "05131703324",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:03:44",
                "record": "20191125_1574678018.323.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:03:45",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "226",
                "duration": 40,
                "uniqueid": "1574678024.327",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:03:46",
                "channel": "Local/554@simotel-local-agents-00000009;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:03:47",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574678027528"
                    }
                },
                "billsec_hhmmss": "00:00:38",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:00:40"
            },
            {
                "_id": "5ddbaed45171cd0429088bff",
                "cuid": "1574678216.340",
                "wait": 2,
                "userfield": "",
                "comment": "",
                "billsec": 562,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-000000c5",
                "src": "09364348002",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:07:05",
                "record": "20191125_1574678216.340.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:07:06",
                "type": "queue_report",
                "clid": "\"\" <09364348002>",
                "dcontext": "simotel-local-agents",
                "sequence": "240",
                "duration": 564,
                "uniqueid": "1574678225.343",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:07:08",
                "channel": "Local/554@simotel-local-agents-0000000a;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:07:08",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574678228837"
                    }
                },
                "billsec_hhmmss": "00:09:22",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:09:24"
            },
            {
                "_id": "5ddbb0415171cd0429088c04",
                "cuid": "1574678576.361",
                "wait": 4,
                "userfield": "",
                "comment": "",
                "billsec": 27,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-000000cf",
                "src": "05131703324",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 14:13:08",
                "record": "20191125_1574678576.361.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:13:09",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "254",
                "duration": 31,
                "uniqueid": "1574678588.363",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:13:12",
                "channel": "Local/553@simotel-local-agents-0000000b;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:13:13",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574678593064"
                    }
                },
                "billsec_hhmmss": "00:00:27",
                "wait_hhmmss": "00:00:04",
                "duration_hhmmss": "00:00:31"
            },
            {
                "_id": "5ddbb1285171cd0429088c08",
                "cuid": "1574678805.373",
                "wait": 10,
                "userfield": "",
                "comment": "",
                "NO ANSWER": 1,
                "billsec": 0,
                "qnum": "910",
                "disposition": "NO ANSWER",
                "v": 2,
                "dstchannel": "SIP/553-000000d1",
                "src": "09213687730",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 14:16:53",
                "accountcode": "",
                "starttime": "1398-09-04 14:16:54",
                "type": "queue_report",
                "clid": "\"\" <09213687730>",
                "dcontext": "simotel-local-agents",
                "sequence": "260",
                "duration": 10,
                "uniqueid": "1574678813.375",
                "amaflags": "DOCUMENTATION",
                "answer": "",
                "channel": "Local/553@simotel-local-agents-0000000c;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:17:04",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574678824468"
                    }
                },
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:10",
                "duration_hhmmss": "00:00:10"
            },
            {
                "_id": "5ddbb1285171cd0429088c09",
                "cuid": "1574678805.373",
                "wait": 10,
                "userfield": "",
                "comment": "",
                "billsec": 21,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-000000d2",
                "src": "09213687730",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:16:53",
                "record": "20191125_1574678805.373.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:16:54",
                "type": "queue_report",
                "clid": "\"\" <09213687730>",
                "dcontext": "simotel-local-agents",
                "sequence": "262",
                "duration": 31,
                "uniqueid": "1574678813.377",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:17:03",
                "channel": "Local/554@simotel-local-agents-0000000d;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:17:04",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574678824511"
                    }
                },
                "billsec_hhmmss": "00:00:21",
                "wait_hhmmss": "00:00:10",
                "duration_hhmmss": "00:00:31"
            },
            {
                "_id": "5ddbb2065171cd0429088c0b",
                "cuid": "1574679012.386",
                "wait": 7,
                "userfield": "",
                "comment": "",
                "NO ANSWER": 1,
                "billsec": 0,
                "qnum": "910",
                "disposition": "NO ANSWER",
                "v": 2,
                "dstchannel": "SIP/554-000000d4",
                "src": "05131703324",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:20:37",
                "accountcode": "",
                "starttime": "1398-09-04 14:20:39",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "272",
                "duration": 7,
                "uniqueid": "1574679037.390",
                "amaflags": "DOCUMENTATION",
                "answer": "",
                "channel": "Local/554@simotel-local-agents-0000000f;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:20:46",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574679046096"
                    }
                },
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:07",
                "duration_hhmmss": "00:00:07"
            },
            {
                "_id": "5ddbb2065171cd0429088c0c",
                "cuid": "1574679012.386",
                "wait": 7,
                "userfield": "",
                "comment": "",
                "billsec": 520,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-000000d5",
                "src": "05131703324",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 14:20:37",
                "record": "20191125_1574679012.386.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:20:39",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "270",
                "duration": 527,
                "uniqueid": "1574679037.388",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:20:45",
                "channel": "Local/553@simotel-local-agents-0000000e;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:20:46",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574679046133"
                    }
                },
                "billsec_hhmmss": "00:08:40",
                "wait_hhmmss": "00:00:07",
                "duration_hhmmss": "00:08:47"
            },
            {
                "_id": "5ddbb3e65171cd0429088c11",
                "cuid": "1574679515.407",
                "wait": 2,
                "userfield": "",
                "comment": "",
                "billsec": 223,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-000000df",
                "src": "09364348002",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:28:42",
                "record": "20191125_1574679515.407.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:28:44",
                "type": "queue_report",
                "clid": "\"\" <09364348002>",
                "dcontext": "simotel-local-agents",
                "sequence": "288",
                "duration": 225,
                "uniqueid": "1574679522.409",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:28:45",
                "channel": "Local/554@simotel-local-agents-00000010;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:28:46",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574679526104"
                    }
                },
                "billsec_hhmmss": "00:03:43",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:03:45"
            },
            {
                "_id": "5ddbb5295171cd0429088c1a",
                "cuid": "1574679830.436",
                "wait": 3,
                "userfield": "",
                "comment": "",
                "billsec": 19,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/554-000000ef",
                "src": "05131703324",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:34:04",
                "record": "20191125_1574679830.436.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:34:06",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "308",
                "duration": 22,
                "uniqueid": "1574679844.441",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:34:08",
                "channel": "Local/554@simotel-local-agents-00000011;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:34:09",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574679849145"
                    }
                },
                "billsec_hhmmss": "00:00:19",
                "wait_hhmmss": "00:00:03",
                "duration_hhmmss": "00:00:22"
            },
            {
                "_id": "5ddbbb0a5171cd0429088c3c",
                "cuid": "1574681341.543",
                "wait": 5,
                "userfield": "",
                "comment": "",
                "NO ANSWER": 1,
                "billsec": 0,
                "qnum": "910",
                "disposition": "NO ANSWER",
                "v": 2,
                "dstchannel": "SIP/554-00000132",
                "src": "05131703324",
                "dst": "554",
                "tries": 1,
                "start": "1398-09-04 14:59:07",
                "accountcode": "",
                "starttime": "1398-09-04 14:59:09",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "380",
                "duration": 5,
                "uniqueid": "1574681347.547",
                "amaflags": "DOCUMENTATION",
                "answer": "",
                "channel": "Local/554@simotel-local-agents-00000013;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:59:14",
                "lastdata": "SIP/554,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574681354255"
                    }
                },
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:00:05"
            },
            {
                "_id": "5ddbbb0a5171cd0429088c3d",
                "cuid": "1574681341.543",
                "wait": 5,
                "userfield": "",
                "comment": "",
                "billsec": 368,
                "qnum": "910",
                "disposition": "ANSWERED",
                "v": 2,
                "dstchannel": "SIP/553-00000131",
                "src": "05131703324",
                "dst": "553",
                "tries": 1,
                "start": "1398-09-04 14:59:07",
                "record": "20191125_1574681341.543.mp3",
                "accountcode": "",
                "ANSWERED": 1,
                "starttime": "1398-09-04 14:59:09",
                "type": "queue_report",
                "clid": "\"\" <05131703324>",
                "dcontext": "simotel-local-agents",
                "sequence": "378",
                "duration": 373,
                "uniqueid": "1574681347.545",
                "amaflags": "DOCUMENTATION",
                "answer": "2019-11-25 14:59:13",
                "channel": "Local/553@simotel-local-agents-00000012;2",
                "lastapp": "Dial",
                "endtime": "1398-09-04 14:59:14",
                "lastdata": "SIP/553,40,TtKkg",
                "last_try": {
                    "$date": {
                        "$numberLong": "1574681354303"
                    }
                },
                "billsec_hhmmss": "00:06:08",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:06:13"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
