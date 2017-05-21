# connect
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


## selectorFactory
源码注释为:   
selectorFactory is a func that is responsible for returning   
the selector function used to compute new props from state, props, and dispatch. 



# Provider

//TODO
