from django.test import SimpleTestCase  # When there's no interaction with the Database
from backend import fuel_quote_module

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

    # def test_[...]_module(self):
    #     # _(Specific Value Name)_:    print("(Value Name):")
    #     test_[value] =  []
    #     test_answers =  []
    #     for i, tp in enumerate(test_[value]):
    #         test_result = [...]_module.validate[...](var)
    #         assert test_answers[i] == test_result

    def printTestResult(self, i, test_result, test_answer):
        result = "  Test case "+str(i+1)+": "+str(test_result)
        if(test_result == test_answer):
            print(result+"\t > Passed <")
        else:
            print(result+"\t ! Failed !")