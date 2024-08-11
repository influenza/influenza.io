from flask import Flask, jsonify
from flask_cors import CORS, cross_origin  # Importe a extensão CORS
import index
import requests
import numpy as np
import pandas as pd
import math
app = Flask(__name__)
CORS(app)



@app.route('/dashboard', methods=['POST',"GET"])
@cross_origin()
def dashboard():
        al1= index.ANALISEDEDADOS()
        mes = [{f"Mes{x}":index.valores(index.ANALISEDEDADOS.dadosmes(al1,1))} for x in range(12)]
        result=index.valores(index.ANALISEDEDADOS.dadosmes(al1,1))
        return jsonify({'mes':f'{mes}','message': f'{[result[0][x] for x in range(len(result[0]))]}]','total': f'{result[1]}','media':f'{result[1]/len(result[0])}','mediaarray':f'{[math.floor(result[1]/len(result[0])) for x in range(len(result[0]))]}','Variancia':f'{result[2]}','Minimo':f'{result[3]}','Maximo':f'{result[4]}'})


@app.route('/getusers', methods=["GET"])
@cross_origin()
def getusers():
        url = 'http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/search/paulo%20herinque'
        headers = {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXVsbyBoZXJpbnF1ZSIsInJvbGVzIjpbXSwiaXNzIjoiaHR0cDovL2VjMi00NC0yMjAtODMtMTE3LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tIiwiZXhwIjoxNzIyMjczMzEwLCJpYXQiOjE3MjIyNjk3MTB9.JhbpZfXOJfP81uf480Nwpeal6lKQE2AN05kab-LN1CY"
        }
        response = requests.get(url, headers=headers)
        print(f"Status Code: {response.status_code}")
        print(f"Headers: {response.headers}")
        print(f"Response Body: {response.text}")
        return "response.status_code"


if __name__ == "__main__":
    app.run(debug=True)
