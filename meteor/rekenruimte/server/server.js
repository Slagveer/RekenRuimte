"use strict";

var rekenruimte = rekenruimte || (function(){
    var stage = {}, canvas, _lessons = new Meteor.Collection("lessons"), _scores = new Meteor.Collection("scores"),
        _ranking = new Meteor.Collection("ranking"), _results = new Meteor.Collection("results");
    return {
        lessons : _lessons,
        scores : _scores,
        ranking : _ranking,
        results : _results
    }
})();

if (rekenruimte.lessons.find().count() === 0) {
    var data = [
        {name:"Maten: rekenen met ruimteschip maten decimeter",description:"Kies de juiste lengtemaat",callId:"level1",questions:6,correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:10,points:1},
        {name:"Maten: rekenen met ruimtehal maten decimeter",description:"Kies de juiste lengtemaat",callId:"level2",questions:6,correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:10,points:1},
        {name:"Maten: rekenen met astronaut maten decimeter",description:"Sleep de astronaut naar de juiste lengtemaat",callId:"level3",questions:6,correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:10,points:1}
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
        var list_id = rekenruimte.lessons.insert({index:i,name: data[i].name,description:data[i].description,callId:data[i].callId,correct:data[i].correct,incorrect:data[i].incorrect,time:data[i].time,questions:data[i].questions, points:data[i].points});
    }
}

Meteor.publish('lessons', function () {
    return rekenruimte.lessons.find();
});

Meteor.publish('scores', function () {
    return rekenruimte.scores.find();
});

Meteor.publish('ranking', function () {
    return rekenruimte.ranking.find();
});

Meteor.publish('results', function () {
    return rekenruimte.results.find();
});

Meteor.publish(null, function () {
    return Meteor.users.find({},{fields:{username:1,profile:1}});
});

Accounts.config({sendVerificationEmail:false,forbidClientAccountCreation:true});
if(!Meteor.users.findOne({username:"admin"})){
    //Accounts.createUser({username:"admin",password:"admin",email:"digitalrox@gmail.com",profile:{name:"administrators"}});
}

if (Meteor.users.find().count() === 0) {
    var users = [
        {username:"admin",password:"admin",email:"slagveer@gmail.com",profile:{name:"admin",role:"administrator"}},
        {username:"joan",password:"123456",email:"joan.rogers.slagveer@gmail.com",profile:{name:"joan admin",role:"administrator"}},
        {username:"patric",password:"123456",email:"patric.slagveer@gmail.com",profile:{name:"patric admin",role:"administrator"}},
        {username:"marcus",password:"123456",email:"marcus.slagveer@gmail.com",profile:{name:"marcus",role:"gamer"}},
        {username:"oscar",password:"123456",email:"oscar.slagveer@gmail.com",profile:{name:"oscar",role:"gamer"}},
        {username:"curtis",password:"123456",email:"curtis.slagveer@gmail.com",profile:{name:"curtis",role:"gamer"}},
        {username:"aurang",password:"123456",email:"*******@gmail.com",profile:{name:"aurang",role:"gamer"}},
        {username:"derrick",password:"123456",email:"derrick.slagveer@gmail.com",profile:{name:"derrick",role:"gamer"}},
        {username:"tester",password:"abcdefg",email:"tester@gmail.com",profile:{name:"tester",role:"gamer"}}
    ];
    for (var i = 0,l =  users.length; i < l; i++){
        Accounts.createUser(users[i]);
    }
}

// Validate username, sending a specific error message on failure.
Accounts.validateNewUser(function (user) {
    if (user.username && user.username.length >= 5)
        return true;
    throw new Meteor.Error(403, "Username must have at least 3 characters");
});
// Validate username, without a specific error message.
Accounts.validateNewUser(function (user) {
    return user.username !== "root";
});

Accounts.onCreateUser(function(options, user) {
    var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
    user.dexterity = d6() + d6() + d6();
    // We still want the default hook's 'profile' behavior.
    if (options.profile)
        user.profile = options.profile;
    return user;
});


