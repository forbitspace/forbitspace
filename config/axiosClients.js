import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import { _getCookie, _removeCookie } from '@config/helpers';
// For common config

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.baseURL = publicRuntimeConfig.backendUrl;

//
//set interceptors response
axios.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
	},
);
//end
//set interceptors request
axios.interceptors.request.use(
	function(config) {
		config.auth = {
			username: '',
			password: '',
		};
		return config;
	},
	function(error) {
		return Promise.reject(error);
	},
);

export default axios;
