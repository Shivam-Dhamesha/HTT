from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# Route for handling POST requests
@app.route('/post-data', methods=['POST'])
def post_data():
    # Get the JSON data from the request
    data = request.json
    print("Received data:", data)

    # Process the data (optional)
    processed_data = {'message': 'Data received successfully'}

    # Return a JSON response
    return jsonify(processed_data)

# Route for handling GET requests
@app.route('/get-data', methods=['GET'])
def get_data():
    # Create a sample response
    data = {'message': 'This is a GET request'}

    # Return a JSON response
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
