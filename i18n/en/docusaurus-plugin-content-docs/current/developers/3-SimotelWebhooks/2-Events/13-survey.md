---
---
# Survey


When a participant submits their feedback in the poll component, the **Survey** event is triggered.


## Event Parameters

<div class="custom-table">

|      Description      | Defined Data   |       Sample Data         |  Parameters  |
|:---------------------:|:--------------:|:--------------------------:|:-----------:|
|     Event Name        |         -       |           Survey           |    **event**   |
|  Unique Call ID       |         -       |       1610178448.217       |   **cuid**    |
|     Source Number     |         -       |             991            |    **src**    |
|     Destination Number|         -       |             993            |    **dst**    |
|      Queue Number     |         -       |             902            |   **queue**   |
|    Survey Date        |         -       | 2021-01-09 07:47:45.483185 |    **date**    |
|   Rating Given        |         -       |              5             |    **point**   |
|    Survey Label       |         -       |          MySurvey          |    **label**   |

</div>


## Sample Output of Survey Event


```shell
{
    'event': 'Survey',
    'unique_id': '1610178448.217',
    'src': '991',
    'dst': '993',
    'queue': '902',
    'date': '2021-01-09 07:47:45.483185',
    'point': 5,
    'label': 'MySurvey'
}

```