export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export const colors = [
        {
            name: "yellow",
            path: "../../../images/yellow.png"
        }, {
            name: "biege",
            path: "../../../images/biege.png"
        }, {
            name: "black",
            path: "../../..//images/black.png"
        }, {
            name: "blue",
            path: "../../../images/blue.png"
        }, {
            name: "brown",
            path: "../../../images/brown.png"
        }, {
            name: "gray",
            path: "../../../images/gray.png"
        }, {
            name: "green",
            path: "../../../images/green.png"
        }, {
            name: "light blue",
            path: "../../../images/light-blue.png"
        }, {
            name: "lime",
            path: "../../../images/lime.png"
        }, {
            name: "maroon",
            path: "../../../images/maroon.png"
        }, {
            name: "navy",
            path: "../../../images/navy.png"
        }, {
            name: "olive",
            path: "../../../images/olive.png"
        }, {
            name: "orange",
            path: "../../../images/orange.png"
        }, {
            name: "pink",
            path: "../../../images/pink.png"
        }, {
            name: "purple",
            path: "../../../images/purple.png"
        }, {
            name: "red",
            path: "../../../images/red.png"
        }
    ];

