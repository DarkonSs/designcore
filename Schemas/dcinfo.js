const { Schema, model } = require('mongoose')

const dcinfoSchema = new Schema({
  name: String,
  id: String,
  total_members: String,
  bots: String,
  online_members: String,
  channels: String,
  categories: String,
  voice_channels: String,
  roles: String,
  emojis: String,
  stickers: String

})

module.exports = model("designcore_info", dcinfoSchema)
