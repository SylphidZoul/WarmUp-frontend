import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { SpinnerToast } from '../components/SpinnerToast'

const Home = lazy(() => import('../pages/Home'))
const Post = lazy(() => import('../pages/Post'))
const CreatePost = lazy(() => import('../pages/CreatePost'))
const EditPost = lazy(() => import('../pages/EditPost'))
const NotFound = lazy(() => import('../pages/404'))

export const Routes = () => {
  return (
    <>
      <Suspense
        fallback={<SpinnerToast isFetching />}
      >
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts/create' exact component={CreatePost} />
          <Route path='/posts/edit/:id' exact component={EditPost} />
          <Route path='/posts/:id' exact component={Post} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}
