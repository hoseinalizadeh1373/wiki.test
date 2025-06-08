# Auto Spit Detect

Another method for identifying storm calls is automatic detection. In this approach, an algorithm uses the data provided below to dynamically identify storm call area codes.

**Explanation with Example**:

This method selects n digits from the left of incoming phone numbers, which equals the area code p. If within a time period of t minutes, the number of repetitions of phone numbers with this area code reaches c, that area code is considered a storm call. If the condition is not met, the call is considered a normal one (it is understood that the system reviews past calls for this method).

:::tip Note
You may consider the area code length as 2 digits, in which case calls from mobile numbers starting with 09 could quickly be considered storm calls. To prevent this, you can exclude certain area codes from the calculations so they are not treated as storm calls.
:::

## Auto Spit Detect Parameters

- **Pre-Code Length**: The length of the common area code in incoming calls.

- **Call Count**: The number of repeated calls with the same area code.

- **Time Slice (min)**: The time period (in minutes) for counting the calls.

- **Excepted Pre-Codes**: Area codes that are excluded from this pattern. Numbers starting with these area codes will be treated as normal calls, and calculations will not be performed on them. If there are multiple area codes, they should be separated by a comma. Example: 09,021.

- **Enabled**: Enable or disable automatic storm calls.

- **Announcement**: The audio message for the storm call.

- **Comment**: Optional description.