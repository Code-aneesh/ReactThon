export default function Contact() {
    const html = `
        <form>
            <label for="fname">First Name:</label>
            <input type="text" name="fname" id="fname">

            <label for="lname">Last Name:</label>
            <input type="text" name="lname" id="lname">

            <label for="email">Email address:</label>
            <input type="email" name="email" id="email">

            <label for="message">Message:</label>
            <textarea rows="4" name="message" id="message"></textarea>

            <button>SUBMIT</button>
        </form>
    `;

    content.classList.add('contact');
    return html;
}