const { Schema, model } = require('mongoose')

const articlesVotesSchema = new Schema({
  article: String,
  upvote: String,
  downvote: String
})

module.exports = model("articles_votes", articlesVotesSchema)
