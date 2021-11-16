function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function Validate() {

    /*Email Validation*/
    const $result = $("#emailResult");
    const email = $("#emailInput").val();
    $result.text("");
    if (!validateEmail(email)) {
        $result.text("Error: invalid email format");
        $result.css("color", "red");
    }


    /*Username Validation*/
    const username=  $('#usernameInput').val();
    const usernamepattern=/^[A-Za-z .]{6,15}$/;////Regular expression
    const $userResult = $("#usernameResult");
    $userResult.text("");

    if(!usernamepattern.test(username))
    {
        $userResult.text("Error: name is invalid");
        $userResult.css("color", "red");
    }

    /*Password Validation*/
    const password = $('#passwordInput').val();
    const passwordConfirm = $('#passwordInputConfirm').val();
    const $passwordResult = $("#passwordResult")
    const $passwordConfirmResult = $("#passwordConfirmResult");
    $passwordConfirmResult.text("");
    $passwordResult.text("");

    if(password.length < 7){
        $passwordResult.text("Error: minim 7 characters");
        $passwordResult.css("color", "red");
    }
    if(password.length > 25){
        $passwordResult.text("Error: maxim 25 characters");
        $passwordResult.css("color", "red");
    }
    re = /[0-9]/;
    if(!re.test(password)) {
        $passwordResult.text("Error: password must contain at least one number (0-9)!");
        $passwordResult.css("color", "red");
        return false;
    }
    re = /[a-z]/;
    if(!re.test(password)) {
        $passwordResult.text("Error: password must contain at least one lowercase letter (a-z)!");
        $passwordResult.css("color", "red");
        return false;
    }
    re = /[A-Z]/;
    if(!re.test(password)) {
        $passwordResult.text("Error: password must contain at least one uppercase letter (A-Z)!");
        $passwordResult.css("color", "red");
        return false;
    }

    if (password != passwordConfirm){
        $passwordConfirmResult.text("Error: passwords are not the same!");
        $passwordConfirmResult.css("color", "red");
        return false;
    }

    return false;
}


