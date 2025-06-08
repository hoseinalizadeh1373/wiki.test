---
sidebar_position: 1
sidebar_label: "قالب سرویس ارسال پیامک"
title: "قالب سرویس ارسال پیامک"
---


#  قالب سرویس ارسال پیامک

با توجه به تنوع سرویس های ارسال پیام، سیموتل با ایجاد زیرساخت قابل توسعه برای ارسال پیام به شما این امکان را می دهد که از سرویس دلخواه خود استفاده کنید. در زیر نمونه ای از قابل سرویس ارسال پیامک آورده شده و شما میتوانید با استفاده از کد پایتون فایل زیر را تغییر بدید و سرویس رو در سیموتل آپلود کنید.

# نمونه 
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

# توضیحات

در نمونه قالب بالا تابعی با نام send_message وجود دارد که وظیفه اصلی ارسال پیام رو به عهده دارد و تنها قیمتی نیاز به تغییر دارد همین قسمت می باشد. این تابع دو پارامتر phone_number و message می باشد که حاوی پیام sms و شماره گیرنده است. مابقی کد در این تابع به عهده خودتان می باشد. با استفاده از این مقادیر سرور ارسال پیامک خو را فراخوانی (از مستندات پرووایدر پیامک استفاده کنید) نمایید.

# تست
بهتر است ابتدا کد را در سرور سیموتل قرار دهید و آن را به صورت زیر در shell لینوکس فراخوانی نمایید تا از درستی آن مطمئن شوید
```
python3.8 simotel_sms_service_template.py "0915xxxxxxx" "my_message" test
```
# لاگ گیری
 هر آنچه که در این فایل print کنید در آدرس /usr/src/simotel/simotelhelper.log قابل مشاهده می باشد. لذا توصیه میکنیم که خروجی فراخوانی سرویس sms را print کنید.