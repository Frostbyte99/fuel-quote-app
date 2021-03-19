from django.test import SimpleTestCase  # When there's no interaction with the Database
from backend import fuel_quote_module
from backend import client_profile_module
from backend import pricing_module
# from backend import login_module

class TestModules(SimpleTestCase):

    def test_fuel_quote_module(self):
        # _Delivery Date_:
        print("Delivery Date Tests:")
        # Date Format: "Year-Month-Day"
        test_dates =    ["2020-09-04", "2020-02-32", "2021-13-04", "2020-1-1-",
                        "-2021--9-04", "202002--21", "2100-07-04", "2121-07-4",
                        "1900-10-10", "2022-00-00", "02021-04-19", "2021-5-20"]
        test_answers =  [True, False, False, True,
                        True, False, True, False,
                        False, False, True, True]
        for i, d in enumerate(test_dates):
            test_result = fuel_quote_module.validateDeliveryDate(d)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result
        # _Gallons_:
        print("Gallons Tests:")
        test_gallons =  [0, "00.2", 1000, 1001,
                        7.7770, 10.2934, 2.999, -2.999,
                        "0", "0..2", "1000", "1001", 
                        "7.7770", "10.2934", "2.999", "-2.999"]
        test_answers =  [False, False, True, False,
                        True, False, True, False,
                        False, False, True, False,
                        False, False, True, False]
        for i, g in enumerate(test_gallons):
            test_result = fuel_quote_module.validateGallons(g)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result
        # _Price per Gallons_:
        print("Price per Gallons Tests:")
        test_p_per_g =  [0, "00.2", 10, 11,
                        7.7770, 9.2934, 2.999, -2.999,
                        "0", "0..2", "10", "11", 
                        "7.7770", "10.234", "2.999", "-2.999"]
        test_answers =  [False, False, True, False,
                        True, False, True, False,
                        False, False, True, False,
                        False, False, True, False]
        for i, pg in enumerate(test_p_per_g):
            test_result = fuel_quote_module.validatePricePerGallon(pg)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result
        # _Total Price_:
        print("Total Price Tests:")
        test_total_p =  [0, "00.2", 10000, 10001,
                        7.7770, 10.2934, 2.999, -2.999,
                        "0", "0..2", "10000", "10001", 
                        "7.7770", "10.2934", "2.999", "-2.999"]
        test_answers =  [False, False, True, False,
                        True, False, True, False,
                        False, False, True, False,
                        False, False, True, False]
        for i, tp in enumerate(test_total_p):
            test_result = fuel_quote_module.validateTotalPrice(tp)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result

    def test_client_profile_module(self):
        # _FullName_:
        print("Full Name Tests:")
        test_names =    ["John", "John Smith", "Mr. John Smith", "Mr. John Smith Jr.",
                        "", 0, [], " ",
                        "aaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabc"]
        test_answers =  [True, True, True, True,
                        False, False, False, False,
                        False]
        for i, name in enumerate(test_names):
            test_result = client_profile_module.validateFullName(name)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result

        # _Address1_:
        print("Address1 Tests:")
        test_addr1 =    ["123 Main", "Main St.", "Mac-Callum Street", "7777 MacCallum Dr.",
                        "", 0, "123", " ",
                        "aaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabc"]
        test_answers =  [True, True, True, True,
                        False, False, False, False,
                        False]
        for i, a1 in enumerate(test_addr1):
            test_result = client_profile_module.validateAddress1(a1)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result

        # _Address2_:
        print("Address2 Tests:")
        test_addr2 =    ["123 Main", "Main St.", "Mac-Callum Street", "7777 MacCallum Dr.",
                        "", 0, "123", " ",
                        "aaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabc"]
        test_answers =  [True, True, True, True,
                        True, False, False, False,
                        False]
        for i, a2 in enumerate(test_addr2):
            test_result = client_profile_module.validateAddress2(a2)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result

        # _City_:
        print("City Tests:")
        test_cities =   ["Houston", "Chicago", "Los Angeles", "New York City",
                        "", 0, "123", " ",
                        "aaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabaaaaaaaaabc"]
        test_answers =  [True, True, True, True,
                        False, False, False, False,
                        False]
        for i, city in enumerate(test_cities):
            test_result = client_profile_module.validateCity(city)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result

        # _State_:
        print("State Tests:")
        test_states =   ["TX", "CA", "nY", "Ak",
                        "", 0, "123", " ",
                        "Tex"]
        test_answers =  [True, True, True, True,
                        False, False, False, False,
                        False]
        for i, state in enumerate(test_states):
            test_result = client_profile_module.validateState(state)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result
        
        # _Zipcode_:
        print("Zipcode Tests:")
        test_zcodes =   ["77123", "7728C", "77125-1800", "771251800",
                        "", 0, "7712", "771234",
                        77123, 771251800, 7712, 771234]
        test_answers =  [True, False, True, True,
                        False, False, False, False,
                        True, True, False, False]
        for i, zipc in enumerate(test_zcodes):
            test_result = client_profile_module.validateZipcode(zipc)
            self.printTestResult(i, test_result, test_answers[i])
            assert test_answers[i] == test_result

    def test_login_module(self):
        # _Username_:
        print("Username Tests:")
        test_usernames= []
        test_answers =  []
        # for i, usern in enumerate(test_usernames):
        #     test_result = login_module.validateUserName(usern)
        #     self.printTestResult(i, test_result, test_answers[i])
        #     assert test_answers[i] == test_result

        # _Password_:
        print("Password Tests:")
        test_pswds =    []
        test_answers =  []
        # for i, pswd in enumerate(test_pswds):
        #     test_result = login_module.validatePassword(pswd)
        #     self.printTestResult(i, test_result, test_answers[i])
        #     assert test_answers[i] == test_result

    def test_pricing_module(self):
        # _(Specific Value Name)_:    print("(Value Name):")
        test_prices =   []
        test_answers =  []
        # for i, p in enumerate(test_prices):
        #     test_result = pricing_module.validatePrice(pc)
        #     self.printTestResult(i, test_result, test_answers[i])
        #     assert test_answers[i] == test_result

    # def test_[...]_module(self):
    #     # _(Specific Value Name)_:    print("(Value Name):")
    #     test_[value] =  []
    #     test_answers =  []
    #     for i, var in enumerate(test_[value]):
    #         test_result = [...]_module.validate[...](var)
    #         # self.printTestResult(i, test_result, test_answers[i])
    #         assert test_answers[i] == test_result

    def printTestResult(self, i, test_result, test_answer):
        result = "  Test case "+str(i+1)+": "+str(test_result)
        if(test_result == test_answer):
            print(result+"\t > Passed <")
        else:
            print(result+"\t ! Failed !")
