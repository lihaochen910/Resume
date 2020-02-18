module.exports = {
	publicPath         : process.env.NODE_ENV === 'production' ? '/Resume/' : '/',
	// assetsDir          : '/docs/',
	outputDir          : 'dist',
	filenameHashing    : false,
	productionSourceMap: process.env.NODE_ENV !== 'production',
	pages              : {
		index: {
			// page 的入口
			entry   : 'src/main.js',
			// 模板来源
			template: process.env.NODE_ENV === 'production' ? 'docs/index.html' : 'public/index-dev.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title   : 'Index Page',
		},
	},
	css                : { loaderOptions: { css: { url: false } } },
	configureWebpack   : (config) => {
		config.module.rules = [
			...config.module.rules,
			{
				test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
				loader : 'skeleton-loader',
				options: { procedure: (content) => `${content} export default LeaderLine` },
			},
		]
	},
	devServer          : {
		open   : false,                              //配置自动启动浏览器
		host   : 'localhost',
		port   : 8080,
		https  : false,
		hotOnly: false,                             // https:{type:Boolean}
		proxy  : {                                  // 配置跨域
			'/api': {
				target      : 'http://xxx.xx.xxx.xxx:8080', //源地址
				changeOrigin: true,                  //改变源
				ws          : true,                  //是否代理websockets
				pathRewrite : {
					'^/api': '',
				},
			},
		},                                           // 配置跨域处理,只有一个代理
		before : app => {
		},
	},
}
