def validateUserName(userName):
    if type(userName) != str:
        return False
    if not userName: # empty string
        return False
    minUserChars = 4    # constant
    if len(userName) < minUserChars: # username must be at least minUserChars in length
        return False
    if not all(i.isalpha() or i.isnumeric() or i=="_" for i in userName): # alphanumeric/underscore characters only
        return False
    return True

def validatePassword(password):
    if type(password) != str:
        return False
    if not password: # empty string
        return False
    if any(i.isspace() for i in password): # can't contain space
        return False
    minPassChars = 6    # constant
    if len(password) < minPassChars: # password must be at least minPassChars in length
        return False
    return True