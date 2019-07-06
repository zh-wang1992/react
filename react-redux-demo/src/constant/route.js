import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Index from '../containers/Index'
import List from '../containers/ListPage'

export default (
    <BrowserRouter>    {/**webpack-dev-server 做了配置，所以本地开发使用hashrouter 和 browserrouter都可以 */}
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/list" component={List} />
            {/* 没匹配到任何路由的时候显示NoMatch组件 */}
            {/* <Route component={NoMatch}/> */} 
            {/* 重定向 */}
            {/* <Redirect to="/" />   */}
        </Switch>
    </BrowserRouter>
)