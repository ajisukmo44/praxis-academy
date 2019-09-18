const mountains = [{
        name: "Kilimanjaro",
        height: 5895,
        place: "Tanzania"
    },
    {
        name: "Everest",
        height: 8848,
        place: "Nepal"
    },
    {
        name: "Mount Fuji",
        height: 3776,
        place: "Japan"
    },
    {
        name: "Vaalserberg",
        height: 323,
        place: "Netherlands"
    },
    {
        name: "Denali",
        height: 6168,
        place: "United States"
    },
    {
        name: "Popocatepetl",
        height: 5465,
        place: "Mexico"
    },
    {
        name: "Mont Blanc",
        height: 4808,
        place: "Italy/France"
    }
];


console.log(mountains[0].make)

for (var i = 0; i < mountains.length; i++) {

    document.write(mountains[i].name + ", " + mountains[i].height + ", " + mountains[i].place + " <br>")

}