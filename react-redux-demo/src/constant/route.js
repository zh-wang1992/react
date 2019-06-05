import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Index from '../containers/Index'
import List from '../containers/ListPage'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/index" component={Index} />
            <Route path="/list" component={List} />
            {/* 没匹配到任何路由的时候显示NoMatch组件 */}
            {/* <Route component={NoMatch}/> */} 
            {/* 重定向 */}
            <Redirect to="/" />  
        </Switch>
    </BrowserRouter>
)