

const db = require('./index');
const authHelpers = require('../auth/helpers.js');
const passport = require('../auth/local.js');
const dotenv = require('dotenv');
dotenv.load();
const multer = require('multer'),
  multerS3 = require('multer-s3'),
  fs = require('fs'),
  AWS = require('aws-sdk');

const nodemailer = require('nodemailer');
const { welcomeEmail } = require('../emails/email');
const { reminder } = require('../emails/email');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const moment = require('moment');
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);