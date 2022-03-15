from flask import Flask, render_template, url_for, request, redirect, session, flash
from datetime import timedelta

app = Flask(__name__)
app.permanent_session_lifetime = timedelta(minutes=5)


@app.route('/', methods=['GET','POST'])
def main_page():
    if request.method == 'GET':
        return render_template('index.html')


if __name__ == '__main__':
    app.run(
        debug=True,  # Allow verbose error reports
        port=5000  # Set custom port
    )