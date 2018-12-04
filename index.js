$(document).ready(function(){    
    $('#loginBtn').click(function(){
        console.log('Hello');
        $.ajax({
            method: "POST",
            type: "json",
            url: "localhost:8080/login",
            data:{
                username: $('.user').val(),
                password: $('.pass').val()
            },
            success:function(data){
                console.log("Hello");
            }
        });
    });
});