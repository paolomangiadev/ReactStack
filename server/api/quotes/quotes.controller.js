import Quote from './quotes.model';
import * as res_handler from '../res_handler';
import config from '../../config';

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.gmail.user,
      clientId: config.gmail.clientId,
      clientSecret: config.gmail.clientSecret,
      refreshToken: config.gmail.refreshToken,
      accessToken: config.gmail.accessToken
    }
});

// Gets a list items
export function index(req, res) {
  // return Quote.find().exec()
  //   .then(res_handler.respondWithResult(res))
  //   .catch(res_handler.handleError(res));
}
// Gets a sing item from DB
export function show(req, res) {
    res.send('GET ID handler for /quotes route.');
}
// Creates a sing item inside DB
export function create(req, res) {
  // const quote = new Quote(req.body);
  // chat.save()
  //   .then(res_handler.respondWithResult(res, 201))
  //   .catch(res_handler.handleError(res));

  // submitted form datas (client-side)
  const quote = {
    name: req.body.name,
    sender: req.body.sender,
    subject: req.body.subject,
    message: req.body.message
  }

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.name + ' <' + req.body.sender + '>', // sender address
      to: 'paolo.mangia.dev@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      text: quote.message, // plain text body
      html: '<b>' + req.body.message + '</b>' // html body
  };

  //send email
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
// Updates a sing item inside DB
export function update(req, res) {
    res.send('PUT handler for /quotes route.');
}
// Delete a sing item inside DB
export function destroy(req, res) {
    res.send('DELETE handler for /quotes route.');
}
