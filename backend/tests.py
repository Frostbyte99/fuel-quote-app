from django.test import TestCase

from fuel_quote_module import *

# Create your tests here:
def test_fuel_quote_module():
    # Date Format: "Year-Month-Day"
    test_dates =    ["2020-09-04", "2020-02-32", "2021-13-04", "2020-1-1-",
                    "-2021--9-04", "202002--21", "2100-07-04", "2121-07-4",
                    "1900-10-10", "2022-00-00", "02021-04-19", "2021-5-20"]
    test_answers =  [True, False, False, True,
                    True, False, True, False,
                    False, False, True, True]
    for i, d in enumerate(test_dates):
        test_result = validateDeliveryDate(d)
        result = "- Test case "+str(i+1)+": "+str(test_result)
        if(test_result == test_answers[i]):
            print(result+"\t > Passed <")
        else:
            print(result+"\t ! Failed !")


def main():
    try:
        test_fuel_quote_module()
    except Exception:
        print("Error running Test Cases")

if __name__ == '__main__':
    main()
