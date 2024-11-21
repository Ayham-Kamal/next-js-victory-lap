import psycopg
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set up database connection
conn = psycopg.connect(os.getenv("DATABASE_URL"))
cur = conn.cursor()

# Query to fetch table names and their columns with types
cur.execute("""
    SELECT table_name, column_name, data_type
    FROM information_schema.columns
    WHERE table_schema = 'public'
    ORDER BY table_name, ordinal_position;
""")

# Fetch the results
tables = cur.fetchall()

# Initialize a dictionary to store table names and their columns
table_schema = {}

# Organize the columns under their respective table names
for table in tables:
    table_name = table[0]
    column_name = table[1]
    data_type = table[2]

    if table_name not in table_schema:
        table_schema[table_name] = []
    table_schema[table_name].append(f"{column_name:<20} | {data_type}")

# Print out the schema in pretty format
for table_name, columns in table_schema.items():
    print(f"Table: {table_name}")
    for column in columns:
        print(f"\t{column}")
    print()  # Blank line between tables

# Close the connection
cur.close()
conn.close()