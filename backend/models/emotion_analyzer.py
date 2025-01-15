def analyze_emotion(user_responses):
    # Logic to analyze emotion based on user_responses
    if 'happy' in user_responses:
        return 'Happy'
    elif 'sad' in user_responses:
        return 'Sad'
    else:
        return 'Neutral'
