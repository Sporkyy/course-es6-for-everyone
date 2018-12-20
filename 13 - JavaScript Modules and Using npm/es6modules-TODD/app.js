import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';
import User, { createUrl, gravatar } from './src/user';

const todd = new User('Todd Sayre', 'captain.friendly@gmail.com', 'awesome.horse');
// console.log(todd);
const profileUrl = createUrl(todd.name);
// console.log(profileUrl);
const image = gravatar(todd.email);
console.log(image);
