Lessons = new Meteor.Collection("lessons");
Scores = new Meteor.Collection("scores");
Ranking = new Meteor.Collection("ranking");
Results = new Meteor.Collection("results");

// Scores --
//           {done: Boolean,
//           score: number,
//           lesson_id: String,
//           user_id: String,
//           timestamp: Number}

    //Lessons.remove({});
    //Scores.remove({});
    //Ranking.remove({});
    //Meteor.users.remove();
if (Lessons.find().count() === 0) {
    var data = [
        {name:"Maten: rekenen met maten decimeter",description:"Kies de juiste lengtemaat",questions:6,correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:10,points:1}/*,questions:
            [
                {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640",option2:"164",option3:"16400",answer:"164",points:"1"},
                {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720",option2:"17,2",option3:"172",answer:"172",points:"1"},
                {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80",option2:"8",option3:"800",answer:"80",points:"1"},
                {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"112",option2:"11,2",option3:"1120",answer:"112",points:"1"},
                {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131",option2:"13,1",option3:"13100",answer:"131",points:"1"},
                {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123",option2:"12,3",option3:"12300",answer:"123",points:"1"}
            ]
        }/*,
        {name: "Maten: rekenen met maten millimeter",description:"Kies de juiste lengtemaat",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:10,questions:
            [
                {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in millimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"1"},
                {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in millimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"1"},
                {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in millimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"1"},
                {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in millimeter",option1:"112 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"1"},
                {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in millimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"1"},
                {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in millimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"1"}
            ]
        },
        {name: "Maten: rekenen met maten centimeter",description:"Zoek de maten bij elkaar",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
            [
                {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in centimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"3"},
                {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in centimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in centimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in centimeter",option1:"1120 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"3"},
                {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in centimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in centimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
            ]
        },
        {name: "Maten: rekenen met maten 4",description:"Lengtematen zonder komma",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
            [
                {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"3"},
                {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1120 dm",option2:"11,2 dm",option3:"112 dm",answer:"112 dm",points:"3"},
                {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
            ]
        },
        {name: "Maten: rekenen met maten 5",description:"Lengtematen met komma",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
            [
                {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"3"},
                {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"112 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"3"},
                {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
            ]
        },
        {name: "Maten: rekenen met maten 6",description:"Hoeveel is het bij elkaar?",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
            [
                {question:"41 m + 750 dm",description:"Hoeveel m is het samen?",option1:"4850 m",option2:"485 m",option3:"1160 m",answer:"116 m",points:"3"},
                {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1120 dm",option2:"11,2 dm",option3:"112 dm",answer:"112 dm",points:"3"},
                {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
            ]
        }*/
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
        var list_id = Lessons.insert({index:i,name: data[i].name,description:data[i].description,correct:data[i].correct,incorrect:data[i].incorrect,time:data[i].time,questions:data[i].questions, points:data[i].points});
    }
}

Meteor.publish('lessons', function () {
    return Lessons.find();
});

Meteor.publish('scores', function () {
    return Scores.find();
});

Meteor.publish('ranking', function () {
    return Ranking.find();
});

Meteor.publish('results', function () {
    return Results.find();
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


Scores.allow({
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

Ranking.allow({
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

Results.allow({
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

        return Results.insert({lesson_id:options.lesson_id,user_id:options.user_id,result:options.result,timestamp:(new Date()).getTime()});
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

        return Scores.insert({lesson_id:options.lesson_id,user_id:options.user_id,score:options.score,time:options.time, timestamp:(new Date()).getTime()});
    },
    getScore: function (options) {
        options = options || {};
        //console.log(Scores.findOne({user_id:options.user_id,lesson_id:options.lesson_id},{fields: {score: 1}}));
        return Scores.findOne({user_id:options.user_id,lesson_id:options.lesson_id});
    },
    setRanking: function (options) {
        var found = false, users = [];
        Ranking.remove({});
        var scores = Scores.find({},{sort: {lesson_id: 1, score: -1, time: 1}}),uniqueScores;
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
                Ranking.insert({lesson_id: uniqueScores[i].lesson_id, score: uniqueScores[i].score, time: uniqueScores[i].time,users: users});
                users = [];
            }
        }
        return {};
    },
    resetResults: function () {
        Scores.remove({});
        Ranking.remove({});
        Results.remove({});
        Meteor.users.remove();
    }
});
