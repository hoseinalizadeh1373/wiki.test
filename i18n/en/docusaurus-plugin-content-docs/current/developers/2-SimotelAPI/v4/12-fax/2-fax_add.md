
# Fax Add

This service is used to add a sent fax.

:::tip Note
To send a fax as a file, the "file" field must have a value, and the "text" field should be removed from the input JSON.
:::

## Parameters
<div class="custom-table">
|                         Description                         | Defined Data |           Sample Data           | Required[**]/Logical[*] |  Parameters |
|:----------------------------------------------------------:|:------------:|:--------------------------------:|:----------------------:|:-----------:|
|                  Unique ID of the sender                    |       -      |             username1            |            *           |  sender_id  |
|                        Destination number                    |       -      |               112233             |            *           |      to     |
|                    Destination internal extension           |       -      |                 558              |            *           |     ext     |
|                        Output trunk                         |       -      |             trunk_name1          |            *           |  trunk_name |
| Name of the uploaded file returned in the [fax upload](/developers/SimotelAPI/v4/fax/fax_upload) response (if the "file" field has a value, the "text" field should be removed) |       -      | file-20200624051520-61681-fax-test |            *           |     file    |
|                    For sending a text file                  |       -      |           this is sample         |                        |     text    |
|                          Description                         |       -      |            just for test         |                        | description |
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/faxes/add',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"sender_id":"username1",
		"to":"112233",
		"ext":"558",
		"trunk_name":"Cisco",
		"file":"file-20200624051520-61681-fax-test",
		"description":"Just for test"
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

        <TabItem value="Curl">
          <details>
            <summary>Show Full Source Code Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/faxes/add' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"sender_id":"username1",
		"to":"112233",
		"ext":"558",
		"trunk_name":"Cisco",
		"file":"file-20200624051520-61681-fax-test",
		"description":"Just for test"
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
        "_id": "64b800977ec8cb8899ee28a2"
    }
}
```
    </TabItem>

  </Tabs>
