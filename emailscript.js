const EMAILJS_SERVICE_ID = "service_75e1vd7";
const EMAILJS_TEMPLATE_ID = "template_je89wuq";

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