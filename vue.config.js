//
const BASE_URL = process.env.NODE_ENV === 'production'
  ? './'
  : './'
module.exports = {
	lintOnSave:false,
	devServer: {
		port: 8083 ,// 端口,
		open: true,
		proxy:'http://test.520daikuan.com',
		
	},
	publicPath:BASE_URL,
	productionSourceMap: false,

}