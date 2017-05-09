var twitter = require('twitter');
var config = require('config');

var twitter_config = config.get('Twitter');
var client = new twitter({
  consumer_key: twitter_config.get('consumer_key'),
  consumer_secret: twitter_config.get('consumer_secret'),
  access_token_key: twitter_config.get('access_token_key'),
  access_token_secret: twitter_config.get('access_token_secret')
});

var params = {q: "参加者募集！参戦ID", lang: 'ja', locale: 'ja', result_type: 'recent'};

client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
