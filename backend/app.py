from flask import Flask, jsonify

app: Flask = Flask(__name__)

@app.route("/")
def hello_world() -> str:
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)