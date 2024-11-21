from flask import Flask
from routes.auth import auth_bp
from routes.user import user_bp
from routes.workout import workout_bp

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(user_bp, url_prefix='/user')
    app.register_blueprint(workout_bp, url_prefix='/workout')

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)