import { pathToRegexp } from 'path-to-regexp';

const rules = [
  {
    path: '/',
    maxAge: 60 * 30,
  },
  {
    path: '/editor',
    maxAge: 60 * 60,
  },
  {
    path: '/post/:id',
    maxAge: 60 * 60,
  },
  {
    path: '/aboutMe',
    maxAge: 60 * 60 * 24,
  },
  {
    path: '/auth',
    maxAge: 60 * 60 * 12,
  },
];

export default function checkCacheRule(url) {
  return rules.find((rule) => pathToRegexp(rule.path).exec(url));
}
