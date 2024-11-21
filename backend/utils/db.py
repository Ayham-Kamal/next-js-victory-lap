import os
from psycopg import connect
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def get_connection():
    # Fetch the database URL from the .env file
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        raise ValueError("DATABASE_URL is not set in .env")
    return connect(database_url)

def execute_query(query, params=None, fetchone=False, fetchall=False):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(query, params)
            if fetchone:
                return cur.fetchone()
            if fetchall:
                return cur.fetchall()
            conn.commit()
