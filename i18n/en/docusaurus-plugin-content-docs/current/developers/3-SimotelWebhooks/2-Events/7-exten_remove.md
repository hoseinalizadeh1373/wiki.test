---
sidebar_position: 2
---
# ExtenRemoved

When a user is removed from Simotel, the ExtenRemoved event is triggered.


## Event Parameters
<div class="custom-table">

|                         Description                         | Defined Data | Sample Data   |    Parameter    |
|:----------------------------------------------------------:|:------------:|:-------------:|:---------------:|
|                       Event Name                           |      -       |  ExtenRemoved  | **event_name**  |
|                     Extension Number (user for whom the event was generated) |      -       |      559      |   **number**    |
|                       Extension State                      |      -       |  Unavailable  |    **state**    |
</div>

## Sample Output of ExtenRemoved Event



```shell
{
  "event_name": "ExtenRemoved",
  "exten": "77777",
  "state": "Unavailable"
}
```