
def validateFullName(fullName):
    if type(fullName) != str:
        return False
    if not fullName: #empty string
        return False
    maxLength = 50
    actualLength = len(fullName)
    if actualLength > maxLength:
        return False
    if not any(c.isalpha() for c in fullName): # must contain at least 1 alphabetical character
        return False
    if not all(i.isalpha() or i.isspace() or i=="." or i=="-" for i in fullName): # alphas, spaces, dots, and hyphens only
        return False
    return True

def validateAddress1(address1):
    if type(address1) != str:
        return False
    if not address1: #empty string
        return False
    maxLength = 100
    actualLength = len(address1)
    if actualLength > maxLength:
        return False
    if not any(c.isalpha() for c in address1): # must contain at least 1 alphabetical character
        return False
    if not all(i.isalpha() or i.isspace() or i.isnumeric() or i=="." or i=="-" for i in address1): # alphas, spaces, numbers, dots, and hyphens only
        return False
    return True

def validateAddress2(address2):
    if type(address2) != str:
        return False
    if not address2: #empty string
        return True
    maxLength = 100
    actualLength = len(address2)
    if actualLength > maxLength:
        return False
    if not any(c.isalpha() for c in address2): # must contain at least 1 alphabetical character
        return False
    if not all(i.isalpha() or i.isspace() or i.isnumeric() or i=="." or i=="-" for i in address2): # alphas, spaces, numbers, dots, and hyphens only
        return False
    return True

def validateCity(city):
    if type(city) != str:
        return False
    if not city: #empty string
        return False
    maxLength = 100
    actualLength = len(city)
    if actualLength > maxLength:
        return False
    if not any(c.isalpha() for c in city): # must contain at least 1 alphabetical character
        return False
    if not all(i.isalpha() or i.isspace() for i in city): # alphas and spaces only
        return False
    return True

def validateState(state):
    if type(state) != str:
        return False
    if not state: #empty string
        return False
    maxLength = 2
    actualLength = len(state)
    if actualLength > maxLength:
        return False
    if not state.isalpha():
        return False
    return True

def validateZipcode(zipcode):
    if not zipcode: #empty string
        return False
    if type(zipcode) == str:
        zipcode = zipcode.replace("-", "")
    else:
        zipcode = str(zipcode)
    actualLength = len(zipcode)
    possibleLengths = [5,9]
    if actualLength != possibleLengths[0] and actualLength != possibleLengths[1]:
        return False
    if not zipcode.isnumeric():
        return False
    return True
