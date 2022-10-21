from flask import Flask


def create_app():
    app = Flask(__name__)

    @app.route("/")
    def index():
        return "Hello World!"

    if __name__ == "__main__":
        app.run()

    # export FLASK_APP=backend && export FLASK_ENV=development&&flask run
    return app
