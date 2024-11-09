document.getElementById('prediction-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const features = [];
    const featureIds = [
      "lin", "cl", "erl", "erc", 
       "lt","pr", "cs"
    ];
  
    // Clear previous result
    document.getElementById('prediction-output').innerHTML = "Loading...";
  
    // Collect input values for all features
    for (const id of featureIds) {
        const value = parseFloat(document.getElementById(id).value);
        if (!isNaN(value)) {
            features.push(value);
        } else {
            alert(`Feature ${id} is required and must be a number.`);
            document.getElementById('prediction-output').innerHTML = ""; // Clear loading message if there's an error
            return;
        }
    }
  
    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ features: features })
        });
  
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
  
        // Parse the response JSON
        const result = await response.json();
        
        // Log the full result to the console for debugging
        console.log("API Response:", result);
  
        // Format the prediction and probabilities for display
        const predictedClass = result.predicted_class === 1 ? "Real" : "Fake";
        const probabilityReal = result.prediction_probabilities.class_1;
        const probabilityFake = result.prediction_probabilities.class_0;
  
        // Display the prediction result in the specified format
        document.getElementById('prediction-output').innerHTML = `
          <strong>Prediction:</strong> <span style="color: ${predictedClass === 'Real' ? '#5cb85c' : '#d9534f'};">${predictedClass}</span><br>
          <strong>Probability:</strong><br>
          &nbsp;&nbsp;&nbsp;<span>Real = ${probabilityReal.toFixed(2)}</span><br>
          &nbsp;&nbsp;&nbsp;<span>Fake = ${probabilityFake.toFixed(2)}</span>`;
    } catch (error) {
        document.getElementById('prediction-output').textContent = 
          `An error occurred: ${error.message}`;
    }
  });
  