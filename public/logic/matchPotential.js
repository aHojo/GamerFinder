const gamers = require("../../app/data/friend");

const MatchPotentials = function () {

    this.matchPotentials = function (user) {
        let potentials = [];
        for(let i = 0; i < gamers.length; i++){
            let differences = 0;

            for(let x = 0; x < gamers[i].scores.length; x++) {
                differences += Math.abs(gamers[i].scores[x] - user.scores[x]);
            }

            potentials.push({"gamerName": gamers[i].name, "potential": differences});

        };
        console.log(potentials);
        return potentials;
    }

    this.userPotential = function (user) {
        let userPotential = 0;

        for(let x = 0; x < user.scores.length; x++) {
            userPotential += parseInt(user.scores[x]);
        }
        console.log(`userPotential ${userPotential}`);
        return userPotential;
    };

    this.match = function (gamers, userScore) {
        console.log("Gamers " + JSON.stringify(gamers));
        console.log("User Score " + userScore);
        let smallestDifference = Number.POSITIVE_INFINITY;
        let match;

        for (let i = 0; i < gamers.length; i++) {
                let diff = Math.abs(parseInt(userScore) - parseInt(gamers[i].potential));

            if ( diff < smallestDifference) {
                console.log(diff)
                smallestDifference = diff;
                match = gamers[i];
            }
        }
        return match;
    }
};

module.exports = MatchPotentials;