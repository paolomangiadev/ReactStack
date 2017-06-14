import Quote from './quotes.model';
import * as res_handler from '../res_handler';
import config from '../../config';

import nodemailer from 'nodemailer';
import Promise from 'bluebird';
import * as templateService from './templateLoader';
import _ from 'lodash';
import path from 'path';

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

  if (req.files) {
    res.send(200, 'Files uploaded correctly');
    var data = req.body;
    console.log('request DATA: ' + JSON.stringify(data));
    console.log('---------------------------');
    console.log('---------------------------');
    console.log('request files: ' + JSON.stringify(req.files));
    var attachments = [];
    _.forEach(req.files, function(value, key) {
      console.log('key: ' + key,' value: ' + value);
      var fileName = path.parse(value.originalname);
      attachments.push(
        {
          'filename': fileName.name,
          'path': value.path,
          'contentType': value.mimetype,
          'encoding': value.encoding
      });
    });
  }
  else {
    console.log(JSON.stringify(req.body));
    var attachments = [];
  }

  let context = {
    name: req.body.NameSurname,
    mail: req.body.Email,
    apptype: req.body.AppType,
    budget: req.body.Budget,
    description: req.body.Description
  }

  //load the mail templates
  templateService.loadTemplates(context, 'followup').then((res) => {
    // //send the email
    return transporter.sendMail({ // setup email data with unicode symbols
        from: context.name + ' < ' + context.mail + ' >', // sender address
        to: 'paolo.mangia.dev@gmail.com', // list of receivers
        subject: res.subject, // Subject line
        text: res.text, // plain text body
        html: res.html, // html body
        attachments: attachments
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
