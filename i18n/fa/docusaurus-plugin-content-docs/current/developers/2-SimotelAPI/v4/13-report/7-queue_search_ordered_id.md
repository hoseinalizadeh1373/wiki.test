---
sidebar_label: "بازیابی گزارشات ترتیبی صف"
title: "بازیابی گزارشات ترتیبی صف"
---


# Queue Ordered

این سرویس برای بازیابی اطلاعات جدول جستجوی صف از ابتدا تا انتها کاربرد دارد، پارامتر ورودی این سرویس id رکوردی است که می‌خواهید اطلاعات بعد از آن بازیابی نمایید، خروجی سرویس رکوردهای جدول بصورت ترتیبی می‌باشد.(در هر فراخوانی 20 رکورد به ترتیب بازگردانده می‌شود).

:::tip نکته
درصورتی که می‌خواهید اطلاعات جدول را از ابتدا بازیابی کنید مقدار پارامتر id_ برابر با خالی قرار دهید.
:::

:::tip نکته
پارامتر last_id در جواب سمت شما برگردانده می‌شود و id آخرین رکورد بازیابی شده را به شما می‌دهد، پس برای بازیابی اطلاعات بعدی (به ترتیب) این شناسه را به عنوان ورودی دوباره به سرویس بدهید.
:::


## پارامتر‌ها
<div class="custom-table">
| توضیحات                                                         | داده های تعریف شده | داده های نمونه           | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|-----------------------------------------------------------------|--------------------|--------------------------|-------------------------------|-----------|
| شناسه یکتای که می‌خواهیم اطلاعات بعد از آن به ترتیب بازیابی شوند(last_id) |                    | 5ddb9e925171cd0429088bad |                               | id_       |
</div>

## نمونه فراخوانی


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'نمونه کد استفاده', value: 'usageCode'},
      {label: 'نمونه خروجی', value: 'outputCode'},
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
            <summary>نمایش کامل کد PHP</summary>
            <br/>
