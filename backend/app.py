from flask import Flask, request, jsonify
from models.emotion_analyzer import analyze_emotion
from models.career_recommender import recommend_career
from flask_cors import CORS
CORS(app)


app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the AI-Education-System API!"})

@app.route('/analyze_emotion', methods=['POST'])
def analyze_emotion_endpoint():
    data = request.json
    responses = data.get('responses', [])
    result = analyze_emotion(responses)
    return jsonify(result)

@app.route('/recommend_career', methods=['POST'])
def recommend_career_endpoint():
    data = request.json
    user_data = data.get('user_data', {})
    result = recommend_career(user_data)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5001)

