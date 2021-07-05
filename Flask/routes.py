import math

from os import truncate
from flask import Flask, request
from function import callrate
from flask_cors import CORS, cross_origin

app = Flask(__name__)
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)

#API - 1
@app.route("/api/interest-rate", methods=["GET"])
def interestrate():
    irate = 1/100
    return {"rate":irate}

#API - 2
@app.route("/api/calc-interests", methods=["POST"])
def calcinterests():
    print(request.form)
    data = request.form
    initialValue = float(data["initialValue"])
    qtMonth = float(data["qtMonth"])
    
    rate = float(callrate())

    finalValue = round(initialValue * (1 + rate) ** qtMonth,2)

    return {"FinalValue":finalValue}

#API - 3
@app.route("/api/show-me-your-code", methods=["GET"])
def showmecode():
    url = "https://github.com/Thyagocool/TestsFlaskPython"
    return {"url":url}


app.run(debug=True)
