from pickletools import pylong
from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.security import generate_password_hash
import re
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Setup MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['user_database']
users_collection = db['users']

# Function to validate email format
def is_valid_email(email):
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(regex, email)

# Route to handle signup
@app.route('/signup', methods=['POST'])
def signup():
    # Get data from the request
    name = request.json.get('name')
    email = request.json.get('email')
    password = request.json.get('password')

    # Check if any field is missing
    if not name or not email or not password:
        return jsonify({"error": "Please provide all required fields"}), 400

    # Validate email format
    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    # Check if user already exists
    if users_collection.find_one({"email": email}):
        return jsonify({"error": "Email already exists"}), 409

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Create a new user document
    user_data = {
        "name": name,
        "email": email,
        "password": hashed_password
    }

    # Insert the user data into the MongoDB collection
    users_collection.insert_one(user_data)

    return jsonify({"message": "User created successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True,)

