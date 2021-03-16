# Installation

```git
git clone https://github.com/Frostbyte99/fuel-quote-app
cd <Dir>
```

Optional but recommended, use venv for python.  
**Note** You will need to do this everytime you open up the project.  
In the home directory of the project.  

```python
pythom -m venv venv

For windows: .\venv\Scripts\activate

For Linux/Mac: source /venv/bin/activate
```

You should see **(env)** on the left of your console if it worked

Installing dependencies

```python
pip3 install -r requirements.txt
```

## With Django

When first cloning Django or when making changes to the data model, you'll need to execute:

```python
python3 manage.py migrate
```

To run the Django server

```python
python3 manage.py runserver
```

## React

If your just making changes to react and dont need to run it through Django, you can just do the same thing as the second assignment. Otherwise you'll need to run this

```python
npm run build
```

## Python

Please use **python 3**
