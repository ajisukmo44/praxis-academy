var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;

function testInfo(phoneInput) {
    var OK = re.exec(phoneInput.value);
    if (!OK)
        window.alert(phoneInput.value + ' isn\'t a phone number with area code!');
    else
        window.alert('Thanks, your phone number is ' + OK[0]);
}