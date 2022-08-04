require('dotenv').config();

const env = 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	production:{
		APIKey : 'dau1GJ_EQKO6Vfy8GgQrkw',
		APISecret : '6akFQYEehtk9cHgooD5XQUQ2DTDbhgTRd2VZ'
	}
};

module.exports = config[env]
