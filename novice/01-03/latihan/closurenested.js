var add = (function () {
    var counter = 0;
    return function (x) {
        if (x == 1) {
            return counter;
        } else {

            return counter = counter + 1;

        }


    };
})();

add();
add();
add();
add();
add();
add();

add();

document.write(add(1));