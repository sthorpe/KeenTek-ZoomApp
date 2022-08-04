require('dotenv').config();

const env = 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	production:{
		APIKey : process.env.ZOOMAPIKEY,
		APISecret : process.env.ZOOMAPISECRET
	}
};

module.exports = config[env]
