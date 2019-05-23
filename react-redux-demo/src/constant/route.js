import React from 'react'
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom'
import Index from '../containers/index'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            {/* <Route component={NoMatch}/> */}   //没匹配到任何路由的时候显示NoMatch组件
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
)