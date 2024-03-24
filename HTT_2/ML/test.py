from flask import Flask, request, jsonify
import pickle
import os
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

with open('weights.pkl', 'rb') as f:
    W2 = pickle.load(f)
with open('biases.pkl', 'rb') as f:
    b2 = pickle.load(f)
with open('movies.pkl', 'rb') as f:
    X2 = pickle.load(f)

def get_indices():
    user0 = ((np.matmul(X2, W2[0]) + b2[:, 0]))
    abc = (sorted(zip(user0, range(len(user0))), reverse=True))
    indices = ([a[1] for a in abc])
    return indices

@app.route('/get_indices', methods=['GET'])
def get_indices_route():
    try:
        indices = get_indices()
        return jsonify({'indices': indices})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5002)
