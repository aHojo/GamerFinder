const express = require("express");
const router = express.Router();

const MatchPotentials = require("../public/logic/matchPotential");
let match = new MatchPotentials();
const gamers = require("../app/data/friend");

router.get("/gamers", function (req, res) {
    res.json(gamers);
});

router.post("/gamers", function (req, res) {




    // let tmp = Number.POSITIVE_INFINITY;
    const user = req.body;
    console.log(user);

    let userPotential = match.userPotential(user);

    //TODO push matches to an object with name (toidentify) and match score.
    let potentials = match.matchPotentials(user);

    let gamerMatch = match.match(potentials, userPotential);



    let soulmate = gamers.find((c) => c.name === gamerMatch.gamerName && c.name !== user.name);

    gamers.push(user);
    res.json(soulmate);
});

module.exports = router;