# //TODO

# react-demo
use webpack+babel+redux set up react project







## webpack 
- webpack.config.js
- 入口文件

### webpack plugin

#### CommonsChunkPlugin
针对webpack配置使用多入口

#### DllPlugin
//TODO

本人配置遇到不少问题，让这个demo停滞很久  
配置插件，让webpack不用每次都构建第三方npm包；

- 新建一个webpack.dll.config.js文件
    - 入口只包含第三方库



## 配置步骤

### 安装webpack
全局安装  
`
npm install webpack -g
`

作为项目依赖  
`
npm install webpack --save-dev
`

配置webpack.config.js  
。。。。。。。


# react-redux

## connect
在此hoc返回class的构造函数中，

- initSelector
	- 调用selectorFactory，传入dispatch和selectorFactoryOptions，返回一个sourceSelector，	sourceSelector计算出nextprops
	- makeSelectorStateful，返回一个selector对象，第一个参数为sourceSelector
		- 为connect提供一个selector对象
			- run：用this.props作为参数，返回一个新的selector对象
			- shouldComponentUpdate，布尔值；决定被connect包裹的组件是否更新
			- props:sourceSelector计算出nextprops
			- error
- initSubscription
- shouldComponentUpdate：返回的组件是否更新，由selector对象的shouldComponentUpdate决定


### selectorFactory
源码注释为:   
selectorFactory is a func that is responsible for returning   
the selector function used to compute new props from state, props, and dispatch. 



## 客户端数据库 rxdb
// TODO  
// 不太会用，照着demo抄了一遍  
// 现在控制台报的都是404的错


## 样式
### 使用css module





