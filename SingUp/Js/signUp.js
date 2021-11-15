function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function Validate() {

    /*Email Validation*/
    const $result = $("#emailResult");
    const email = $("#emailInput").val();
    $result.text("");
    if (validateEmail(email)) {
        $result.text("");
    }
    else {
        $result.text("Invalid email format");
        $result.css("color", "red");
    }


    /*Username Validation*/
    const username=  $('#usernameInput').val()///get id with value
    const usernamepattern=/^[A-Za-z .]{6,15}$/;////Regular expression
    const $userResult = $("#usernameResult");
    $userResult.text("");

    if(usernamepattern.test(username))
    {
        $userResult.text("")
    }
    else
    {
        $userResult.text("Name is Invalid");
        $userResult.css("color", "red");
    }

    /*Password Validation*/
    


    return false;
}


