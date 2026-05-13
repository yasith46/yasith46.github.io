const EMAILJS_SERVICE_ID = "REPLACE_WITH_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "REPLACE_WITH_TEMPLATE_ID";

function sendMail(event) {
    let params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(alert("Message Sent Successfully!"), function (err) {
        alert("Failed to send the message. Please try again.");
    });
}