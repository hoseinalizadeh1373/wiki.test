---

---
# Batch Add Agent

This service is used to add a batch of operators to the queue.

## Parameters

<div class="custom-table">
|    Description   | Defined Data | Sample Data | Required Parameters[**]/Optional[*] | Parameters |
|:----------------:|:------------:|:-----------:|:-----------------------------------:|:----------:|
|    Queue Number  |      -       |     999     |                **                   |   queue    |
|   Internal Number |      -       |     570     |                **                   |   source   |
|   Operator Number |      -       |     570     |                **                   |   agents   |
|   Queue Priority  |      -       |      1      |                                    |  penalty   |
</div>



## Sample Invocation

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
			CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/queues/batchaddagent',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => '',
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 0,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => 'POST',
			CURLOPT_POSTFIELDS =>'{
				"agents":[
					{"queue": "10000", "source": "570", "agent": "570", "penalty": ""},
					{"queue": "10000", "source": "553", "agent": "553", "penalty": ""}
				]
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
								"url": "http://192.168.51.20/api/v4/pbx/queues/batchaddagent",
								"method": "POST",
								"timeout": 0,
								"headers": {
									"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
									"Authorization": "Basic c2Fkcjo=",
									"Content-Type": "application/json"
								},
								"data": JSON.stringify({
									"agents": [
									{
										"queue": "10000",
										"source": "570",
										"agent": "570",
										"penalty": ""
									},
									{
										"queue": "10000",
										"source": "553",
										"agent": "553",
										"penalty": ""
									}
									]
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
			curl --location --request POST 'http://192.168.51.20/api/v4/pbx/queues/batchaddagent' \
			--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
			--header 'Authorization: Basic c2Fkcjo=' \
			--header 'Content-Type: application/json' \
			--data-raw '{
				"agents":[
					{"queue": "10000", "source": "570", "agent": "570", "penalty": ""},
					{"queue": "10000", "source": "553", "agent": "553", "penalty": ""}
				]
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
        "Data": [
            {
                "agents": "570",
                "message": "Added successfully",
                "ok": 1,
                "penalty": "",
                "queue": "10000",
                "source": "570"
            },
            {
                "agents": "553",
                "message": "Added successfully",
                "ok": 1,
                "penalty": "",
                "queue": "10000",
                "source": "553"
            }
        ],
        "ok": 1
    }
}
```
    </TabItem>

  </Tabs>
