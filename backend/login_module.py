def validateUserName(userName):
    if type(userName) != str:
        return False
    if not userName: #empty string
        return False
    if len(userName) < 5: # username must be greater than 4 in length
        return False
    if not all(i.isalpha() or i.isnumeric for i in userName): # userName must be alphanumeric only
        return False
    return True

def validatePassword(password):
    if type(password) != str:
        return False
    if not password: #empty string
        return False
    if not all(i.isspace() for i in password): # can't contain space
        return False
    if len(password) < 6: #password must be at least 6 character
        return False
    return True