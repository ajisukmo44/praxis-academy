        var plat = /^([A-Za-z]{1,2})(\s)*([0-9]{1,4})(\s)*([A-Za-z]{0,3})$/i;

        function test(noInput) {
            var OK = plat.exec(noInput.value);
            if (!OK)
                window.alert(' Nomor Kendaraan ' + noInput.value + ' bukan dari Indonesia');
            else
                window.alert('Plat Nomor Kendaraan ' + noInput.value + ' Berasal Dari Indonesia');
        }