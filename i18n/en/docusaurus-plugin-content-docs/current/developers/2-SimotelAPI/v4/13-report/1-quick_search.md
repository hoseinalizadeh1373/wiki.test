---

---
# Quick Search

This service is used to retrieve information for the quick search section.

**Note**: If you wish to use this service for retrieving contact information, only include the **cuid** field and remove the date fields.

## Parameters
<div class="custom-table">
| Description | Defined Data | Sample Data | Required[**]/Logical[*] | Parameters |
|:-----------:|:------------:|:-----------:|:------------------------:|:----------:|
| - | - | - | | conditions->from |
| - | - | - | | conditions->to |
| Contact ID | - | - | | conditions->cuid |
| Retrieve reports from date | - | 2020-06-15 15:16 | ** | date_range->from |
| Retrieve reports until date | - | 2022-06-22 15:16 | ** | date_range->to |
| - | - | 0 | | pagination->start |
| - | - | 20 | | pagination->count |
| - | - | - | | pagination->sorting |
| Find similar cases | true/false | true | ** | alike |
</div>

## Sample Invocation
*** (Search by time)***


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
	    className="unique-tabs" 
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/quick/search',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "", "to": "", "cuid":""},
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
					  "url": "http://192.168.51.20/api/v4/reports/cdr",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"conditions": {
						  "from": "",
						  "to": "",
						  "cuid":""
						},
						"date_range": {"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
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
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/cdr' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "", "to": "", "cuid": ""},
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
    "message": "Requested operation is done successfully",
    "data": {
        "pagination": {
            "start": 0,
            "count": 20,
            "sorting": {
                "starttime": -1
            },
            "total": 68
        },
        "data": [
            {
                "_id": "63899aed43180c714b12b61f",
                "type": "incoming",
                "cuid": "1669962473.12",
                "clid": "\"\" <05155252492>",
                "src": "05155252492",
                "dst": "1541",
                "dcontext": "incoming",
                "channel": "SIP/t1541-00000006",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-09-11 09:57:53",
                "answer": "2022-12-02 09:57:53",
                "duration": 3,
                "billsec": 3,
                "disposition": "NO ANSWER",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1669962473.12",
                "userfield": "",
                "sequence": "6",
                "comment": "",
                "v": 2,
                "did": "1541",
                "entry_point": "t1541",
                "route": [
                    {
                        "type": "IncomingRoute",
                        "name": "Incoming Route",
                        "duration": 0.010565,
                        "date": {
                            "$date": {
                                "$numberLong": "1669962473534"
                            }
                        }
                    },
                    {
                        "type": "Announcement",
                        "name": "Welcome",
                        "duration": 3.886591,
                        "date": {
                            "$date": {
                                "$numberLong": "1669962477425"
                            }
                        }
                    },
                    {
                        "type": "AGI",
                        "name": "AGI",
                        "duration": 0.013045,
                        "date": {
                            "$date": {
                                "$numberLong": "1669962477445"
                            }
                        }
                    }
                ],
                "wait": 4,
                "starttime": "1401-09-11 09:57:54",
                "endtime": "1401-09-11 09:57:57",
                "NO ANSWER": 1,
                "incoming": 1,
                "billsec_hhmmss": "00:00:03",
                "wait_hhmmss": "00:00:04"
            }
		]
	}
}
```
    </TabItem>

  </Tabs>


<!--  -->

## Example of search invocation based on cuid  
***(In this case, date_range must be empty)***


<!--  -->


  <Tabs
    defaultValue="usageCode"
    values={[
     {label: 'Example Code To Use', value: 'usageCode'},
     {label: 'Example Output', value: 'outputCode'},
    ]}>

    <!-- تب نمونه کد استفاده -->
    <TabItem value="usageCode">
      <Tabs
	  className="unique-tabs"
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/cdr',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "", "to": "", "cuid":"1677933940.72434"},
		"date_range":{},
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
					  "url": "http://192.168.51.20/api/v4/reports/cdr",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"conditions": {
						  "from": "",
						  "to": "",
						  "cuid":"1677933940.72434"
						},
						"date_range": {},
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
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/cdr' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "", "to": "", "cuid":"1677933940.72434"},
		"date_range":{},
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
    "message": "Requested operation is done successfully",
    "data": {
        "pagination": {
            "start": 0,
            "count": 20,
            "sorting": {
                "starttime": -1
            },
            "total": 68
        },
        "data": [
            {
                "_id": "63899aed43180c714b12b61f",
                "type": "incoming",
                "cuid": "1669962473.12",
                "clid": "\"\" <05155252492>",
                "src": "05155252492",
                "dst": "1541",
                "dcontext": "incoming",
                "channel": "SIP/t1541-00000006",
                "dstchannel": "",
                "lastapp": "Hangup",
                "lastdata": "",
                "start": "1401-09-11 09:57:53",
                "answer": "2022-12-02 09:57:53",
                "duration": 3,
                "billsec": 3,
                "disposition": "NO ANSWER",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1669962473.12",
                "userfield": "",
                "sequence": "6",
                "comment": "",
                "v": 2,
                "did": "1541",
                "entry_point": "t1541",
                "route": [
                    {
                        "type": "IncomingRoute",
                        "name": "Incoming Route",
                        "duration": 0.010565,
                        "date": {
                            "$date": {
                                "$numberLong": "1669962473534"
                            }
                        }
                    },
                    {
                        "type": "Announcement",
                        "name": "Welcome",
                        "duration": 3.886591,
                        "date": {
                            "$date": {
                                "$numberLong": "1669962477425"
                            }
                        }
                    },
                    {
                        "type": "AGI",
                        "name": "AGI",
                        "duration": 0.013045,
                        "date": {
                            "$date": {
                                "$numberLong": "1669962477445"
                            }
                        }
                    }
                ],
                "wait": 4,
                "starttime": "1401-09-11 09:57:54",
                "endtime": "1401-09-11 09:57:57",
                "NO ANSWER": 1,
                "incoming": 1,
                "billsec_hhmmss": "00:00:03",
                "wait_hhmmss": "00:00:04"
            }
		]
	}
}
```
    </TabItem>

  </Tabs>


