function sendEmail(){
  let parms = {
    name : "User Feedback",
    email : "user_feedback@gmail.com",
    subject : "Feedback from User",
    message: document.getElementById("message").value,
  };

  emailjs.send("service_5uptf6q", "template_5pbjy85",parms)
  .then(function(response){
    //show message sent successfully
    alert("Email Sent Successfully!");
    console.log("Success",response.status, response.text);
  })
  .catch(function(error){
    alert("Failed to send email. Please try again.");
    console.log("Failed!",error);
  });
}