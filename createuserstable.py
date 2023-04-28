import sqlite3

conn = sqlite3.connect('database.db')
print('Opened databases successfully!')
conn.execute('CREATE TABLE users (username TEXT, password TEXT, email TEXT)')
print('Table created successfully!')
conn.close()