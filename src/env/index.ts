import * as dotenv from 'dotenv';
const environment = process.env.NODE_ENV || 'production';
const config = dotenv.config({
	path: `./${environment}.env`,
});

if (config.error) {
	throw config.error;
}