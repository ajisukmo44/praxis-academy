var re = /(\w+)\@(\w+)\.(\w+)/g;

function testInfo(emailInput) {
    var OK = re.exec(emailInput.value);
    if (!OK)
        window.alert(emailInput.value + ' Format email yang anda inputkan salah');
    else
        window.alert('Hallo username anda adalah  ' + OK[1] + ', domain anda adalah  ' + OK[2] + '.' + OK[3]);
}