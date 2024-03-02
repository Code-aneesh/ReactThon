function setRating(value) {
    const messageElement = document.getElementById("feedback-message");
    messageElement.textContent = `You rated us ${value} stars! Thank you for your feedback.`;
}

function submitFeedback() {
    const name = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }
    

    
    console.log("Email:", email);
    console.log("Message:", message);

   
   
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function Feedback() {
    const html = `
        <div class="feedback-container">
            <h1>Rate Us</h1>
            <div class="rating" id="rating-container">
                <span data-value="1" onclick="setRating(1)">&#9733;</span>
                <span data-value="2" onclick="setRating(2)">&#9733;</span>
                <span data-value="3" onclick="setRating(3)">&#9733;</span>
                <span data-value="4" onclick="setRating(4)">&#9733;</span>
                <span data-value="5" onclick="setRating(5)">&#9733;</span>
            </div>
            <p id="feedback-message"></p>

            <form onsubmit="event.preventDefault(); submitFeedback();">
                <label for="lname">Name:</label>
                <input type="text" name="lname" id="lname" required>

                <label for="email">Email address:</label>
                <input type="email" name="email" id="email" required>

                <label for="message">Message:</label>
                <textarea rows="4" name="message" id="message" required></textarea>

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    `;

    content.classList.add('feedback');
    return html;
}

export default Feedback;
