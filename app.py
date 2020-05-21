from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def mainpage():
    return render_template('main.html')

@app.route('/haslemerecellar')
def haslemere_cellar():
    return 'Page for the Google form/Xero link.'


if __name__ == '__main__':
    app.run()
