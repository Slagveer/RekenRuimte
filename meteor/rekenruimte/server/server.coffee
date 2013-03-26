Meteor.publish 'users', (options) ->
  Meteor.users.find options, # options as selector like $in: name: 'john'
    fields: # use fields to only publish specify fields you want to send.
      username: 1
      profile: 1
