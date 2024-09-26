import pywhatkit as kit
import time

# The recipient's phone number (with country code)
phone_number = "+919122130471"
message = "Hello! "

while True:
    # Send the message instantly
    kit.sendwhatmsg_instantly(phone_number, message)
    
    # Wait for 1 second before sending the next message
    time.sleep(5)
