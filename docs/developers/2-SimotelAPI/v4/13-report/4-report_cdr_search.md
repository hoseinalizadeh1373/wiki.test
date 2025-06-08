---

---
# CDR Search

This service is used to retrieve information from the quick search section, and its main difference with `Quick Search` is the ability to search based on the **cuid** parameter.

## Parameters
<div class="custom-table">
| Description | Defined Data | Sample Data | Required[**]/Logical[*] | Parameters |
|:-----------:|:------------:|:-----------:|:------------------------:|:----------:|
| - | - | - | | conditions->from |
| - | - | - | | conditions->to |
| - | - | - | | conditions->cuid |
| Retrieve reports from date | - | 2020-06-15 15:16 | ** | date_range->from |
| Retrieve reports until date | - | 2022-06-22 15:16 | ** | date_range->to |
| - | - | 0 | | pagination->start |
| - | - | 20 | | pagination->count |
| - | - | - | | pagination->sorting |
| Find similar items | true/false | true | ** | alike |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/cdr/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "562", "to": "09365018573", "cuid":"1624340875.75933"},
		"date_range":{"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
		"pagination":{"start":0,"count":20,"sorting":{}},
		"alike":"true"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
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
					  "url": "http://192.168.51.20/api/v4/reports/cdr/search",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"conditions": {
						  "from": "562",
						  "to": "09365018573",
						  "cuid": "1624340875.75933"
						},
						"date_range": {
						  "from": "2020-06-15 15:16",
						  "to": "2022-06-22 15:16"
						},
						"pagination": {
						  "start": 0,
						  "count": 20,
						  "sorting": {}
						},
						"alike": "true"
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
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/cdr/search' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "562", "to": "09365018573", "cuid":"1624340875.75933"},
		"date_range":{"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
		"pagination":{"start":0,"count":20,"sorting":{}},
		"alike":"true"
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
                "starttime": -1
            },
            "total": 1
        },
        "target": "cdr",
        "useGroupBy": false,
        "data": [
            {
                "_id": "60d179d3895b44fe5bbc66e2",
                "type": "outgoing",
                "cuid": "1624340875.75933",
                "clid": "\"\" <09365018573>",
                "src": "562",
                "dst": "09365018573",
                "dcontext": "main_routing",
                "channel": "SIP/center-00009cb6",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1400-04-01 10:19:04",
                "answer": "2021-06-22 10:19:04",
                "duration": 1,
                "billsec": 54,
                "disposition": "ANSWERED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1624340875.75934",
                "userfield": "",
                "sequence": "54231",
                "comment": "",
                "v": 2,
                "outgoing_point": "center",
                "route": [
                    {
                        "type": "OutgoingRoute",
                        "name": "out31041",
                        "duration": 0.011272,
                        "date": {
                            "$date": {
                                "$numberLong": "1624340875778"
                            }
                        }
                    },
                    {
                        "type": "Switcher",
                        "name": "Switcher",
                        "duration": 0.005508,
                        "date": {
                            "$date": {
                                "$numberLong": "1624340875787"
                            }
                        }
                    },
                    {
                        "type": "Answer",
                        "name": "Answer",
                        "duration": 0.006667,
                        "date": {
                            "$date": {
                                "$numberLong": "1624340875797"
                            }
                        }
                    },
                    {
                        "type": "MixMonitor",
                        "name": "Mix Monitor",
                        "duration": 0.005578,
                        "date": {
                            "$date": {
                                "$numberLong": "1624340875808"
                            }
                        }
                    },
                    {
                        "type": "Trunk",
                        "name": "Center",
                        "duration": 68.601818,
                        "date": {
                            "$date": {
                                "$numberLong": "1624340944416"
                            }
                        }
                    },
                    {
                        "type": "Trunk",
                        "name": "Center",
                        "duration": 0.004539,
                        "date": {
                            "$date": {
                                "$numberLong": "1624340944442"
                            }
                        }
                    }
                ],
                "wait": 14,
                "starttime": "1400-04-01 10:19:06",
                "endtime": {
                    "$date": {
                        "$numberLong": "1624340947977"
                    }
                },
                "record": "20210622_1624340875.75933.mp3",
                "ANSWERED": 1,
                "outgoing": 1,
                "billsec_hhmmss": "00:00:54",
                "wait_hhmmss": "00:00:14",
                "duration_hhmmss": "00:00:01"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
