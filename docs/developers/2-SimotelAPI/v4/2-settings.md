---
sidebar_position: 1

---
# Introduction and Settings

## Simotel API

SA is a collection of APIs that are initiated by sending a request from the web service to Simotel. This service is created using the standard RestAPI format. For example, by sending a two-way call request from the web service to Simotel, the contact center will begin establishing the two-way call once the request is received.

## Simotel API Setup

- **Create an account for the requester.**
- **Define the IPs allowed to send requests.**

### Creating an Account
Go to `Maintenance > API Accounts`. By clicking on ➕, you can create a new user. The parameters in this section are as follows:

- **Authentication**: Simotel uses various methods for user authentication. The most secure method is to use BasicAuth (username and password) along with an API Key (Token).
  
- **Username**: The username for the created user.

- **Password**: The password for the created user.

- **Token**: A string generated for stronger authentication.

- **Enabled**: Allows you to activate or deactivate the user.

- **Request**: Specifies the level of access the user has to the APIs. For example, if a user needs to add a user via the API, the `/pbx/users/add` permission must be enabled.

### Granting Access for IPs
Go to `Maintenance > Settings`. At the bottom of the page, in the Simotel API section, you will see two options:

- **Allow All IPs**: Enabling this option allows all IPs to send requests to Simotel.

- **Allowed IPs**: If you want to allow specific IPs, enter them here and then press Enter.

## Authentication

**Authentication can be done using one of the following three methods:**

- **HTTP Basic Authentication**: The Basic Authentication standard is a common method for authentication in web services. Retrieving access information with this method is relatively easy due to its lower security, so it is recommended to use it at least over SSL. The username and password are placed in the request header in base64 format as shown below.

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng
```

Basic Auth can also be sent in the URL as follows:
```shell
https://username:password@www.example.com
```

- **API Key**: In this method, which is designed to enhance the security of the previous method and is widely used in APIs, a unique key is generated and added to the request header as follows:
 
```shell
X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
```

- **HTTP Basic authentication & API Key**: This method uses a combination of the two methods above.

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng

X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
```


## Sample Header

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng==
X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
Content-Type: application/json
```

- **Authorization**: Basic Authentication validation.  
- **X-APIKEY**: API-key validation.  
- **Content-Type**: The format of the message body. In all requests except download and streaming services, the message body format is `application/json`.  

## Common Response Messages  

The types of responses received in SA services are as follows:  

<div class="custom-table">  
|                                              Description                                             | success |                                                                                        message                                                                                       |           header           |  
|:------------------------------------------------------------------------------------------------:|:-------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------:|  
|                      The service was successfully invoked, and the operation was executed correctly.                      |    1    |                                                                                           -                                                                                          |           Ok-200           |  
| The service was successfully invoked, but an error occurred during the operation. The corresponding error is mentioned in the message field. |    0    | "corresponding error" such as: This number already exists \Field 'field_name':value is missing \Requested operation failed \This trunk already exists \this queue already exists     |           Ok-200           |  
|                                  The requested content format is invalid.                                  |    0    |                                                                                Unable to parse content                                                                               |       Bad Request-400      |  
|                               No authentication information has been provided.                               |    0    |                                                                            BasicAuth or ApiKey is missing                                                                            |      Unauthorized-401      |  
|                              Authentication information is incomplete or invalid.                               |    0    |                                                                            BasicAuth or ApiKey is invalid                                                                            |      Unauthorized-401      |  
|                             The client is not authorized to access this service.                             |    0    |                                                                                 "....";Access denied                                                                                 |        Forbidden-403       |  
|                          The client's IP is not authorized to access this web service.                          |    0    |                                                                                  IP is not permitted                                                                                 |        Forbidden-403       |  
|                   Incorrect addressing, resulting in a 404 error from Apache.                  |    -    |                                                                                           -                                                                                          |        Not Found-404       |  
|                           The requested file does not exist (during file download).                          |    -    |                                                                                           -                                                                                          |        Not Found-404       |  
|                     The requested method is not allowed for this service. POST, PUT, DELETE, GET                    |    0    |                                                                                  Method not allowed                                                                                  |   Method Not Allowed-405   |  
|                             The `Content-Type` value in the header is not allowed.                            |    0    |                                                                                Unsupported Media Type                                                                                | Unsupported Media Type-415 |  
|                                  The invoked service does not exist.                                  |    0    |                                                                           Requested service does not exist                                                                           |     Not Implemented-501    |  

</div>  

## Pagination Parameters  

These parameters define how the retrieved information from the call center is displayed. Since these parameters are available in most search-related APIs, they are discussed here in detail once.  

### List of APIs Supporting These Parameters  


۱. **pbx/faxes/**

۲. **voicemails/inbox/**

۳. **reports/quick/**

۴. **reports/cdrreports/queue/**

۵. **reports/queue/**

۶. **reports/queue_details/**

۷. **reports/agent/**

۸. **reports/poll/**

۹. **autodialer/campaigns/**

۱۰. **autodialer/contacts/**

۱۱. **autodialer/groups/**

۱۲. **autodialer/reports/**

### **start**  
Specifies which record (numeric value) from the data retrieved by the call center should begin to be sent to the web service.  

### **count**  
Determines how many records from the data retrieved by the call center should be sent to the web service.  

### **sorting**  
Indicates how the data should be sorted based on a specific column and whether the sorting should be ascending or descending (1 for ascending and -1 for descending).  

### **Example**  
Retrieving group information such that:  
1. Data sent to the web service starts from the 4th record retrieved by the call center.  
2. Only 2 records from the retrieved data are returned.  
3. The returned report is sorted by date in ascending order.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'Example Code Sended from  autodialer/groups/', value: 'usageCode'},
      {label: 'Example Output', value: 'outputCode'},
    ]}>

    <TabItem value="usageCode">
      <Tabs
        defaultValue="Curl"
        values={[
          {label: 'Curl', value: 'Curl'},
        ]}>


        <TabItem value="Curl">
          <details>
            <summary> Show Full Source Code  Curl</summary>
            <br/>

```shell
{
    "alike":"true",
    "conditions":{"name":"","description":""},
    "pagination":{"start":4,"count":2,"sorting":{"date":1}}
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
    "data": {
        "pagination": {
            "start": 4,
            "count": 2,
            "sorting": {
                "date": 1
            },
            "total": 17
        },
        "data": [
            {
                "_id": "5cab4ed776c2c0747f3a7f7b",
                "name": "nasim-contact-update-980119",
                "description": "",
                "count": 109,
                "date": "1398-01-19 18:08:31"
            },
            {
                "_id": "5cac595276c2c011a94f4b43",
                "name": "nasimcontact-step2",
                "description": "",
                "count": 101,
                "date": "1398-01-20 13:05:30"
            }
        ]
    }
}

```
    </TabItem>

  </Tabs>


## **Required and Logical Parameters**  

In the future, you may encounter tables with a column named **Required[**] / Logical[*]**, where the values specify the following:  

1. **Required Parameters**: These parameters **must** be included in the web service request sent to Simotel. If they are not provided, Simotel will return an error in the response.  

2. **Logical Parameters**: These are parameters whose absence in the request does not cause a system error. However, it is logical to include them in the request based on its context and purpose.  