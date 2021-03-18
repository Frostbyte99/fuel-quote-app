import datetime
from datetime import date

# def validateDeliveryAddress(user):
#     .
#     return True

def validateDeliveryDate(deliveryDateString):
    delivDateArr = deliveryDateString.split("-")
    delivDateArr = list(filter(None, delivDateArr))
    print(delivDateArr)
    if len(delivDateArr) != 3:
        return False
    
    companyStartDate = datetime.datetime(2020, 1, 1)
    today = date.today()
    try:
        deliveryDate = datetime.datetime(int(delivDateArr[0]), int(delivDateArr[1]), int(delivDateArr[2]))
        print(deliveryDate.strftime("%B %d, %Y"))
        yrRange = 100   # Make into a constant, might come from the Database?
        futureDate = datetime.datetime(today.year + yrRange, today.month, today.day)
        print(futureDate.strftime("%B %d, %Y"))
        if deliveryDate < companyStartDate or deliveryDate > futureDate:
            print("Date is out of range")
            raise Exception #("Date out of range")
    except Exception:
        print("Invalid Date")
        return False
    return True

def validateGallons(gallons):
    # gallons.
    return True

# def validatePricePerGallon(price):
#     .
#     return True

def validateTotalPrice(totalPrice):
    # totalPrice.
    return True
