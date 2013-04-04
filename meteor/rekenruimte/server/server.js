Lessons = new Meteor.Collection("lessons");
Scores = new Meteor.Collection("scores");

// Scores --
//           {done: Boolean,
//           score: number,
//           lesson_id: String,
//           user_id: String,
//           timestamp: Number}

    //Lessons.remove({});
    //Scores.remove({});
    //Meteor.users.remove();
    if (Lessons.find().count() === 0) {
        var data = [
            {name: "Maten: lengtematen 1",description:"Splits de lengtemaat",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:10,questions:
                [
                    {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"1"},
                    {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"1"},
                    {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"1"},
                    {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"112 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"1"},
                    {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"1"},
                    {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"1"}
                ]
            },
            {name: "Maten: lengtematen 2",description:"Kies de juiste lengtemaat",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
                [
                    {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"2"},
                    {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"2"},
                    {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"2"},
                    {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1120 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"2"},
                    {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"2"},
                    {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"2"}
                ]
            },
            {name: "Maten: lengtematen 3",description:"Zoek de maten bij elkaar",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
                [
                    {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"3"},
                    {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                    {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                    {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1120 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"3"},
                    {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                    {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
                ]
            },
            {name: "Maten: lengtematen 4",description:"Lengtematen zonder komma",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
                [
                    {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"3"},
                    {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                    {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                    {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1120 dm",option2:"11,2 dm",option3:"112 dm",answer:"112 dm",points:"3"},
                    {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                    {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
                ]
            },
            {name: "Maten: lengtematen 5",description:"Lengtematen met komma",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
                [
                    {question:"9,2 m + 7,2 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1640 dm",option2:"164 dm",option3:"16400 dm",answer:"164 dm",points:"3"},
                    {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                    {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                    {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"112 dm",option2:"11,2 dm",option3:"1120 dm",answer:"112 dm",points:"3"},
                    {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                    {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
                ]
            },
            {name: "Maten: lengtematen 6",description:"Hoeveel is het bij elkaar?",correct:"Goed gedaan!",incorrect:"Helaas, het door jou gegeven antwoord (###) is niet goed. Het antwoord had moeten zijn: ",time:8,questions:
                [
                    {question:"41 m + 750 dm",description:"Hoeveel m is het samen?",option1:"4850 m",option2:"485 m",option3:"1160 m",answer:"116 m",points:"3"},
                    {question:"8,4 m + 8,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1720 dm",option2:"17,2 dm",option3:"172 dm",answer:"172 dm",points:"3"},
                    {question:"5,7 m + 2,3 m",description:"Reken uit: geef je antwoord in decimeter",option1:"80 dm",option2:"8 dm",option3:"800 dm",answer:"80 dm",points:"3"},
                    {question:"4,1 m + 7,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"1120 dm",option2:"11,2 dm",option3:"112 dm",answer:"112 dm",points:"3"},
                    {question:"3,3 m + 9,8 m",description:"Reken uit: geef je antwoord in decimeter",option1:"131 dm",option2:"13,1 dm",option3:"13100 dm",answer:"131 dm",points:"3"},
                    {question:"8,2 m + 4,1 m",description:"Reken uit: geef je antwoord in decimeter",option1:"123 dm",option2:"12,3 dm",option3:"12300 dm",answer:"123 dm",points:"3"}
                ]
            }
        ];

        var timestamp = (new Date()).getTime();
        for (var i = 0; i < data.length; i++) {
            var list_id = Lessons.insert({name: data[i].name,description:data[i].description,correct:data[i].correct,incorrect:data[i].incorrect,time:data[i].time,questions:data[i].questions});
        }
    }

    Meteor.publish('lessons', function () {
        return Lessons.find();
    });

    Meteor.publish('scores', function () {
        return Scores.find();
    });

    Meteor.publish(null, function () {
        return Meteor.users.find({},{fields:{username:1,profile:1}});
    });

    Accounts.config({sendVerificationEmail:false,forbidClientAccountCreation:true});
    if(!Meteor.users.findOne({username:"admin"})){
        Accounts.createUser({username:"admin",password:"admin",email:"digitalrox@gmail.com",profile:{name:"administrators"}});
    }

    if (Meteor.users.find().count() === 0) {
        var users = [
            {username:"admin",password:"admin",email:"patric.slagveer@gmail.com",profile:{name:"admin"}},
            {username:"joan",password:"123456",email:"joan.rogers.slagveer@gmail.com",profile:{name:"joan admin"}},
            {username:"patric",password:"123456",email:"patric.slagveer@gmail.com",profile:{name:"patric admin"}},
            {username:"marcus",password:"123456",email:"marcus.slagveer@gmail.com",profile:{name:"marcus"}},
            {username:"oscar",password:"123456",email:"oscar.slagveer@gmail.com",profile:{name:"oscar"}},
            {username:"curtis",password:"123456",email:"curtis.slagveer@gmail.com",profile:{name:"curtis"}},
            {username:"derrick",password:"123456",email:"derrick.slagveer@gmail.com",profile:{name:"derrick"}}
        ]
        for (var i = 0,l =  users.length; i < l; i++){
            Accounts.createUser(users[i]);
        }
    }

    // Validate username, sending a specific error message on failure.
    Accounts.validateNewUser(function (user) {
        if (user.username && user.username.length >= 3)
            return true;
        throw new Meteor.Error(403, "Username must have at least 3 characters");
    });
    // Validate username, without a specific error message.
    Accounts.validateNewUser(function (user) {
        return user.username !== "root";
    });

    Scores.allow({
        insert: function (userId, score) {
            return false; // no cowboy inserts -- use createParty method
        },
        update: function (userId, score, fields, modifier) {

            var allowed = ["lesson_id", "user_id", "score"];
            if (_.difference(fields, allowed).length)
                return false; // tried to write to forbidden field

            // A good improvement would be to validate the type of the new
            // value of the field (and if a string, the length.) In the
            // future Meteor will have a schema system to makes that easier.
            return true;
        },
        remove: function (userId, score) {
            // You can only remove parties that you created and nobody is going to.
            return score.user_id === userId;
        }
    });

    Meteor.methods({
        // options should include: title, description, x, y, public
        createScore: function (options) {
            options = options || {};
            if (! (typeof options.user_id === "string" && options.user_id.length && typeof options.lesson_id === "string" &&
                options.lesson_id.length &&
                typeof options.score === "number" && options.score >= 0))
                throw new Meteor.Error(400, "Required parameter missing");
            if (options.score > 1000)
                throw new Meteor.Error(413, "Score too high");
            if (! this.userId)
                throw new Meteor.Error(403, "You must be logged in");

            return Scores.insert({lesson_id:options.lesson_id,user_id:options.user_id,score:options.score,timestamp:(new Date()).getTime()});
        },
        getScore: function (options) {
            options = options || {};
            //console.log(Scores.findOne({user_id:options.user_id,lesson_id:options.lesson_id},{fields: {score: 1}}));
            return Scores.findOne({user_id:options.user_id,lesson_id:options.lesson_id});
        }
    });
