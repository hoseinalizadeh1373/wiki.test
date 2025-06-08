---
sidebar_position: 1
---
# User Add

This service is used to add internal users.

## Parameters
<div class="custom-table">
|       Description       |       Defined Data       |  Sample Data  | Required[**]/Optional[*] |          Parameters         |
|:-----------------------:|:-----------------------:|:-------------:|:----------------------:|:---------------------------:|
|      User Type          |            SIP/IAX2     |       SIP     |            *           |          user_type          |
|     User Status         |             yes/no      |       yes     |            *           |            active           |
|      User Name          |                -        |      User2    |            **          |             name            |
|     Extension Number     |                -        |       999     |            **          |            number           |
|      User CID           |                -        |       999     |            *           |          cid_number         |
|       Password          |                -        |       999     |            **          |            secret           |
|   Call Recording        |             yes/no      |        no     |            *           |         call_record         |
|          -              |             yes/no      |        no     |            *           |      push_notification      |
|   Deny IP List          |                -        | 0.0.0.0/0.0.0.0 |            *           |             deny            |
|   Permit IP List        |                -        | 0.0.0.0/0.0.0.0 |            *           |            permit           |
|   DTMF Standard         |                -        |     rfc2833   |            *           |           dtmfmode          |
|          -              |             yes/no      |        no     |            *           |         canreinvite         |
|          -              |             yes/no      |        no     |            *           |         directmedia         |
|   User Context          |                -        |   main_routing|            *           |           context           |
|          -              |                -        |     dynamic   |            *           |             host            |
|          -              |                -        |       user    |            *           |             type            |
|          -              | yes/no/Force Report & Co-Media |        no     |            *           |             nat             |
|          -              |                -        |       5060    |            *           |             port            |
|          -              |             yes/no      |        no     |            *           |           qualify           |
|          -              |                -        |        1      |            *           |          callgroup          |
|          -              |                -        |        1      |            *           |         pickupgroup         |
|          -              |             yes/no      |        no     |            *           |         callcounter         |
|          -              |             yes/no      |        no     |            *           |          faxdetect          |
|   Call Waiting Limit     |                -        |        -      |            *           |          call_limit         |
|          -              |             yes/no      |        no     |            *           |            trunk            |
|          -              |             yes/no      |        no     |            *           |           transfer          |
|          -              |                -        |        -      |                        |            email            |
|          -              |                -        |       571     |                        |     forward_policy->Busy    |
|          -              |                -        |   09158315762 |                        |  forward_policy->No Answer  |
|          -              |                -        |       570     |                        | forward_policy->UnAvailable |
|          -              |                -        |       2121    |                        |     forward_policy->All     |
</div>


## Sample Invocation


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="usageCode"
  values={[
    {label: 'Example To Use', value: 'usageCode'},
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
            CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/users/add',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>'{
                "user_type":"SIP",
                "active":"yes",
                "name":"User2",
                "number":"99998",
                "cid_number":"999",
                "secret":"999",
                "call_record":"no",
                "push_notification":"no",
                "deny":"0.0.0.0/0.0.0.0",
                "permit":"0.0.0.0/0.0.0.0",
                "dtmfmode":"rfc2833",
                "canreinvite":"no",
                "directmedia":"no",
                "context":"main_routing",
                "host":"dynamic",
                "type":"user",
                "nat":"no",
                "port":"5060",
                "qualify":"no",
                "callgroup":"1",
                "pickupgroup":"1",
                "callcounter":"no",
                "faxdetect":"no",
                "call_limit":"",
                "trunk":"no",
                "transfer":"no",
                "email":"",
                "forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},
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
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>
            <body>
              <script>
                var settings = {
                  "url": "http://192.168.51.20/api/v4/pbx/users/add",
                  "method": "POST",
                  "timeout": 0,
                  "headers": {
                    "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
                    "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
                    "Content-Type": "application/json"
                  },
                  "data": JSON.stringify({
                    "user_type": "SIP",
                    "active": "yes",
                    "name": "User2",
                    "number": "999",
                    "cid_number": "999",
                    "secret": "999",
                    "call_record": "no",
                    "push_notification": "no",
                    "deny": "0.0.0.0/0.0.0.0",
                    "permit": "0.0.0.0/0.0.0.0",
                    "dtmfmode": "rfc2833",
                    "canreinvite": "no",
                    "directmedia": "no",
                    "context": "main_routing",
                    "host": "dynamic",
                    "type": "user",
                    "nat": "no",
                    "port": "5060",
                    "qualify": "no",
                    "callgroup": "1",
                    "pickupgroup": "1",
                    "callcounter": "no",
                    "faxdetect": "no",
                    "call_limit": "",
                    "trunk": "no",
                    "transfer": "no",
                    "email": "",
                    "forward_policy": {
                      "Busy": "571",
                      "No Answer": "09158315762",
                      "UnAvailable": "570",
                      "All": "2121"
                    },
                    "more_options": ""
                  })
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

      <!-- کد Curl -->
      <TabItem value="Curl">
        <details>
          <summary>Show Full Source Code Curl</summary>
          <br/>

          ```bash

          curl --location --request POST 'http://192.168.51.20/api/v4/pbx/users/add' \
          --header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
          --header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
          --header 'Content-Type: application/json' \
          --data-raw '{
            "user_type":"SIP",
            "active":"yes",
            "name":"User2",
            "number":"999",
            "cid_number":"999",
            "secret":"999",
            "call_record":"no",
            "push_notification":"no",
            "deny":"0.0.0.0/0.0.0.0",
            "permit":"0.0.0.0/0.0.0.0",
            "dtmfmode":"rfc2833",
            "canreinvite":"no",
            "directmedia":"no",
            "context":"main_routing",
            "host":"dynamic",
            "type":"user",
            "nat":"no",
            "port":"5060",
            "qualify":"no",
            "callgroup":"1",
            "pickupgroup":"1",
            "callcounter":"no",
            "faxdetect":"no",
            "call_limit":"",
            "trunk":"no",
            "transfer":"no",
            "email":"",
            "forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},
            "more_options":""
          }'

          ```

        </details>
      </TabItem>

    </Tabs>
  </TabItem>

  <!-- تب نمونه خروجی -->
  <TabItem value="outputCode">

      ```shell

      {
        "status": "success",
        "message": "User created successfully",
        "user_id": "999"
      }

      ```
  </TabItem>

</Tabs>
