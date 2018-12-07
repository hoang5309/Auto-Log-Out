$(document).ready(function(){    
    $('#loginBtn').click(function(){
        console.log('Login Button Work!');
        var loginEmail = $("#userInput").val();
        var loginPassword = $("#passInput").val();
        if (loginEmail && loginPassword) {
            console.log("Here is The Info: " + loginEmail + " " + loginPassword);
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8080/login',
                contentType: "application/json",
                xhrFields: {
                  withCredentials: true
                },
                data: JSON.stringify({
                  email: loginEmail,
                  password: loginPassword
                }),
                dataType: 'json',
                success: function (response) {
                    console.log("Ajax work");
                }
            });
        }else{
            console.log("No Info");
        }
    });
});