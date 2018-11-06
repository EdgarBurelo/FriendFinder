const path = require("path");
const friendArr = require("../data/friends.js");




module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendArr);
    });

    app.post("/api/friends", function(req, res) {
        //console.log(req.body.scores);
        let newFriend = req.body;
        let allDifArr = [];
        friendArr.forEach(element => {
            let posFirendScore = element.scores;
            //console.log(posFirendScore);
            let res = posFirendScore.reduce(function(vant,vact,ind){
                return vant + Math.abs(parseFloat(newFriend.scores[ind]) - vact);
            },0);
            //console.log(res);
            allDifArr.push(res);
            
            
        });
        
        let friendind = allDifArr.reduce((ant,act,ind) => {
            ant[0] = (!ant[0]) ? act : Math.min(ant[0], act);
            return ant;
        },[]);
        console.log(allDifArr);
        console.log(friendind);
        let closerFriend = friendArr[allDifArr.indexOf(friendind[0])];
        console.log(friendArr[allDifArr.indexOf(friendind[0])]);
        friendArr.push(newFriend);
        res.json(closerFriend)
    });
}