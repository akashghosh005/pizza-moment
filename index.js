
//function to access values from pizza.html-------------
function MyFunc() {

    var name = document.forms["myform"]["fname"].value;
    var email = document.forms["myform"]["email"].value;
    var numb = document.forms["myform"]["Phnum"].value;
    name = String(name).trim();
    var permissibleEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    //validation check for name input------------
    if (name == "") {
        document.getElementById("error_name").innerHTML = "** name cannot be blank";
        return false;
    }
    if (/[0-9]/.test(String(name))) {
        document.getElementById("error_name").innerHTML = "** name cannot contain numbers";
        return false;
    }
    document.getElementById("error_name").innerHTML = "";


    //validation check for email input------------
    if (email == "" || !email.match(permissibleEmail)) {
        document.getElementById("error_email").innerHTML = "** email is not apt";
        return false;
    }
    document.getElementById("error_email").innerHTML = "";


    //validation check for number input------------
    if (String(numb).length !== 10) {
        document.getElementById("error_numb").innerHTML = "** number should contain 10 digits";
        return false;
    }
    document.getElementById("error_numb").innerHTML = "";


    //creation of json obj to share data among pages-------------
    const user = {
        user_name: name,
        user_email: email,
        user_numb: numb
    }
    window.localStorage.setItem('user', JSON.stringify(user));

}


//function to access values from pizza_delivery.html-------------
function validform() {
    var vegpizza1 = document.getElementsByName("vegpizza1");
    var vegpizza2 = document.getElementsByName("vegpizza2");
    var vegpizza3 = document.getElementsByName("vegpizza3");
    var paymethod = document.forms["myform"]["paymeth"].value;
    var coupcode = document.forms["myform"]["coup"].value;
    coupcode = String(coupcode).trim();

    //validation check for coupon input------------
    if (coupcode != "" && !/^PIZDIS/i.test(coupcode)) {
        document.getElementById("error_coup").innerHTML = "** coupon doesnot exist";
        return false;

    }
    document.getElementById("error_coup").innerHTML = "";

    //validation check for terms & cond check------------
    if (!document.getElementById("checkbox").checked) {
        document.getElementById("error_checkbox").innerHTML = "** Please accept the Terms and Conditions";
        return false;

    }
    document.getElementById("error_checkbox").innerHTML = "";

        var valid1_value = "";
        var valid3_value = "";
        var valid2_value = "";
        var valid1_bool = false;
        var valid2_bool = false;
        var valid3_bool = false;

    for (var i = 0; i < vegpizza1.length; i++) {
        if (vegpizza1[i].checked) {
            valid1_value = vegpizza1[i].value;
            valid1_bool = true;
            break;
        }
    }

    for (var i = 0; i < vegpizza2.length; i++) {
        if (vegpizza2[i].checked) {
            valid2_value = vegpizza2[i].value;
            valid2_bool = true;
            break;
        }
    }

    for (var i = 0; i < vegpizza3.length; i++) {
        if (vegpizza3[i].checked) {
            valid3_value = vegpizza3[i].value;
            valid3_bool = true;
            break;
        }
    }
    if (!valid1_bool) {
        alert("Please choose what type of pizza you want!");
        return false;
    }
    if (!valid2_bool) {
        alert("Please choose what type of pizza you want!");
        return false;
    }
    if (!valid3_bool) {
        alert("Please choose what type of pizza you want!");
        return false;
    }





    //creation of json obj to share data among pages-------------
    const pizza_user = {
        user_vegpizza1: valid1_value,
        user_vegpizza2: valid2_value,
        user_vegpizza3: valid3_value

    }
    window.localStorage.setItem('pizza_user', JSON.stringify(pizza_user));



    //document.getElementById("delivery").innerHTML = vari;
}