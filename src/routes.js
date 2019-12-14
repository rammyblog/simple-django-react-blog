import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './components/containers/ArticleListView';
import ArticleDetail from './components/containers/ArticleDetailView';





const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/'  component={ArticleList}/> 
            <Route exact path='/:articleID'  component={ArticleDetail}/> 

        </div>
    )
}

export default BaseRouter;
