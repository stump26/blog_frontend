import Redis from 'ioredis';
import checkCacheRule from './checkCacheRule';

const redis = new Redis();

function createCacheKey(url) {
  return `ssr:${url}`;
}

export default class CacheManger {
  async get(url) {
    try {
      const html = await redis.get(createCacheKey(url));
      if (html) {
        console.log(`Read cache: ${url}`);
      }
      return html;
    } catch (e) {
      return null;
    }
  }

  check(url) {
    return checkCacheRule(url);
  }

  set(url, html) {
    const rule = checkCacheRule(url);
    if (!rule) return;
    return redis.set(createCacheKey(url), html);
  }
}
