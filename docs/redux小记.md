#参考文章
//直接去看这些文章吧~~~
- [深入到源码：解读 redux 的设计思路与用法](http://div.io/topic/1309)

# redux

redux三大概念：

- store
- action
- reducer

三者关系：  

只有触发reducer才会改变store，而dispatch一个action才能触发reducer  
一个应用中只能有一个store Tree


## store

创建一个store：

```
const store = createStore(
	rootReducer, 
	applyMiddleware(
		thunkMiddleware, 
		createLogger,
	)
)
```

其中：  

- createStore、applyMiddleware是来自redux的API
- rootReducer是combineReducers合并reducer的大的Reducer
- thunkMiddleware,createLogger则为redux的中间件

### store的属性
- dispatch
- getState
- subscribe
- replaceReducer --水平有限，没找到应用场景
- $$observable

具体见createStore的源码


## redux的API
使用最多的

- createStore
- applyMiddleware
- combineReducers
- bindActionCreators


### createStore
返回一个store

```
export default function createStore(reducer, preloadedState, enhancer) {
    
      return {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [$$observable]: observable
      }
}
```

三个参数:

- reducer
- preloadedState
- enhancer

当你省略preloadedState；它会判断你的第二个参数是否为function，  
即我们上面所见到的
```
applyMiddleware(
		thunkMiddleware, 
		createLogger,
	)
```
源码：
```
if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }
```

//TODO

