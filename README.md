# Fake Instagram Account Detection using Random Forest

This project aims to detect fake Instagram accounts using machine learning techniques, specifically the Random Forest classifier. The project involves building a model that distinguishes between genuine and fake accounts based on various account features and metrics.

---

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Model Development](#model-development)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [License](#license)

---

## Overview

In this project, we use features extracted from Instagram accounts to classify whether an account is real or fake. The model was developed in Google Colab, trained using a dataset of Instagram accounts, and deployed locally with a web-based interface.

---

## Project Structure

- ML project/ ├── .vscode/ # VSCode configurations ├── app.py # Flask app for serving the model API ├── best_random_forest_model.pkl # Serialized Random Forest model ├── scaler.pkl # Scaler used for data preprocessing ├── FakeOrAuthentic.csv # Dataset used for training ├── frontend/ │ ├── index.html # Frontend HTML page │ ├── script.js # JavaScript for frontend functionality │ └── styles.css # Styling for the frontend ├── notebooks/ │ └── model_development.ipynb # Model development notebook └── README.md # Project documentation

---

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/tesso30/Fake-Instagram-account-detection-using-Random-Forest.git
    cd Fake-Instagram-account-detection-using-Random-Forest
    ```

2. **Set up a virtual environment:**
    ```bash
    python -m venv myenv
    source myenv/bin/activate   # On Windows: myenv\Scripts\activate
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

---

## Usage

1. **Run the app locally:**
    ```bash
    python app.py
    ```

   This will start a local server, and you can access the app through your browser at [http://127.0.0.1:5000](http://127.0.0.1:5000).

2. **Using the Web Interface:**
    - Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.
    - Upload or input the necessary details to predict if an Instagram account is fake or real.

---

## Model Development

The model was developed and trained in a Google Colab notebook:

- **Notebook location**: `notebooks/model_development.ipynb`
- **Features**: Account metrics (e.g., followers, engagement rate) were used to build the model.
- **Algorithms Tested**: Random Forest, SVM, Gradient Boosting, XGBoost, etc.
- **Final Model**: The Random Forest model was chosen for its high accuracy and ROC-AUC score.

---

## Deployment

The project is deployed locally using Flask. The `app.py` file provides a simple API that accepts account features and returns the prediction result.

To deploy on other platforms or cloud providers, consider using Docker, AWS, or Heroku.

---

## Technologies Used

- **Python**: Core language for machine learning and backend.
- **Flask**: Web framework for building the API.
- **HTML/CSS/JavaScript**: Frontend for the web interface.
- **Random Forest**: Main classifier for prediction.
- **Google Colab**: Used for model development and training.
- **Git**: Version control.

---

## Contributors

- **Tesso Jemal** - [GitHub Profile](https://github.com/tesso30)

---

## License

This project is licensed under the MIT License.
