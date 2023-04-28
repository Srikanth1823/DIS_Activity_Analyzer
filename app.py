import re
from datetime import datetime
from flask import Flask, request, redirect
from flask import request
from flask import render_template
import time
import sqlite3

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/insert_user', methods=['POST'])
def insert_user():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    print(f"username: {username}, password: {password}, email: {email}")

    # Open a connection to the database
    conn = sqlite3.connect('database.db')

    # Insert the user's information into the login table
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', (username, password, email))
    conn.commit()

    # Close the database connection
    conn.close()
    time.sleep(2)
    return redirect('/static/html/login.html')
    

@app.route('/add_activity', methods=['POST'])
def add_activity():
    username = 'Ariv'
    activity = request.form['activity']
    date = request.form['date']
    day = "Friday"
    minutes = request.form['time']

    print(f"username: {username}, activity: {activity}, date: {date}, day: {day}, minutes: {minutes}")

    # Open a connection to the database
    conn = sqlite3.connect('database.db')

    # Insert the user's information into the login table
    cursor = conn.cursor()
    cursor.execute('INSERT INTO activity (username, activity, minutes, day, date) VALUES (?, ?, ?, ?, ?)', (username, activity, minutes, day, date))
    conn.commit()

    # Close the database connection
    conn.close()
    time.sleep(2)
    return redirect('/static/html/Home.html')


if __name__ == '__main__':
    app.debug = True
    app.run()
