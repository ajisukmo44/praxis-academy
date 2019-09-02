var size = 8;
var board = "";

for (var i = 0; i < size; i++) {
    for (var x = 0; x < size; x++) {
        if ((i + x) % 2 == 0)
            board += document.write("&nbsp;");
        else
            board += document.write("#");
    }
    board += document.write("<br>");
}

console.log(board);