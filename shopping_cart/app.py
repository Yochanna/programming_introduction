from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # Serve the full front-end (HTML + CSS + JS)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)