---
sidebar_position: 2
---
# ExtenAdded

When a new user is defined in Simutel, the ExtenAdded event is created.

## Event Parameters

<div class="custom-table">
|                         Description                         | Defined Data | Sample Data   |    Parameter    |
|:----------------------------------------------------------:|:------------:|:-------------:|:---------------:|
|                       Event Name                           |      -       |   ExtenAdded  | **event_name**  |
|                     Extension Number (user for whom the event was generated) |      -       |      559      |   **exten**     |
|                       Extension State                      |      -       |  Unavailable  |    **state**    |
</div>

## Sample Output of ExtenAdded Event

```shell
{
  "event_name": "ExtenAdded",
  "exten": "77777",
  "state": "Unavailable"
}
```