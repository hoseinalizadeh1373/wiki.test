---

---
# Exten API

:::tip Recommendation  
It is recommended to review [this link](../SimotelWebhooks/DialplanApiComponents/exten_api) before studying this content.  
:::


Assume that when a customer contacts your company, if the customer has had a previous interaction with one of your employees within the last 24 hours, the system should route the current call directly to the same employee's phone.

To implement this scenario, you can use the Exten API component. When a call enters the system, it is directly routed to the Exten API. At this point, the caller's information is sent to your web service, which includes: 



```shell
{
  "src": "09155441",
  "dst": "31041000",
  "data": "",
  "unique_id": "",
  "app_name": "Extension API"
}
```

In this example, the source number 09155441 has contacted the company. Now, using the data received from the `New State` event, we need to determine whether this number has been answered by an extension within the last 24 hours. For example, in this scenario, extension 200 answered the call from this number yesterday. Therefore, the web service needs to send the following output to the Exten API in response.


```shell
{
  "ok": "1",
  "extension": "200"
}
```

At this stage, the call is connected to extension 200, and the phone of extension 200 starts ringing. For more information about the `New State` event, please refer to [here](../SimotelWebhooks/Events/new_state).

**Implemented Scenario in Dialplan**

<a href='https://dialplan.mysup.ir/live/plan/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f/plan.png' /></a>