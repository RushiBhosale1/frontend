var cd;
$(document).ready(function() {
    CreateCaptcha();
});

$(document).on('click', '.createCaptcha', function() {
    $("#WrongCaptchaError").text("");
    CreateCaptcha();
});

// Create Captcha
function CreateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');

    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $('#CaptchaImageCode').empty().append('<canvas id="CapCode" class="capcode" width="200" height="50"></canvas>')

    var c = document.getElementById("CapCode"),
        ctx = c.getContext("2d"),
        x = c.width / 2,
        img = new Image();

    img.src = name.captchaImg;
    img.onload = function() {
        var pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.font = "26px Roboto Slab";
        ctx.fillStyle = '#4ab19f';
        ctx.textAlign = 'center';
        ctx.setTransform(1, -0.12, 0, 1, 0, 15);
        ctx.fillText(cd, x, 30);
    };


}

// Validate Captcha
function ValidateCaptcha() {
    var string1 = removeSpaces(cd);
    var string2 = removeSpaces($('#UserCaptchaCode').val());
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}

// Remove Spaces
function removeSpaces(string) {
    return string.split(' ').join('');
}

function CheckCaptcha() {

    var result = ValidateCaptcha();
    if ($("#UserCaptchaCode").val() == "" || $("#UserCaptchaCode").val() == null || $("#UserCaptchaCode").val() == "undefined") {
        $('#UserCaptchaCode').focus();
    } else {
        if (result == false) {
            $('#WrongCaptchaError').text(name.invalidCaptcha).show();
            CreateCaptcha();
            $('#UserCaptchaCode').focus().select();
            return false;
        } else {
            $('#UserCaptchaCode').val('').attr('place-holder', name.enterCaptcha);
            // CreateCaptcha();
            return true;
        }
    }
}