from flask import Blueprint, g, request, jsonify
from utils.db import execute_query
from utils.jwt_helper import token_required

workout_bp = Blueprint('workout', __name__)

# Log a new workout
@workout_bp.route('/log', methods=['POST'])
@token_required
def log_workout():
    user_id = g.user_id  # Use JWT-authenticated user_id
    data = request.json
    workout_name = data.get('workout_name')
    muscle_group = data.get('muscle_group')
    weight_used = data.get('weight_used')
    sets_chosen = data.get('sets_chosen')
    reps_chosen = data.get('reps_chosen')
    equipment_id = data.get('equipment_id')

    # Validate inputs
    if not workout_name or not muscle_group or not weight_used or not sets_chosen or not reps_chosen or not equipment_id:
        return jsonify({'error': 'All fields are required'}), 400

    # Insert workout into the database
    execute_query(
        """
        INSERT INTO workoutquestions (userid, workoutname, muscleid, equipmentid, weightused, setschosen, repschosen) 
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """,
        (user_id, workout_name, muscle_group, equipment_id, weight_used, sets_chosen, reps_chosen)
    )
    return jsonify({'message': 'Workout logged successfully'}), 201

# View logged workouts
@workout_bp.route('/log', methods=['GET'])
@token_required
def view_workouts():
    user_id = g.user_id  # Use JWT-authenticated user_id

    # Retrieve workouts from the database
    results = execute_query(
        """
        SELECT workoutid, workoutname, muscleid, equipmentid, weightused, setschosen, repschosen
        FROM workoutquestions WHERE userid = %s
        """,
        (user_id,), fetchall=True
    )
    if results:
        return jsonify(results), 200
    return jsonify({'error': 'No workouts found'}), 404

# Delete a logged workout
@workout_bp.route('/log', methods=['DELETE'])
def delete_workout():
    data = request.json
    workout_id = data.get('workout_id')

    # Delete the workout from the database
    execute_query("DELETE FROM workoutquestions WHERE workoutid = %s", (workout_id,))
    return jsonify({'message': 'Workout deleted successfully'}), 200