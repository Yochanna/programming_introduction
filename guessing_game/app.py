from flask import Flask, render_template_string, request

app = Flask(__name__)

PAGE = """
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Guessing Game</title>
  <style>
    body { font-family: system-ui, sans-serif; background:#0f172a; color:#e5e7eb; padding:2rem; }
    .box { max-width: 480px; margin: 0 auto; background:#020617; border:1px solid #1f2937; padding:1.5rem; border-radius:0.75rem; }
    input[type=number] { padding:0.4rem; border-radius:0.4rem; border:1px solid #4b5563; background:#020617; color:#e5e7eb; width:100%; box-sizing:border-box; }
    button { margin-top:0.75rem; padding:0.5rem 1rem; border-radius:999px; border:1px solid #1d4ed8; background:#1d4ed8; color:#e5e7eb; cursor:pointer; }
    .msg { margin-top:0.75rem; font-size:0.9rem; }
  </style>
</head>
<body>
  <div class="box">
    <h1>Guessing Game</h1>
    <p>I'm thinking of a number between 1 and 10. Can you guess it?</p>

    <form method="post">
      <input type="number" name="guess" min="1" max="10" required />
      <button type="submit">Submit guess</button>
    </form>

    {% if message %}
      <div class="msg">{{ message }}</div>
    {% endif %}
  </div>
</body>
</html>
"""

import random
SECRET = random.randint(1, 10)

@app.route("/", methods=["GET", "POST"])
def index():
    global SECRET
    message = ""
    if request.method == "POST":
        try:
            guess = int(request.form.get("guess", ""))
        except ValueError:
            message = "Please enter a valid number."
        else:
            if guess < SECRET:
                message = "Too low! Try again."
            elif guess > SECRET:
                message = "Too high! Try again."
            else:
                message = "Correct! I picked {}. Starting a new game...".format(SECRET)
                SECRET = random.randint(1, 10)
    return render_template_string(PAGE, message=message)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)