---
sidebar_position: 1
---
# Introduction

The Bulk Calling module in Simotel allows management via API without human intervention. These APIs are designed across three levels: 
1. **Loading information**,
2. **Campaign creation**, 
3. **Reporting**.

In the following sections, we will thoroughly explore each of these APIs.

:::tip Note
Until the Bulk Calling module is added to the Call Center, it is not possible to use its APIs.
:::

## Required and Logical Parameters

In future tables, you will encounter a column called `Required[**]/Logical[*]`, which specifies the following:

1. **Required Parameters**: These values must be included in the web service request to Simotel. If not provided, Simotel will return an error in the response.

2. **Logical Parameters**: These values are not mandatory in the request, but it is logical to include them based on the context of the request. Their absence will not result in a system error.