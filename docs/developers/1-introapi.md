---
slug: /developers
---

# Developers

### Introduction

Simotel Contact Center offers exceptional features for integration with other software (such as CRMs, accounting software, e-commerce systems, etc.) through the `Simotel API` and `Simotel Webhooks`.

The Simotel integration tools enable bidirectional communication with Simotel. Using the `Simotel API`, you can send requests to Simotel for processing and execution (such as creating a new user or starting a two-way call). With `Simotel Webhooks`, you can provide your server address to Simotel so that it sends event information via an API request when certain events occur (such as an incoming call event).

![exten-api](/img/api/simotel-integrations.png)

### Simotel API
With the `Simotel API`, you can perform and control many operations remotely on the Simotel Contact Center by sending API requests from your software. For example, you can create a new extension, generate reports, or start a two-way call. The `Simotel API` gives you the power to execute commands on the Simotel contact center using any programming language.



```php
    $userData = ['exten'=>'100'];
    $simotel = new Simotel;
    $simotel->connect('pbx/users/create',$userData);
```

### Simotel Webhooks

Simotel Webhooks are a set of requests sent from Simotel to the addresses you specify. These requests are triggered by specific events or through certain components in the Simotel contact flow.
Simotel Webhooks are divided into two categories: **Events** (or occurrences) and **Contact Flow Components**.


```php
    $event = $request['event_name'];
    if($event == 'Cdr'){
        echo $request['billsec'];
    }
```

In fact, when using Simotel Webhooks, an HTTP request is sent from Simotel to your specified application, delivering the required data to you.

### Useful Links

- The PHP package for connecting to Simotel, along with an example, can be downloaded from **[here](https://github.com/simotel/simotel-php-connect)**.

- The Laravel package for Simotel, providing further insights into the calling methods, can be downloaded from **[here](https://github.com/simotel/simotel-laravel-connect)**.

- The Postman file for better understanding of the API functionality can be downloaded from **[here](https://dl.mysup.ir/postmansample/Simotel_V3.edition_14.postman_collection.json)** (v3_e14).




<!-- <a href="pathname://../../file/Simotel_V3.edition_12.postman_collection.json" target="_blank">اینجا</a> -->