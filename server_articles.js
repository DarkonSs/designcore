// // const express = require('express')
// // const app = express()
// // var cors = require('cors')
// // const port = 5000
// // var mongoose = require('mongoose');
// // const DOC = document.queryselector('article-vote-up');
// // app.use(cors())
// //
// //
// //
// // app.get('/', function(req, res) {
// //   res.sendFile(__dirname + '/faq/articles/What_is_Design_Core-001.html');
// // });
// //
// // app.post('/', function(req, res) {
// //
// // (async () => {
// //   const data = await Votes.findOneAndUpdate({
// //     article: '001',
// //     upvote: '54564562',
// //     downvote: 'sfsdf'
// //   })
// // })()
// //
// // });
// //
// // app.listen(3300, () => {
// //   console.log(`Example app listening at http://localhost:${port}`)
// // })
//
// console.log('Server-side code running');
//
// const express = require('express');
// var mongoose = require('mongoose');
// const app = express();
//
// // serve files from the public directory
// // app.use(express.static('public'));
//
// var {
//   mongooseConnectionString
// } = require("./config.json");
// mongoose.connect(mongooseConnectionString, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// }).then(() => console.log('Connecting to MongoDB'))
//
// const {
//   Schema,
//   model
// } = require('mongoose')
//
// const articlesVotesSchema = new Schema({
//   article: String,
//   upvote: String,
//   downvote: String
// })
//
// const Votes = model("articles_votes", articlesVotesSchema)
//
//   // start the express web server listening on 8080
//   app.listen(8080, () => {
//     console.log('listening on 8080');
//   });
//
// // serve the homepage
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/faq/articles/What_is_Design_Core-001.html');
// });
//
// app.post('/clicked', (req, res) => {
//   const click = {clickTime: new Date()};
//   console.log(click);
//   console.log(Votes);
//
//   db.collection('clicks').save(click, (err, result) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('click added to db');
//     res.sendStatus(201);
//   });
// });
