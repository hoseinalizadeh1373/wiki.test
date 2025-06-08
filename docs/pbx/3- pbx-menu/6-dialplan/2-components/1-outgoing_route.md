# Outgoing Route

## Purpose

Calls originating within the Call Center or from its internal components (such as IP phones) are considered outgoing calls and are forwarded to the Outgoing Route component. Calls are routed based on the context of the caller (e.g., the internal context set on the phone). In other words, the caller's context should be specified in the component's settings.

In the Outgoing Route, appropriate routing rules are implemented for internal calls, city calls, and others.

## Component Parameters

- **Context**: The context of the caller.

- **Check FeatureCode**: Option to use special codes. When enabled, the special code takes precedence over all defined patterns in the component.

- **Check SpeedDial**: Option to use speed dialing. When enabled, speed dial rules take priority over the patterns defined in the component. For example, if a number is dialed that has a speed dial defined, the number will first be converted to its reference number in SpeedDial, and then the patterns for the new number will be checked.

## Routing Parameters

- **Pattern**: The outgoing pattern.

**Using patterns in OutgoingRoute is mandatory. If you are unfamiliar with pattern syntax, please refer to the section on **[Pattern Matching Basics](/pbx/advance-settings/matchpattern)**.**