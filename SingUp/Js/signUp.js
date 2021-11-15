function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function Validate() {
    const $result = $("#emailResult");
    const email = $("#emailInput").val();

    /*Email Validation*/
    $result.text("");
    if (validateEmail(email)) {
        $result.text("");
    }
    else {
        $result.text("Invalid email format");
        $result.css("color", "red");
    }


    /**/
    return false;
}


