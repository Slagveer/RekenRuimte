Meteor.autosubscribe ->
  options = {$or: [{"username": 'admin'},{"username": 'patric'},{"username": 'xxxxxx'}]}
  Meteor.subscribe 'users', options, ->
    if Meteor.users.find().count()
      console.log Meteor.users.find(options).count()
      return Meteor.users.find(options)