import Quote from './quotes.model';
import * as res_handler from '../res_handler';
import config from '../../config';

import nodemailer from 'nodemailer';
import Promise from 'bluebird';
import * as templateService from './templateLoader';

// DEFINE THE TRANSPORTER
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

}
// Gets a sing item from DB
export function show(req, res) {
    res.send('GET ID handler for /quotes route.');
}
// Creates a sing item inside DB
export function create(req, res) {

  let context = {
    name: req.body.name,
    mail: req.body.sender
  }

  //load the mail templates
  templateService.loadTemplates(context, 'followup').then((res) => {
    //send the email
    return transporter.sendMail({ // setup email data with unicode symbols
        from: context.name + ' < ' + context.mail + ' >', // sender address
        to: 'paolo.mangia.dev@gmail.com', // list of receivers
        subject: res.subject, // Subject line
        text: res.text, // plain text body
        html: res.html // html body
      }, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
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
