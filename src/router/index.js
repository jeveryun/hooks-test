import React, { Suspense, lazy } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const HomePage = lazy(() => import(/* webpackChunkName: "home" */ '../pages/home'))

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div>加载中...</div>}>
      <Switch>
        <Route path="/home" component={HomePage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)
