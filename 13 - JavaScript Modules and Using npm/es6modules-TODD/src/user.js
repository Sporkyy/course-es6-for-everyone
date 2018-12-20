import slug from 'slug';
import { Base64 } from 'js-base64';
import { url } from './config';

export default function User(name, email, website) {
  return { name, email, website };
}

export function createUrl(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = Base64.encode(email);
  const photoUrl = `https://www.gravatar.com/avatar/${hash}`;
  return photoUrl;
}
