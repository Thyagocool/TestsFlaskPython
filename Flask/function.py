import requests

def callrate():
    res = requests.get("http://127.0.0.1:5000/api/interest-rate")

    resJson = res.json()
    rate = resJson['rate'] 
    #print(rate)
    return rate


if __name__ == '__main__':
    callrate()