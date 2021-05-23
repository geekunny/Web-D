const express = require("express");
const path = require("path");
const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "Your face could scare the shit out of a toilet",
    "Middle finger gets a boner whenever it sees you",
    "Seriously, you were the sperm that won? Ugh Gross!!!",
    "Annyone willing to fuck you is just too lazy to masturbate",
    "Your face looks like something I'd draw with my left hand",
    "Aha! I see the fuck-up fairy has visited again",
    "Is your ass jelous of the amount of shit that comes out of your mouth?",
    "You’re the reason I prefer animals to people.",
    "Your birth certificate is an apology letter from the condom manufacturer"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/insult", function(req, res) {
    res
        .json({
            complement: getRandomInsult()
        })
        .end();
});

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

app.use("/Public", express.static("./Public"));
app.listen(3000);
console.log("listening on http://localhost:3000");