$(document).ready(function() {
	$("#signup-form").submit(function(e){
		e.preventDefault(); 
		
		var $form = $(this),
		email = $form.find('input[name="email"]').val(),
		url = $form.attr('action');
		
		$.post(url, {email:email},
		  function(data) {
		      if(data.result)
		      {
		      	if(data.result=="Some fields are missing.")
		      	{
			      	$("#status").text("Please fill in your email.");
			      	$("#status").css("color", "red");
		      	}
		      	else if(data.result=="Invalid email address.")
		      	{
			      	$("#status").text("Your email address is invalid.");
			      	$("#status").css("color", "red");
		      	}
		      	else if(data.result=="Invalid list ID.")
		      	{
			      	$("#status").text("Your list ID is invalid.");
			      	$("#status").css("color", "red");
		      	}
		      	else if(data.result=="Already subscribed.")
		      	{
			      	$("#status").text("You're already subscribed!");
			      	$("#status").css("color", "red");
		      	}
		      	else
		      	{
			      	$("#status").text("You're subscribed!");
			      	$("#status").css("color", "green");
			      	window.location.replace("http://romcomics.io/contest2021entered/");
		      	}
		      }
		      else
		      {
		      	alert("Sorry, unable to subscribe. Please try again later!");
		      }
		  }
		);
	});
	$("#signup-form").keypress(function(e) {
		    if(e.keyCode == 13) {
		    	e.preventDefault(); 
				$(this).submit();
		    }
		});
	$("#submit-btn").click(function(e){
		e.preventDefault(); 
		$("#signup-form").submit();
	});
});