var Redis = require('ioredis');

var redis = new Redis({
  sentinels: [{ host: '127.0.0.1', port: 26379 }, { host: '127.0.0.1', port: 26380 }, { host: '127.0.0.1', port: 26381 }],
  name: 'mymaster'
});

redis.set('foo', 'bar');

setInterval(function () {
  redis.get('foo', function (err, result) {
    console.log(result);
  });
}, 1000);