from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load the model and scaler
with open('best_random_forest_model.pkl', 'rb') as model_file:
    model = joblib.load(model_file)
with open('scaler.pkl', 'rb') as scaler_file:
    scaler = joblib.load(scaler_file)

@app.route('/')
def home():
    return "Model Deployment API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)  # Log received data for debugging
        
        # Ensure data is in the format `{"features": [[...]]}`
        features = data.get("features")
        if features is None:
            print("Error: 'features' key is missing")
            return jsonify({"error": "The 'features' key is missing in JSON data"}), 400
        
        # Convert to a numpy array and ensure it's 2D (even for single samples)
        features = np.array(features)
        if features.ndim == 1:
            features = features.reshape(1, -1)  # Reshape to 2D array if single sample

        # Scale the features
        features_scaled = scaler.transform(features)
        print("Features scaled successfully:", features_scaled)
        
        # Make prediction
        prediction_probabilities = model.predict_proba(features_scaled)[0]
        predicted_class = int(model.predict(features_scaled)[0])
        print("Prediction made successfully")

        # Return as JSON
        return jsonify({
            "predicted_class": predicted_class,
            "prediction_probabilities": {
                "class_0": prediction_probabilities[0],
                "class_1": prediction_probabilities[1]
            }
        })
    except Exception as e:
        print("Exception occurred:", str(e))  # Print the error message in the console
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
