---
sidebar_label: "مثال کاربردی"
title: "مثال کاربردی"
---



# مثال‌ کاربردی

**مثال: کمپبنی ایجاد کنید که**


۱- فایل صوتی Hello_World برای مخاطبان پخش شود.

۲- ارسال تماس‌ها بر روی ترانک autodialer صورت گیرد.

۳- از تاریخ ۱۴۰۰/۰۴/۱۹ تا تاریخ ۱۴۰۰/۰۴/۲۳ شروع به‌ ارسال تماس‌ انبوه بکند.

۴- با شماره‌های ۰۵۱۳۱۰۴۱۵۷۰ و ۰۲۱۹۱۰۹۰۰۰ تماس گرفته شود.

۵- درصورت پاسخ ندادن مخاطب دوباره با او تماس گرفته شود، فاصله بین دو تماس ۱۰ دقیقه باشد.


**۱:**
برای به دست آوردن شناسه‌یکتای فایل صوتی از سرویس [announcement search](/fa/developers/Autodialer_API/announcement/announcement_search) استفاده می‌کنیم، نمونه درخواست  HTTP به شرح زیر می‌باشد

<!--  -->
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
        defaultValue="Curl"
        values={[
          {label: 'Curl', value: 'Curl'},
        ]}>

        <TabItem value="Curl">
          <details>
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```shell

POST /api/v4/autodialer/announcements/search HTTP/1.1
Host: 192.168.51.20
X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG
Authorization: Basic c2FkcjpTYWRyQDEyMw==
Content-Type: application/json
Content-Length: 66

{
    "alike":"true",
    "conditions":{"name":"Hello_World"}
}

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
    "data": [
        {
            "_id": "6045d7bd095d846433440144",
            "filename": "file-20210308075228-82244-Hello_World.wav",
            "name": "Hello_World",
            "description": "",
            "date": "1399-12-18 11:22:29"
        },
    ]
}

```
    </TabItem>

  </Tabs>


<!--  -->
۲: برای یافتن شناسه‌یکتای ترانک از سرویس [trunk manager search](/developers/Autodialer_API/trunk_manager/trunk_manager_search) استفاده می‌کنیم، نمونه درخواست HTTP آن به شرح زیر می‌باشد

<!--  -->


  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'نمونه کد استفاده', value: 'usageCode'},
      {label: 'نمونه خروجی', value: 'outputCode'},
    ]}>

    <!-- تب نمونه کد استفاده -->
    <TabItem value="usageCode">
      <Tabs
        defaultValue="Curl"
        values={[

          {label: 'Curl', value: 'Curl'},
        ]}>
        <TabItem value="Curl">
          <details>
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```shell

POST /api/v4/autodialer/trunks HTTP/1.1
Host: 192.168.51.20
X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG
Authorization: Basic c2FkcjpTYWRyQDEyMw==
Content-Type: application/json
Content-Length: 66

{
    "alike":"true",
    "conditions":{"title":"autodialer"}
}

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
    "data": [
        {
            "_id": "5ec63107ce4f6d12c43e250f",
            "title": "autodialer",
            "trunk_id": {
                "$oid": "5f19760ace4f6d16dd2e3e0c"
            },
            "status": "active",
            "active_times": {
                "1": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19"
                ],
                "2": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19"
                ],
                "3": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17"
                ],
                "4": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19"
                ],
                "6": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18"
                ],
                "7": [
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17"
                ]
            },
            "capacity": "5",
            "dial_interval": "1",
            "wait_cache_length": "100",
            "date": "1399-03-01 12:13:03",
            "current_capacity": 0,
            "current_wait_cache_length": 0
        }
    ]
}

```
    </TabItem>

  </Tabs>


<!--  -->




۳،۴،۵: درنهایت نیز با ساخت کمپینی با شرایط ذکر شده ارسال تماس انبوه در زمان مشخص شده انجام می‌شود ([campaign add](/developers/Autodialer_API/campaign/campaign_add))، نمونه درخواست HTTP به‌شرح زیر می‌باشد


<!--  -->
  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'نمونه کد استفاده', value: 'usageCode'},
      {label: 'نمونه خروجی', value: 'outputCode'},
    ]}>

    <!-- تب نمونه کد استفاده -->
    <TabItem value="usageCode">
      <Tabs
        defaultValue="Curl"
        values={[
          {label: 'Curl', value: 'Curl'},
        ]}>



        <TabItem value="Curl">
          <details>
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```shell

POST /api/v4/autodialer/campaigns/add HTTP/1.1
Host: 192.168.51.20
X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG
Authorization: Basic c2FkcjpTYWRyQDEyMw==
Content-Type: application/json
Content-Length: 379

{
    "name":"camptest",
    "trunk_manager_id":"5ec63107ce4f6d12c43e250f",
    "interface_context":"",
    "interface_text":"",
    "numbers":["05131041570","0219109000"],
    "groups":[""],
    "try_interval":"600",
    "try":"2",
    "start":"2021-07-10 00:00",
    "end":"2021-07-14 00:00",
    "announcement":"6045d7bd095d846433440144",
    "description":""

}

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
        "_id": "60e03a8be9beaa54e563cff3"
    }
}

```
    </TabItem>

  </Tabs>
