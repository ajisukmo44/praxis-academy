function CelsiusConverter() {
    document.converter.fahrenheit.value = (document.converter.celsius.value * 9 / 5) + 32
}

function FahrenheitConverter() {
    document.converter.celsius.value = (document.converter.fahrenheit.value - 32) * 5 / 9
}