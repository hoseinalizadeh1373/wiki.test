# Queue Components

In this section, we will examine the components related to queues. Before introducing the components, it's important to familiarize ourselves with a few basic concepts.

## Call Status in Queue
Each call that enters the queue will have one of the following four statuses:

1. **Answered**: The call in the queue is answered by an operator.
2. **Missed**: The call enters the queue, and the operator's phone rings, but the operator does not answer the call.
3. **Abandoned**: The call enters the queue, but before the operator's phone rings, the caller hangs up. This happens when the caller is waiting in the queue but decides to end the call due to long waiting times.
4. **Pickup**: The operator's phone starts ringing, but since there is no operator available at the desk, another colleague answers the call using a feature code.

## Queue Metrics

Each of the components introduced in this section represents a specific metric. To understand these metrics, let's first look at how they are calculated and the formulas used.

```shell
Abandoned Call Rate (ACR)

1 ACR = (Number of Abandoned Calls / Total Answered Calls) * 100
--------------------------------------------------------------

Missed Call Rate (MCR)

2 MCR = (Number of Missed Calls / Total Answered Calls) * 100
--------------------------------------------------------------

Pickup Call Rate (PCR)

3 PCR = (Number of Pickup Calls / Total Answered Calls) * 100
--------------------------------------------------------------

Call Answer Rate (CAR)

1,2,3 => 4 CAR = 100 - ACR - MCR - PCR
--------------------------------------------------------------

Average Handling Time (AHT)

5 AHT = Total Answered Calls in Queue / Total Handling Time of Calls in Queue
--------------------------------------------------------------

Average Speed Answer (ASA)

6 ASA = Total Answered Calls in Queue / Total Wait Time of Answered Calls in Queue
--------------------------------------------------------------

Service Level (SL)

7 SL = Total Answered Calls / Total Calls Answered within a Defined Time Interval
```

## Components

### Avg. Handling Time

**This component shows the average handling time of calls in the queue. Its parameters include:**

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies the queues to be analyzed.

### Avg. Speed Answer

**This component shows the average time it takes to answer calls in the queue. Its parameters include:**

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies the queues to be analyzed.

### Service Level

**Service Level is one of the key metrics used to assess queue performance. This metric defines the maximum acceptable response time, and the percentage of calls answered within that defined time. The parameters for this metric include:**

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies the queues to be analyzed.
- **Answered Within**: Specifies the maximum acceptable response time for answering the call.

### Queue Call Rates

**This component includes a collection of queue metrics, including ACR, CAR, and MCR. The parameters for this component include:**

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies the queues to be analyzed.

### Queue Statistics

**This component provides a report of the number of calls (Answered, Missed, Abandoned) in the queue. The parameters for this component include:**

- **Title**: Specifies the display name of the component on the page.
- **View as**: Specifies how the information will be displayed numerically.
- **Items**: The items in the component, including:
    - **Answered**: Answered calls.
    - **Abandoned**: Abandoned calls.
    - **Missed**: Missed calls.
- **Period**: Specifies the time period during which the data will be analyzed.
- **Queues**: Specifies the queues to be analyzed.