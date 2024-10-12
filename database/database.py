import sqlite3
conn = sqlite3.connect('database.db')
cur = conn.cursor()
cur.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
    )
''')