---
sidebar_position: 1
title: "Template Sms"
---

# SMS Sending Service Template

Given the variety of SMS services, Simotel provides a scalable infrastructure for sending messages, allowing you to use your preferred service. Below is an example of an SMS sending service, and you can modify the following Python code to upload the service in Simotel. 

# Example 
```py

# Define module parameters for the SMS service
module_param = {"username": "my_sername", "password": "my_pass", "src": "my_src_number"}

import sys
import base64
import requests

def send_message(phone_number, message):
    """
    Send an SMS message via a specified service provider (in this case, ippanel).
    
    IMPORTANT: 
    If you are using a different SMS service provider, you will need to modify this function
    to meet the specific requirements and API specifications of your chosen provider.
    
    Args:
    - phone_number (str): The phone number to send the SMS to.
    - message (str): The content of the SMS message.
    
    Returns:
    None
    """
    
    # URL for the ippanel SMS API
    url = 'http://ippanel.com/api/select'
    # Construct the payload with provided parameters and arguments
    data = {
        "op": "send",
        "uname": module_param["username"],
        "pass": module_param["password"],
        "message": message,
        "from": module_param["src"],
        "to": [phone_number]
    }
    
    # Send the request to the ippanel service
    response = requests.post(url, json=data)

    # Check the response and print appropriate messages
    if response.status_code == 200:
        print(response)
    else:
        print("whatever you want")

# Check the number of arguments provided
# If there are 3 arguments, decode the phone number and message from base64
if len(sys.argv) == 3:
    phone_number = base64.b64decode(sys.argv[1]).decode("utf-8")
    message = base64.b64decode(sys.argv[2]).decode("utf-8")
    send_message(phone_number, message)
    print("sending message %s to %s" % (message, phone_number))
    
# If there are 4 arguments, check if the last argument is "test"
elif len(sys.argv) == 4:
    # this part is just for test your sms service command sample: python3.8 simotel_sms_service_template.py "0915xxxxxxx" "my_message" test
    phone_number = sys.argv[1]
    message = sys.argv[2]
    if sys.argv[3] == "test":
        send_message(phone_number, message)
        print("sending message %s to %s" % (message, phone_number))
    else:
        print("invalid command")
else:
    # If the number of arguments doesn't match expected values, print an error message
    print(sys.argv)
    print("unable to get message")

```

### Description

In the above template, there is a function named `send_message` that is responsible for sending the SMS. The only part that needs to be changed is the configuration for your SMS service provider. This function accepts two parameters: `phone_number` (the recipient's number) and `message` (the content of the SMS). The rest of the code is up to you to implement, where you will call your SMS service provider using these parameters (you can refer to the provider's documentation for this).

### Example Code

```python
import requests

# Define the API endpoint and API key
api_endpoint = "https://your-sms-service.com/send_sms"
api_key = "your_api_key"

# Send message function
def send_message(phone_number, message):
    # Prepare the payload
    payload = {
        'to': phone_number,
        'message': message,
        'from': 'your_sender_id',  # This part depends on your SMS provider's configuration
        'api_key': api_key
    }

    # Send POST request to the API
    try:
        response = requests.post(api_endpoint, data=payload)
        # Check response status
        if response.status_code == 200:
            print("Message sent successfully!")
        else:
            print(f"Message sending failed. Error: {response.status_code}, {response.text}")
    except Exception as e:
        print(f"Error in sending message: {str(e)}")

# Test the function
if __name__ == "__main__":
    phone_number = "0915xxxxxxx"  # Recipient's phone number
    message = "your_message_content_here"  # Message content
    send_message(phone_number, message)
```

### Testing

To test the code, first upload it to the Simotel server and then execute it using the following command in the Linux shell:


This will send the message to the specified phone number with the provided message content. If there are any issues with sending the message, the errors will be displayed.

### Logging

Any output you `print()` in this file will be visible in the `/usr/src/simotel/simotelhelper.log` file. It is recommended to print the response of the SMS service call to help track any issues. For example:

