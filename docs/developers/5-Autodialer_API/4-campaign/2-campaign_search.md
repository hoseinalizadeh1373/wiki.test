---
---
# Campaign Search

This service is used to search for campaigns.

## Parameters
<div class="custom-table">
|      Description      | Defined Data   | Example Data           | Required[**]/Optional[*] | Parameters               |
|:--------------------:|:--------------:|:----------------------:|:------------------------:|:------------------------:|
| Find Similar Items   | yes/no         | true                   | **                       | alike                    |
| Campaign Name        | -              | -                      |                          | conditions->name         |
| Description          | -              | -                      |                          | conditions->description  |
| Status               | -              | -                      |                          | conditions->status       |
| Pagination Start     | -              | 20                     |                          | pagination->start        |
| Pagination Count     | -              | 0                      |                          | pagination->count        |
| Sorting              | -              | {}                     |                          | pagination->sorting      |
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
	  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/campaigns/search",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"alike\":\"true\",\r\n    \"conditions\":{\"name\":\"test\",\"description\":\"\",\"status\":\"\"},\r\n    \"pagination\":{\"start\":0,\"count\":20,\"sorting\":{}}\r\n}",
	  CURLOPT_HTTPHEADER => array(
		"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
		"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",
		"Content-Type: application/json"
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
				  "url": "http://192.168.51.21/api/v4/autodialer/campaigns/search",
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
						"name": "test",
						"description": "",
						"status": ""
					  },
					  "pagination": {
						"start": 0,
						"count": 20,
						"sorting": {}
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
            <summary>Show Full Source Code Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.21/api/v4/autodialer/campaigns/search' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"conditions":{"name":"test","description":"","status":""},
		"pagination":{"start":0,"count":20,"sorting":{}}
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
            "total": 2
        },
        "data": [
            {
                "_id": "654338c7766d71477c6319c3",
                "name": "test",
                "trunk_manager_id": "652ea11ed86c8023fb4bfa55",
                "interface_context": "auto",
                "interface_text": "text1",
                "numbers": [
                    "09212396500",
                    "09187213593",
                    "09188898969"
                ],
                "groups": [
                    "5e96c8c2c92de0468920657e",
                    "5e96d40cc92de025690d0a61"
                ],
                "try_interval": "600",
                "try": "1",
                "start": "1399-12-01 15:17:00",
                "end": "1399-12-05 15:17:00",
                "announcement": "65433892c08a113c497ee373",
                "description": "",
                "count": 3,
                "repeat": 1,
                "date": "1402-08-11 09:21:03",
                "status": "waiting",
                "isoStart": {
                    "$date": {
                        "$numberLong": "1613735220000"
                    }
                },
                "isoEnd": {
                    "$date": {
                        "$numberLong": "1614080820000"
                    }
                }
            },
            {
                "_id": "652ea1b5d86c8023fb4bfa5a",
                "name": "azan",
                "trunk_manager_id": "652ea11ed86c8023fb4bfa55",
                "interface_context": "",
                "interface_text": "",
                "numbers": [
                    "09370331680"
                ],
                "groups": [],
                "try_interval": "600",
                "try": "3",
                "start": "1402-07-25 18:32:09",
                "end": "1402-07-28 18:32:00",
                "announcement": "652ea0eba9315b2d0c025574",
                "description": "",
                "count": 1,
                "repeat": 2,
                "date": "1402-07-25 18:31:09",
                "status": "completed",
                "isoStart": {
                    "$date": {
                        "$numberLong": "1697554929668"
                    }
                },
                "isoEnd": {
                    "$date": {
                        "$numberLong": "1697814120000"
                    }
                },
                "hs": 2,
                "statistics": {
                    "all": {
                        "sum": 0,
                        "avg": 0,
                        "wait": 0,
                        "wait_avg": 0,
                        "try": 3,
                        "try_avg": 3,
                        "min_date": {
                            "$date": {
                                "$numberLong": "1697545548007"
                            }
                        },
                        "max_date": {
                            "$date": {
                                "$numberLong": "1697545548007"
                            }
                        },
                        "count": 1,
                        "numbers": 1,
                        "disposition": {
                            "LOST": {
                                "count": 1
                            }
                        },
                        "success": 0
                    },
                    "sep": [
                        {
                            "_id": 2,
                            "sum": 0,
                            "avg": 0,
                            "wait": 0,
                            "wait_avg": 0,
                            "try": 3,
                            "try_avg": 3,
                            "min_date": {
                                "$date": {
                                    "$numberLong": "1697545548007"
                                }
                            },
                            "max_date": {
                                "$date": {
                                    "$numberLong": "1697545548007"
                                }
                            },
                            "count": 1,
                            "numbers": 1,
                            "disposition": {
                                "LOST": {
                                    "count": 1
                                }
                            },
                            "answered": 0,
                            "success": 0
                        }
                    ]
                }
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