```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/queue/ordered/id',
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
            <summary>نمایش کامل کد JS</summary>
            <br/>

```js
	<html>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			</head>
			<body>
				<script>
					var settings = {
					  "url": "http://192.168.51.20/api/v4/reports/queue/ordered/id",
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
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/queue/ordered/id' \
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

```bash
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
        "last_id": "5ec62d435171cd23078c2814",
        "data": [
            {
                "_id": "5ec4d6825171cd23078c256f",
                "endtime": "1399-02-31 16:04:34",
                "src": "05131703324",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589974443075"
                    }
                },
                "dst": "561",
                "disposition": "ANSWERED",
                "agent_wait": 9,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589974474285"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589974433284"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589974433346"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589974443075"
                        }
                    }
                },
                "caller_wait": 9,
                "duration": 40,
                "starttime": "1399-02-31 16:03:53",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589974433346"
                    }
                },
                "billsec": 31,
                "wait": 9,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:31",
                "wait_hhmmss": "00:00:09",
                "duration_hhmmss": "00:00:40"
            },
            {
                "_id": "5ec4de1f5171cd23078c258b",
                "endtime": "1399-02-31 16:37:03",
                "src": "09159148089",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589976384593"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 0,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589976423968"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589976377674"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589976384589"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589976384593"
                        }
                    }
                },
                "caller_wait": 6,
                "duration": 45,
                "starttime": "1399-02-31 16:36:17",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589976384589"
                    }
                },
                "billsec": 39,
                "wait": 6,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:39",
                "wait_hhmmss": "00:00:06",
                "duration_hhmmss": "00:00:45"
            },
            {
                "_id": "5ec4df505171cd23078c2593",
                "endtime": "1399-02-31 16:42:08",
                "src": "0515153",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589976544479"
                    }
                },
                "dst": "553",
                "disposition": "ANSWERED",
                "agent_wait": 4,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589976728547"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589976539814"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589976539873"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589976544479"
                        }
                    }
                },
                "caller_wait": 4,
                "queue_status": "CONTINUE",
                "duration": 188,
                "starttime": "1399-02-31 16:38:59",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589976539873"
                    }
                },
                "billsec": 184,
                "wait": 4,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:03:04",
                "wait_hhmmss": "00:00:04",
                "duration_hhmmss": "00:03:08"
            },
            {
                "_id": "5ec4e19b5171cd23078c25a3",
                "endtime": "1399-02-31 16:51:55",
                "src": "05136040436",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589977242102"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 0,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589977315557"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589977236755"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589977242084"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589977242102"
                        }
                    }
                },
                "caller_wait": 5,
                "queue_status": "CONTINUE",
                "duration": 78,
                "starttime": "1399-02-31 16:50:36",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589977242084"
                    }
                },
                "billsec": 73,
                "wait": 5,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:01:13",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:01:18"
            },
            {
                "_id": "5ec4e2145171cd23078c25a6",
                "endtime": "1399-02-31 16:53:56",
                "src": "05131703324",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589977304845"
                    }
                },
                "dst": "553",
                "disposition": "ANSWERED",
                "agent_wait": 6,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589977436200"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589977298599"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589977298635"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589977304845"
                        }
                    }
                },
                "caller_wait": 6,
                "queue_status": "CONTINUE",
                "duration": 137,
                "starttime": "1399-02-31 16:51:38",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589977298635"
                    }
                },
                "billsec": 131,
                "wait": 6,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:02:11",
                "wait_hhmmss": "00:00:06",
                "duration_hhmmss": "00:02:17"
            },
            {
                "_id": "5ec4e5695171cd23078c25b5",
                "endtime": "1399-02-31 17:08:09",
                "src": "02188026871",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589978245502"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 0,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589978289073"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589978238677"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589978245490"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589978245502"
                        }
                    }
                },
                "caller_wait": 6,
                "queue_status": "CONTINUE",
                "duration": 49,
                "starttime": "1399-02-31 17:07:18",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589978245490"
                    }
                },
                "billsec": 43,
                "wait": 6,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:43",
                "wait_hhmmss": "00:00:06",
                "duration_hhmmss": "00:00:49"
            },
            {
                "_id": "5ec4ea445171cd23078c25c3",
                "endtime": "1399-02-31 17:28:52",
                "src": "02186025679",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589979500410"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 2,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589979532297"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589979498083"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589979498114"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589979500410"
                        }
                    }
                },
                "caller_wait": 2,
                "queue_status": "CONTINUE",
                "duration": 33,
                "starttime": "1399-02-31 17:28:18",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589979498114"
                    }
                },
                "billsec": 31,
                "wait": 2,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:31",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:00:33"
            },
            {
                "_id": "5ec4ed205171cd23078c25da",
                "endtime": "1399-02-31 17:41:04",
                "src": "05137641871",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589980219834"
                    }
                },
                "dst": "561",
                "disposition": "ANSWERED",
                "agent_wait": 5,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589980264876"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589980073475"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589980213944"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589980219834"
                        }
                    }
                },
                "caller_wait": 146,
                "duration": 191,
                "starttime": "1399-02-31 17:37:53",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589980213944"
                    }
                },
                "billsec": 45,
                "wait": 146,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:45",
                "wait_hhmmss": "00:02:26",
                "duration_hhmmss": "00:03:11"
            },
            {
                "_id": "5ec4f9205171cd23078c260a",
                "endtime": "1399-02-31 18:32:16",
                "src": "05131703324",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589983336425"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589983296074"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589983296093"
                        }
                    }
                },
                "dst": "310410",
                "disposition": "MISSED",
                "agent_wait": 0,
                "qnum": "910",
                "caller_wait": 0,
                "duration": 0,
                "starttime": "1399-02-31 18:31:36",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589983296093"
                    }
                },
                "billsec": 0,
                "wait": 0,
                "MISSED": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00",
                "duration_hhmmss": "00:00:00"
            },
            {
                "_id": "5ec4fa265171cd23078c2612",
                "endtime": "1399-02-31 18:36:38",
                "src": "05131559",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589983568766"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 0,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589983598697"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589983563016"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589983568758"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589983568766"
                        }
                    }
                },
                "caller_wait": 5,
                "duration": 34,
                "starttime": "1399-02-31 18:36:03",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589983568758"
                    }
                },
                "billsec": 29,
                "wait": 5,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:29",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:00:34"
            },
            {
                "_id": "5ec4fb625171cd23078c261e",
                "endtime": "1399-02-31 18:41:54",
                "src": "05131703324",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589983896501"
                    }
                },
                "dst": "553",
                "disposition": "ANSWERED",
                "agent_wait": 6,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589983914738"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589983889802"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589983889835"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589983896501"
                        }
                    }
                },
                "caller_wait": 6,
                "duration": 24,
                "starttime": "1399-02-31 18:41:29",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589983889835"
                    }
                },
                "billsec": 18,
                "wait": 6,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:18",
                "wait_hhmmss": "00:00:06",
                "duration_hhmmss": "00:00:24"
            },
            {
                "_id": "5ec5021c5171cd23078c2637",
                "endtime": "1399-02-31 19:10:36",
                "src": "05131703324",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589985262428"
                    }
                },
                "dst": "553",
                "disposition": "ANSWERED",
                "agent_wait": 2,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589985636906"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589985259800"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589985259839"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589985262428"
                        }
                    }
                },
                "caller_wait": 2,
                "queue_status": "CONTINUE",
                "duration": 376,
                "starttime": "1399-02-31 19:04:19",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589985259839"
                    }
                },
                "billsec": 374,
                "wait": 2,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:06:14",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:06:16"
            },
            {
                "_id": "5ec5078c5171cd23078c264e",
                "endtime": "1399-02-31 19:33:48",
                "src": "05131703324",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589986974333"
                    }
                },
                "dst": "553",
                "disposition": "ANSWERED",
                "agent_wait": 1,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589987028251"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589986972425"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589986972472"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589986974333"
                        }
                    }
                },
                "caller_wait": 1,
                "duration": 54,
                "starttime": "1399-02-31 19:32:52",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589986972472"
                    }
                },
                "billsec": 53,
                "wait": 1,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:53",
                "wait_hhmmss": "00:00:01",
                "duration_hhmmss": "00:00:54"
            },
            {
                "_id": "5ec50a635171cd23078c2654",
                "endtime": "1399-02-31 19:45:55",
                "src": "05131703324",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589987714110"
                    }
                },
                "dst": "553",
                "disposition": "ANSWERED",
                "agent_wait": 2,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589987755987"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589987711473"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589987711511"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589987714110"
                        }
                    }
                },
                "caller_wait": 2,
                "queue_status": "CONTINUE",
                "duration": 43,
                "starttime": "1399-02-31 19:45:11",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589987711511"
                    }
                },
                "billsec": 41,
                "wait": 2,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:41",
                "wait_hhmmss": "00:00:02",
                "duration_hhmmss": "00:00:43"
            },
            {
                "_id": "5ec512315171cd23078c266a",
                "endtime": "1399-02-31 20:19:13",
                "src": "09171750052",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1589989703003"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 2,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1589989753347"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1589989687950"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1589989700842"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1589989703003"
                        }
                    }
                },
                "caller_wait": 15,
                "queue_status": "CONTINUE",
                "duration": 65,
                "starttime": "1399-02-31 20:18:07",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1589989700842"
                    }
                },
                "billsec": 50,
                "wait": 15,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:50",
                "wait_hhmmss": "00:00:15",
                "duration_hhmmss": "00:01:05"
            },
            {
                "_id": "5ec610fa5171cd23078c2799",
                "endtime": "1399-03-01 14:26:18",
                "src": "05137133895",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1590054966139"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 0,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1590054978101"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1590054957667"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1590054966134"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1590054966139"
                        }
                    }
                },
                "caller_wait": 8,
                "duration": 19,
                "starttime": "1399-03-01 14:25:57",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1590054966134"
                    }
                },
                "billsec": 11,
                "wait": 8,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:11",
                "wait_hhmmss": "00:00:08",
                "duration_hhmmss": "00:00:19"
            },
            {
                "_id": "5ec626305171cd23078c27e9",
                "endtime": "1399-03-01 15:56:48",
                "src": "09170046196",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1590060408596"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1590060391294"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1590060391331"
                        }
                    }
                },
                "dst": "31041",
                "disposition": "MISSED",
                "agent_wait": 0,
                "qnum": "910",
                "caller_wait": 0,
                "duration": 0,
                "starttime": "1399-03-01 15:56:31",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1590060391331"
                    }
                },
                "billsec": 0,
                "wait": 0,
                "MISSED": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:00",
                "duration_hhmmss": "00:00:00"
            },
            {
                "_id": "5ec62a825171cd23078c27fd",
                "endtime": "1399-03-01 16:15:14",
                "src": "05136040436",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1590061457432"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 5,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1590061514178"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1590061452046"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1590061452075"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1590061457432"
                        }
                    }
                },
                "caller_wait": 5,
                "duration": 61,
                "starttime": "1399-03-01 16:14:12",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1590061452075"
                    }
                },
                "billsec": 56,
                "wait": 5,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:56",
                "wait_hhmmss": "00:00:05",
                "duration_hhmmss": "00:01:01"
            },
            {
                "_id": "5ec62b7c5171cd23078c2804",
                "endtime": "1399-03-01 16:19:24",
                "src": "03136204753",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1590061649143"
                    }
                },
                "dst": "555",
                "disposition": "ANSWERED",
                "agent_wait": 2,
                "qnum": "900",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1590061764967"
                        }
                    },
                    "start_time": {
                        "$date": {
                            "$numberLong": "1590061634123"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1590061647023"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1590061649143"
                        }
                    }
                },
                "caller_wait": 15,
                "duration": 130,
                "starttime": "1399-03-01 16:17:14",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1590061647023"
                    }
                },
                "billsec": 115,
                "wait": 15,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:01:55",
                "wait_hhmmss": "00:00:15",
                "duration_hhmmss": "00:02:10"
            },
            {
                "_id": "5ec62d435171cd23078c2814",
                "endtime": "1399-03-01 16:26:59",
                "src": "01191006066",
                "answeredtime": {
                    "$date": {
                        "$numberLong": "1590062173537"
                    }
                },
                "dst": "561",
                "disposition": "ANSWERED",
                "agent_wait": 7,
                "qnum": "910",
                "data": {
                    "end_time": {
                        "$date": {
                            "$numberLong": "1590062219726"
                        }
                    },
                    "queue_status": "CONTINUE",
                    "start_time": {
                        "$date": {
                            "$numberLong": "1590062071966"
                        }
                    },
                    "ring_time": {
                        "$date": {
                            "$numberLong": "1590062165592"
                        }
                    },
                    "answered_time": {
                        "$date": {
                            "$numberLong": "1590062173537"
                        }
                    }
                },
                "caller_wait": 101,
                "queue_status": "CONTINUE",
                "duration": 147,
                "starttime": "1399-03-01 16:24:31",
                "ringtime": {
                    "$date": {
                        "$numberLong": "1590062165592"
                    }
                },
                "billsec": 46,
                "wait": 101,
                "ANSWERED": 1,
                "billsec_hhmmss": "00:00:46",
                "wait_hhmmss": "00:01:41",
                "duration_hhmmss": "00:02:27"
            }
        ]
    }
}
```
    </TabItem>

  </Tabs>