rekenruimte.scores.allow({
    insert: function (lessonId, userId, score, time) {
        return false; // no cowboy inserts -- use createStore method
    },
    update: function (lessonId, userId, score, time, fields, modifier) {

        var allowed = ["lesson_id", "user_id", "score", "time"];
        if (_.difference(fields, allowed).length)
            return false; // tried to write to forbidden field

        // A good improvement would be to validate the type of the new
        // value of the field (and if a string, the length.) In the
        // future Meteor will have a schema system to makes that easier.
        return true;
    },
    remove: function (userId, score, time) {
        // You can only remove scores that you own.
        return score.user_id === userId;
    }
});

rekenruimte.ranking.allow({
    insert: function (lessonId,userId,score,time) {
        return false; // no cowboy inserts -- use createParty method
    },
    update: function (userId, score, fields, modifier) {

        var allowed = [];
        if (_.difference(fields, allowed).length)
            return false; // tried to write to forbidden field

        // A good improvement would be to validate the type of the new
        // value of the field (and if a string, the length.) In the
        // future Meteor will have a schema system to makes that easier.
        return true;
    },
    remove: function () {
        // You can only remove scores that you own.
        return false;
    }
});

rekenruimte.results.allow({
    insert: function (lessonId,userId,result,question) {
        return false; // no cowboy inserts
    },
    update: function (lessonId, userId, fields, modifier) {
        return false;
    },
    remove: function () {
        return false;
    }
});

Meteor.methods({
    createResult: function (options) {
        options = options || {};
        if (! (typeof options.user_id === "string" && options.user_id.length && typeof options.lesson_id === "string" &&
            options.lesson_id.length &&
            Object.prototype.toString.call( options.result ) === '[object Array]'))
            throw new Meteor.Error(400, "Required parameter missing");

        return rekenruimte.results.insert({lesson_id:options.lesson_id,user_id:options.user_id,result:options.result,timestamp:(new Date()).getTime()});
    },
    createScore: function (options) {
        options = options || {};
        if (! (typeof options.user_id === "string" && options.user_id.length && typeof options.lesson_id === "string" &&
            options.lesson_id.length &&
            typeof options.score === "number" && options.score >= 0 && typeof options.time === "number" && options.time >= 0))
            throw new Meteor.Error(400, "Required parameter missing");
        if (options.score > 1000)
            throw new Meteor.Error(413, "Score too high");
        if (! this.userId)
            throw new Meteor.Error(403, "You must be logged in");

        return rekenruimte.scores.insert({lesson_id:options.lesson_id,user_id:options.user_id,score:options.score,time:options.time, timestamp:(new Date()).getTime()});
    },
    getScore: function (options) {
        options = options || {};
        //console.log(rekenruimte.scores.findOne({user_id:options.user_id,lesson_id:options.lesson_id},{fields: {score: 1}}));
        return rekenruimte.scores.findOne({user_id:options.user_id,lesson_id:options.lesson_id});
    },
    setRanking: function (options) {
        var found = false, users = [], ranking = {};
        rekenruimte.ranking.remove({});
        var scores = rekenruimte.scores.find({},{sort: {lesson_id: 1, score: -1, time: 1}}),uniqueScores;
        if (typeof scores !== "undefined"){
            scores = scores.fetch();
            uniqueScores = _.unique(scores);
            for(var i= 0,l=uniqueScores.length;i<l;i++){
                for(var j= 0,ll=scores.length;j<ll;j++){
                    if(uniqueScores[i].lesson_id === scores[j].lesson_id && uniqueScores[i].score === scores[j].score && uniqueScores[i].time === scores[j].time){
                        if(users.indexOf(scores[j].user_id) === -1){
                            users.push(scores[j].user_id);
                        }
                    }
                }
                ranking = {lesson_id: uniqueScores[i].lesson_id, score: uniqueScores[i].score, time: uniqueScores[i].time,users: users};
                if(typeof rekenruimte.ranking.findOne(ranking) === "undefined"){
                    rekenruimte.ranking.insert({lesson_id: uniqueScores[i].lesson_id, score: uniqueScores[i].score, time: uniqueScores[i].time,users: users});
                }
                users = [];
            }
        }
        return {};
    },
    resetResults: function () {
        rekenruimte.scores.remove({});
        rekenruimte.ranking.remove({});
        rekenruimte.results.remove({});
        Meteor.users.remove();
    }
});
