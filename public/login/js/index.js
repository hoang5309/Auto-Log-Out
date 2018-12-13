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
                    var idleInterval = setInterval(timerIncrement, 3000); // every 3 seconds
                    var pingHere     = setInterval(pinging, 3000);        // ping every 3 second
                }
            });
        }else{
            console.log("No Info");
        }
    });

    $('#signUpBtn').click(function(){
        var loginuserName = $("#userInput").val();
        var loginEmail    = $("#emailInput").val();
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
    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });  
});

var idleTime = 0;
function timerIncrement() {
    idleTime++;
    console.log("Inactive time: " + idleTime);
    if (idleTime >= 5) { 
        console.log("work");
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/logout',
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
    
            },
            error: function () {
                console.log("Failure to logout");
            }
        });
        idleTime = 0;
    }
}
var checkforping = 0;
function pinging(){
    checkforping++;
    console.log("Ping: " + checkforping);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/reset',
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            console.log(response);
        },
        error: function () {
            console.log("Failure to ping");
        }
    });
}