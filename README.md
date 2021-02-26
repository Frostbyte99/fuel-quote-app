# Fuel quote app

Simple webapp for purchasing fuel based on a clients locations and history.

### Formatting

* Use two space formatting for tabs.

## How to download and run

* cd into an empty directory
* Enter into terminal: 'git clone https://github.com/Frostbyte99/fuel-quote-app'
* cd into 'fuel-quote-app'
* Run 'npm install' to install all dependencies
* Finally to run the app, simple put 'npm start' and itll automatically reload when you make changes to source

## Pages URL
* Log in: http://localhost:3000/
* Sign up: http://localhost:3000/signup
* Fuel quote from: http://localhost:3000/fuelquote
* Client profile form: http://localhost:3000/clientprofile

## ToDo Lists

### Forms

- [x] Create Login Form
- [x] Create Signup Form
- [x] Create Client Profile Form
- [x] Fuel Quote Form

### Profile Form

Profile page needs these fields:

- [ x ] Full Name (50 characters, required)
- [ x ] Address 1 (100 characters, required)
- [ x ] Address 2 (100 characters, optional)
- [ x ] City (100 characters, required)
- [ x ] State (Drop Down, selection required) DB will store 2 character state code
- [ x ] Zipcode (9 characters, at least 5 character code required)

### Fuel quote Form

- [x] Gallons Requested (numeric, required)
- [x] Delivery Address (Non-editable, comes from client profile)
- [x] Delivery Date (Calender, date picker)
- [x] Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
- [x] Total Amount Due (numeric non-editable, calculated (gallons * price)) 
- [x] Display quote history in tabular display

- [x] Have validations in place for all inputs
