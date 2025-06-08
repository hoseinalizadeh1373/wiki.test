---

---
# Smart API

:::tip Recommendation
It is recommended to review [this](../SimotelWebhooks/DialplanApiComponents/smart_api) before reading this section.
:::

**Scenario:** Suppose you need to receive a number from the user. If the number entered is 1, the call should be routed to path A, and if it is 2, it should be routed to path B.

To implement the above scenario, you will need two SmartApi components. Let's name the first one `s1` and the second one `s2`. In the `API address` field of both components, enter the address of the web service. 

In component `s1`, create a route with the identifier `go-s2` and connect its output to component `s2`. In component `s2`, create two routes with the identifiers `go-a` and `go-b`, and connect them to paths A (Sales Queue) and B (Support Queue) as per the scenario mentioned.

To view the scenario, click on the image below:

<a href='https://dialplan.mysup.ir/live/plan/fdckb8z6kula9q4o3jyug872z3otnhgmdco6w0gzawg7cte78a' target='_blank'><img src='https://dialplan.mysup.ir/live/thumb/fdckb8z6kula9q4o3jyug872z3otnhgmdco6w0gzawg7cte78a/plan.png' /></a>

Now, suppose a call enters component `s1`. The web service will be called with the following values:

```shell
{
  "src": "09155441",
  "dst": "789",
  "app_name": "s1",
  "data": ""
}
```

The web service will request the execution of the following functions and will require user input.

```shell
{
  "ok": "1",
  "commands": "PlayAnnouncement('welcome-file');GetData('enter-data-file', 10, 1);Exit('go-s2')"
}
```

By executing the above instructions, first the welcome audio file will be played, then the user will be prompted to enter a number, and after that, the call will be transferred from the **go-s2** path to the **s2** component.

In the **s2** component, a request similar to the one in **s1** will be sent to the server, but with two main differences:  
1. The component name changes so that the web service can distinguish the source of the request.  
2. The `data` field will contain the value entered by the user in the previous step.

```shell
{
  "src": "09155441",
  "dst": "789",
  "app_name": "s2",
  "data": "2"
}
```

The web service, after receiving the number entered by the user in response, determines the appropriate path for their exit.

```shell
{
  "ok": "1",
  "commands": "Exit('go-b');"
}
```