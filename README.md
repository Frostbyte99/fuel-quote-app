# Fuel quote app

Simple webapp for purchasing fuel based on a clients locations and history.

## How to download and run

* cd into an empty directory
* Enter into terminal: 'git clone https://github.com/Frostbyte99/fuel-quote-app'
* cd into 'fuel-quote-app'
* Run 'npm install' to install all dependencies
* Finally to run the app, simple put 'npm start' and itll automatically reload when you make changes to source

## ToDo Lists

### Forms

- [ ] Create Login Form
- [ ] Create Signup Form
- [ ] Create Client Profile Form
- [ ] Fuel Quote Form

### Profile Form

Profile page needs these fields:

- [ ] Full Name (50 characters, required)
- [ ] Address 1 (100 characters, required)
- [ ] Address 2 (100 characters, optional)
- [ ] City (100 characters, required)
- [ ] State (Drop Down, selection required) DB will store 2 character state code
- [ ] Zipcode (9 characters, at least 5 character code required)

### Fuel quote Form

- [ ] Gallons Requested (numeric, required)
- [ ] Delivery Address (Non-editable, comes from client profile)
- [ ] Delivery Date (Calender, date picker)
- [ ] Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
- [ ] Total Amount Due (numeric non-editable, calculated (gallons * price)) 
- [ ] Display quote history in tabular display

- [ ] Have validations in place for all inputs

## Basic UML Design

## Use Case Diagram
