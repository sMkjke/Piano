const white = ["A", "S", "D", "F", "G", "H", "J"];
const black = ["W", "E", "T", "Y", "U"];


document.addEventListener("keydown", function (event) {
    let key = event.key.toUpperCase();

    if (white.includes(key)) {
        checkButton(key, "white");
    } else if (black.includes(key)) {
        checkButton(key, "black");
    } else {
        console.log(`Unknown character '${key}' is pressed.`)
    }
});


function checkButton(key, color) {
    let audio = new Audio(color + "_keys/" + key + ".mp3");
    audio.play();
    console.log("The + " + key + " is pressed.");
}