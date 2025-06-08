---
sidebar_position: 1
---
# Settings

To configure the API components, simply click on the ⚙️ button to access the component settings and set the `API address` to your web service URL. From this point on, whenever a request is directed to this component in DialPlan, the call information will be quickly sent to your web service. The API service will then wait for a response from the web service for 1 second. If no response is received within that time, it will terminate with a timeout error. The data sent and received in the components vary. In fact, each API component has a specific task, and based on its role, the type of data sent and received differs from others.

![exten-api](/img/api/exten-api.png)
