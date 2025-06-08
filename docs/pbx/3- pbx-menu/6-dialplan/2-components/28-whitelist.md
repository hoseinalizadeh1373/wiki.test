# WhiteList

## Usage

This component is used to check the whitelist. When a call enters this component, its presence in the whitelist is verified (refer to the whitelist menu). Numbers are checked in two ways: either by using tags in the numbers registered in the whitelist menu or by directly checking numbers entered in the Numbers parameter.

## Component Parameters

- **Labels**: Tags present in the whitelist.

- **Number**: Numbers that are considered directly as part of the whitelist.

## Outputs

- **✓**: If the caller's number is in the whitelist.

- **✗**: If the caller's number is not in the whitelist.