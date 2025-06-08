---

---
# Report Ordered

This service is used to retrieve data from the bulk call search table, from the beginning to the end. The input parameter for this service is the record ID after which you want to retrieve the data. The output of the service will be the records in sequence (20 records will be returned in each call).

:::tip
If you want to retrieve the table data from the beginning, set the `id_` parameter to empty.
:::

:::tip
The `last_id` parameter will be returned in the response and gives you the ID of the last retrieved record. To retrieve the next set of data (in sequence), use this ID as input to the service again.
:::

## Parameters
<div class="custom-table">
| Description                                                      | Defined Data         | Sample Data             | Required[**]/Optional[*] | Parameters |
|------------------------------------------------------------------|----------------------|-------------------------|--------------------------|------------|
| Unique identifier after which the data should be retrieved in order (last_id) |                      | 5ddb9e925171cd0429088bad |                          | id_        |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/reports/ordered/id',
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
					  "url": "http://192.168.51.20/api/v4/autodialer/reports/ordered/id",
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
	curl --location --request POST 'http://192.168.51.20/api/v4/autodialer/reports/ordered/id' \
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
        "last_id": "603a2e1860150cc169a56e1c",
        "data": [
            {
                "_id": "60227494f4d19cb4c59f1f6d",
                "start": "1399-11-21 15:08:00",
                "end": "1399-11-27 15:08:00",
                "date": "1399-11-21 15:10:04",
                "campaign_id": {
                    "$oid": "60227493b26fb16cc33df9b8"
                },
                "campaign": "fathi-asd",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "5e4a4101ce4f6d5b691f1374",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 1,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "60227494f4d19cb4c59f1f6c"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1612870804000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "60227566f4d19cb4c59f1f6f",
                "start": "1399-11-21 15:13:32",
                "end": "1399-11-24 15:13:00",
                "date": "1399-11-21 15:13:33",
                "campaign_id": {
                    "$oid": "60227493b26fb16cc33df9b8"
                },
                "campaign": "fathi-asd",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "5e4a4101ce4f6d5b691f1374",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 2,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "60227566f4d19cb4c59f1f6e"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1612871013000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602275b7f4d19cb4c59f1f71",
                "start": "1399-11-21 15:14:54",
                "end": "1399-11-24 15:14:00",
                "date": "1399-11-21 15:14:54",
                "campaign_id": {
                    "$oid": "60227493b26fb16cc33df9b8"
                },
                "campaign": "fathi-asd",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "5e4a4101ce4f6d5b691f1374",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 3,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602275b7f4d19cb4c59f1f70"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1612871094000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "6022760af4d19cb4c59f1f73",
                "start": "1399-11-21 15:16:01",
                "end": "1399-11-24 15:16:00",
                "date": "1399-11-21 15:16:02",
                "campaign_id": {
                    "$oid": "60227493b26fb16cc33df9b8"
                },
                "campaign": "fathi-asd",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "5e4a4101ce4f6d5b691f1374",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 4,
                "status": "in-process",
                "billsec": 16,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "6022760af4d19cb4c59f1f72"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1612871162000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:16",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "60227eb2f4d19cb4c59f1f75",
                "start": "1399-11-21 15:52:00",
                "end": "1399-11-27 15:52:00",
                "date": "1399-11-21 15:52:55",
                "campaign_id": {
                    "$oid": "60227e9eada2e50844594e85"
                },
                "campaign": "TEST2",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "5e4a4101ce4f6d5b691f1374",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 1,
                "status": "in-process",
                "billsec": 18,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "60227eb2f4d19cb4c59f1f74"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1612873375000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:18",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e3d7b19841e814489fcd7",
                "start": "1399-11-30 12:57:00",
                "end": "1399-12-06 12:57:00",
                "date": "1399-11-30 13:42:06",
                "campaign_id": {
                    "$oid": "602e3cdf62743702bc4d7ca6"
                },
                "campaign": "test-fathi",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 1,
                "status": "in-process",
                "billsec": 2,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e3d7b19841e814489fcd6"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613643126000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:02",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e3e5b19841e814489fcda",
                "start": "1399-11-30 13:45:38",
                "end": "1399-12-03 13:45:00",
                "date": "1399-11-30 13:45:38",
                "campaign_id": {
                    "$oid": "602e3cdf62743702bc4d7ca6"
                },
                "campaign": "test-fathi",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 2,
                "status": "in-process",
                "billsec": 15,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e3e5b19841e814489fcd9"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613643338000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:15",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e488419841e814489fcdc",
                "start": "1399-11-30 14:23:00",
                "end": "1399-12-06 16:23:00",
                "date": "1399-11-30 14:28:55",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 1,
                "status": "in-process",
                "billsec": 18,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e488319841e814489fcdb"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613645935000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:18",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e48f219841e814489fcde",
                "start": "1399-11-30 14:30:52",
                "end": "1399-12-03 14:30:00",
                "date": "1399-11-30 14:30:53",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 2,
                "status": "in-process",
                "billsec": 12,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e48f219841e814489fcdd"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646053000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 0
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:12",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e491119841e814489fce0",
                "start": "1399-11-30 14:31:26",
                "end": "1399-12-03 14:31:00",
                "date": "1399-11-30 14:31:27",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 3,
                "status": "in-process",
                "billsec": 8,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e491119841e814489fcdf"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646087000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 0
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:08",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e49e5305bdd377168a8b4",
                "start": "1399-11-30 14:34:32",
                "end": "1399-12-03 14:34:00",
                "date": "1399-11-30 14:34:57",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 5,
                "status": "in-process",
                "billsec": 10,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e49e5305bdd377168a8b3"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646297000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 0
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:10",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e4a00305bdd377168a8b6",
                "start": "1399-11-30 14:35:23",
                "end": "1399-12-03 14:35:00",
                "date": "1399-11-30 14:35:24",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 6,
                "status": "in-process",
                "billsec": 10,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e4a00305bdd377168a8b5"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646324000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 0
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:10",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e4a2c305bdd377168a8b8",
                "start": "1399-11-30 14:36:10",
                "end": "1399-12-03 14:36:00",
                "date": "1399-11-30 14:36:10",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 7,
                "status": "in-process",
                "billsec": 8,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e4a2c305bdd377168a8b7"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646370000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 0
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:08",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e4a8c305bdd377168a8ba",
                "start": "1399-11-30 14:37:43",
                "end": "1399-12-03 14:37:00",
                "date": "1399-11-30 14:37:43",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 8,
                "status": "in-process",
                "billsec": 11,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e4a8c305bdd377168a8b9"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646463000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 0
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:11",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "602e4ae6305bdd377168a8bc",
                "start": "1399-11-30 14:39:10",
                "end": "1399-12-03 14:39:00",
                "date": "1399-11-30 14:39:11",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "NO ANSWER",
                "try": 1,
                "repeat": 9,
                "status": "in-process",
                "billsec": 3,
                "wait": 11,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e4ae6305bdd377168a8bb"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613646551000"
                            }
                        },
                        "disposition": "NO ANSWER",
                        "wait": 11
                    }
                ],
                "NO ANSWER": 1,
                "billsec_hhmmss": "00:00:03",
                "wait_hhmmss": "00:00:11"
            },
            {
                "_id": "602e50ae305bdd377168a8be",
                "start": "1399-11-30 15:04:03",
                "end": "1399-12-03 15:04:00",
                "date": "1399-11-30 15:04:03",
                "campaign_id": {
                    "$oid": "602e486fc5d3954d8d4f3356"
                },
                "campaign": "test1234",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "BUSY",
                "try": 1,
                "repeat": 10,
                "status": "in-process",
                "billsec": 0,
                "wait": 1,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e50ae305bdd377168a8bd"
                        },
                        "cause": "21",
                        "cause-txt": "Call Rejected",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613648043000"
                            }
                        },
                        "disposition": "BUSY",
                        "wait": 1
                    }
                ],
                "BUSY": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "602e50b6305bdd377168a8c0",
                "start": "1399-11-30 15:04:11",
                "end": "1399-12-03 15:04:00",
                "date": "1399-11-30 15:04:11",
                "campaign_id": {
                    "$oid": "602e3cdf62743702bc4d7ca6"
                },
                "campaign": "test-fathi",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "BUSY",
                "try": 1,
                "repeat": 3,
                "status": "in-process",
                "billsec": 0,
                "wait": 1,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e50b6305bdd377168a8bf"
                        },
                        "cause": "21",
                        "cause-txt": "Call Rejected",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613648051000"
                            }
                        },
                        "disposition": "BUSY",
                        "wait": 1
                    }
                ],
                "BUSY": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01"
            },
            {
                "_id": "602e50ce305bdd377168a8c2",
                "start": "1399-11-30 15:04:34",
                "end": "1399-12-03 15:04:00",
                "date": "1399-11-30 15:04:34",
                "campaign_id": {
                    "$oid": "602e3cdf62743702bc4d7ca6"
                },
                "campaign": "test-fathi",
                "interface_context": "poll07",
                "interface_text": "fathi",
                "trunk_manager_id": {
                    "$oid": "5ff6ae1a54aa59760b2b9c83"
                },
                "announcement": "",
                "number": "09151582674",
                "disposition": "ANSWERED",
                "try": 1,
                "repeat": 4,
                "status": "in-process",
                "billsec": 2,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "602e50ce305bdd377168a8c1"
                        },
                        "cause": "16",
                        "cause-txt": "Normal Clearing",
                        "starttime": {
                            "$date": {
                                "$numberLong": "1613648074000"
                            }
                        },
                        "disposition": "ANSWERED",
                        "wait": 0
                    }
                ],
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:02",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "603a2ae460150cc169a56e1a",
                "start": "1399-12-09 14:38:51",
                "end": "1399-12-12 14:38:00",
                "date": "1399-12-09 11:20:04",
                "campaign_id": {
                    "$oid": "603a2750ae84141485420c98"
                },
                "campaign": "as",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5f7586bcce4f6d03da37cf17"
                },
                "announcement": "5f3ce4f1ce4f6d20217c8830",
                "number": "09351152671",
                "disposition": "LOST",
                "try": 1,
                "repeat": 4,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "603a2ae460150cc169a56e19"
                        },
                        "cause": null,
                        "cause-txt": null,
                        "starttime": {
                            "$date": {
                                "$numberLong": "1614412204079"
                            }
                        },
                        "disposition": "LOST",
                        "wait": 0
                    }
                ],
                "LOST": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            },
            {
                "_id": "603a2e1860150cc169a56e1c",
                "start": "1399-12-09 14:52:30",
                "end": "1399-12-12 14:52:00",
                "date": "1399-12-09 11:33:44",
                "campaign_id": {
                    "$oid": "603a28e26927867fdc5511e9"
                },
                "campaign": "mostafa4",
                "interface_context": "",
                "interface_text": "",
                "trunk_manager_id": {
                    "$oid": "5f7586bcce4f6d03da37cf17"
                },
                "announcement": "5e4a4101ce4f6d5b691f1374",
                "number": "09351152671",
                "disposition": "LOST",
                "try": 1,
                "repeat": 3,
                "status": "in-process",
                "billsec": 0,
                "wait": 0,
                "input": "",
                "tries": [
                    {
                        "cdr_id": {
                            "$oid": "603a2e1860150cc169a56e1b"
                        },
                        "cause": null,
                        "cause-txt": null,
                        "starttime": {
                            "$date": {
                                "$numberLong": "1614413024946"
                            }
                        },
                        "disposition": "LOST",
                        "wait": 0
                    }
                ],
                "LOST": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
