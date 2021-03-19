
def ValidateFullName(fullName):
    if not fullName: #empty string
        return False
    maxLength = 50
    actualLength = len(fullName)
    if(actualLength > maxLength):
        return False
    if not all(i.isalpha() or i.isspace() for i in fullName): # alphas and spaces only
        return False
    reutrn True

def validateAddress1(address1):
    if not address1: #empty string
        return False
    maxLength = 100
    actualLength = len(address1)
    if(actualLength > maxLength):
        return False
    if not all(i.isalpha() or i.isspace() or i.isnumeric() for i in address1): # alphas and spaces and nubmers only
        return False
    return True

def validateAddress2(address2):
    maxLength = 100
    if not address2: #empty string
        return True
    actualLength = len(address2)
    if(actualLength > maxLength):
        return False
    if not all(i.isalpha() or i.isspace() or i.isnumeric() for i in address2): # alphas and spaces and nubmers only
        return False
    

def validateCity(city):
    if not city: #empty string
        return False
    maxLength = 100
    actualLength = len(city)
    if(actualLength > maxLength):
        return False
    if not city.isalpha():
        return False
    return True

def validateState(state):
    if not state: #empty string
        return False
    maxLength = 2
    actualLength = len(state)
    if(actualLength > maxLength):
        return False

def validateZipcode(zipcode):
    if not zipcode: #empty string
        return False
    hyphenless = zipcode
    hyphenless.replace("-", "");
    maxLength = 9
    minLength = 5
    actualLength = len(hyphenless)
    if(actualLength < minLength):
        return False
    if(actualLength > maxLength):
        return False
    if not hyphenless.isnumeric():
        return False
    return True
    
    