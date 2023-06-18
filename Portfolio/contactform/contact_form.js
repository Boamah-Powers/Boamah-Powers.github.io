function sendEmail() {
	Email.send({
		SecureToken: "b09083f8-b406-494e-8f65-23d9a40ac779",
	    To : 'kwaabp24@gmail.com',
	    From : document.getElementById("email").value,
	    Subject : "New Contact Form Enquiry",
	    Body : "Name: " + document.getElementById("name").value
	    	+ "<br> Email: " + document.getElementById("email").value
	    	+ "<br> Phone: " + document.getElementById("phone").value
	    	+ "<br> Message: " + document.getElementById("message").value
	}).then(
	  message => alert("Message sent successfully")
	);
}