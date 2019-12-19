import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './components/containers/ArticleListView';
import ArticleDetail from './components/containers/ArticleDetailView';
import Login from './components/containers/Login';
import Signup from './components/containers/Signup';





const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/'  component={ArticleList}/> 
            <Route exact path='/articles/:articleID/'  component={ArticleDetail}/> 
            <Route exact path='/login/'  component={Login}/> 
            <Route exact path='/signup/'  component={Signup}/> 


        </div>
    )
}

export default BaseRouter;
