const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '783143',
  key: 'e1523da116ded80d25cd',
  secret: 'bebae2cbafd208f358b4',
  cluster: 'us2',
  encrypted: true
});

export default pusher;
