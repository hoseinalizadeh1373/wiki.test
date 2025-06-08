# Variables in the Editor

Variables are values defined in this section and used in the components of the editor. One of the main advantages of using variables is the elimination of redundancy and the ability to change the values of multiple components by modifying a single variable.

- **Example**: Suppose your organization needs to dynamically change the timeout value of the `exten` components. Given that you have a complex call scenario with many `exten` components in the editor, without using variables, you would need to manually change the timeout value for each component, which is time-consuming. However, if you use variables, by simply changing the selected variable's value in the timeout, all `exten` components will be automatically updated, allowing you to manage the timeout of all components with a single variable.

## Data Types for Variables

Since different components have parameters with various data types, the variables defined in this section must also have different data types. These data types include:

1. **number**: Numeric data type, applicable in components like `exten`, `queue`, etc.

2. **string**: String data type, applicable in components like `exten`, `queue`, etc.

3. **announcement**: Audio file data type, applicable in components like `poll`, `announcement`, etc.

## Variable Parameters

- **Name**: The name of the variable.

- **Type**: The data type of the variable.

- **Value**: The value of the variable.

- **Description**: Additional explanations.

## Search Parameters for Variables

- **Name**: Search by the variable name.

- **Type**: Search by the data type of the variable.

- **Find Alike**: Find similar items.