import nodemailer from 'nodemailer';
import Promise from 'bluebird';
import mailparser from 'email-templates';
import path from 'path';
const EmailTemplate = mailparser.EmailTemplate;

export function loadTemplates (context, templatePath) {
  let template = new EmailTemplate(path.join(__dirname, 'mail-templates/' + templatePath));
  return new Promise ((resolve, reject) => {
    template.render(context, (err, res) => {
      if (res) {
        // console.log('we got a result: ' + JSON.stringify(res));
        resolve(res);
      }
      else {
        console.log('no results: ' + JSON.stringify(err));
      }
    });
  });
}
