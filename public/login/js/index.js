$(document).ready(function(){    
    $('#loginBtn').click(function(){
        var loginEmail = $("#userInput").val();
        var loginPassword = $("#passInput").val();
        if (loginEmail && loginPassword) {
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
                success: function (data) {
                    console.log(data);
                }
            });
        }else{
            console.log("No Info");
        }
    });

    $('#signUpBtn').click(function(){
        var loginuserName = $("#emailInput").val();
        var loginEmail    = $("#userInput").val();
        var loginPassword = $("#passInput").val();
        if (loginEmail && loginPassword && loginuserName) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8080/signup',
                contentType: "application/json",
                xhrFields: {
                  withCredentials: true
                },
                data: JSON.stringify({
                  username: loginuserName,
                  email: loginEmail,
                  password: loginPassword
                }),
                dataType: 'json',
                success: function (data) {
                    console.log(data)
                }
            });
        }else{
            console.log("No Info");
        }
    });

    $('#loginPage').click(function(){
        window.location.href = 'http://localhost:8080/client/login'
    });
    $('#signUpPage').click(function(){
        window.location.href = 'http://localhost:8080/client/signup'
    });
});