import datetime
from datetime import date

# def validateDeliveryAddress(user):    ?Already supposed to be coming from database?
#     return True

def validateDeliveryDate(deliveryDateString):
    delivDateArr = deliveryDateString.split("-")
    delivDateArr = list(filter(None, delivDateArr))
    # print(delivDateArr)
    if len(delivDateArr) != 3:
        return False
    
    companyStartDate = datetime.datetime(2020, 1, 1)
    today = date.today()
    try:
        deliveryDate = datetime.datetime(int(delivDateArr[0]), int(delivDateArr[1]), int(delivDateArr[2]))
        # print(deliveryDate.strftime("%B %d, %Y"))
        yrRange = 100   # Make into a constant, might come from the Database?
        futureDate = datetime.datetime(today.year + yrRange, today.month, today.day)
        # print(futureDate.strftime("%B %d, %Y"))
        if deliveryDate < companyStartDate or deliveryDate > futureDate:
            # print("Date is out of range")
            raise Exception #("Date out of range")
    except Exception:
        # print("Invalid Date")
        return False
    return True

def validateGallons(gallons):
    try:
        max_gallons = 1000                      # should be a constant
        max_len = 8 #1000.XXX = 8 characters    # should be a constant
        str_gallons = str(gallons)
        g = float(gallons)
        if g <= 0 or g > max_gallons or len(str_gallons) > max_len:
            return False
        # print("strGallons = "+str_gallons+"  \tgallons (X.XXX) = "+str(round(g, 3)))
        if str_gallons != str(round(g, 3)) and str_gallons != str(int(gallons)):
            return False
    except Exception:
        return False
    return True

def validatePricePerGallon(price):
    try:
        max_price = 10                          # should be a constant
        max_len = 6 #10.XXX = 6 characters      # should be a constant
        str_price = str(price)
        p = float(price)
        if p <= 0 or p > max_price or len(str_price) > max_len:
            return False
        # print("strPrice = "+str_price+"\tprice (X.XXX) = "+str(round(p, 3)))
        if str_price != str(round(p, 3)) and str_price != str(int(price)):
            return False
    except Exception:
        return False
    return True

def validateTotalPrice(totalPrice):
    try:
        max_total_price = 10000                 # should be = max_price * max_gallons
        max_len = 9 #10000.XXX = 9 characters   # should be a constant (or = len(max_total_price)+4)
        str_price = str(totalPrice)
        tp = float(totalPrice)
        if tp <= 0 or tp > max_total_price or len(str_price) > max_len:
            return False
        # print("strPrice = "+str_price+"\tprice (X.XXX) = "+str(round(tp, 3)))
        if str_price != str(round(tp, 3)) and str_price != str(int(totalPrice)):
            return False
    except Exception:
        return False
    return True
