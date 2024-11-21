from flask import Blueprint, g, request, jsonify
from utils.db import execute_query
from utils.jwt_helper import token_required

user_bp = Blueprint('user', __name__)

# Get User Profile
@user_bp.route('/profile', methods=['GET'])
@token_required
def get_profile():
    user_id = g.user_id  # Extracted from the token by the decorator
    result = execute_query(
        "SELECT firstname, lastname, email, weight, gender FROM users WHERE id = %s", 
        (user_id,), fetchone=True
    )
    if result:
        return jsonify({
            'firstname': result[0], 
            'lastname': result[1], 
            'email': result[2],
            'weight': result[3], 
            'gender': result[4]
        }), 200
    return jsonify({'error': 'User not found'}), 404

# Update User Profile
@user_bp.route('/profile', methods=['PUT'])
@token_required
def update_profile():
    user_id = g.user_id  # Use JWT-authenticated user_id
    data = request.json
    new_firstname = data.get('firstname')
    new_lastname = data.get('lastname')
    new_email = data.get('email')
    new_weight = data.get('weight')
    new_gender = data.get('gender')

    # Validate inputs
    if not new_firstname or not new_lastname or not new_email or not new_weight or not new_gender:
        return jsonify({'error': 'All fields are required'}), 400

    # Update user information in the database
    execute_query(
        """
        UPDATE users 
        SET firstname = %s, lastname = %s, email = %s, weight = %s, gender = %s 
        WHERE id = %s
        """,
        (new_firstname, new_lastname, new_email, new_weight, new_gender, user_id)
    )
    return jsonify({'message': 'Profile updated successfully'}), 200


# Delete User Account
@user_bp.route('/profile', methods=['DELETE'])
@token_required
def delete_profile():
    user_id = g.user_id  # Use JWT-authenticated user_id
    execute_query("DELETE FROM users WHERE id = %s", (user_id,))
    return jsonify({'message': 'Account deleted successfully'}), 200