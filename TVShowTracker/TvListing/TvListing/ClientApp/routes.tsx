import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { UserShows } from './components/UserShows';
import { Search } from './components/search';

export const routes = <Layout>
    <Route exact path='/' component={Search} />
    <Route path='/MyShows' component={UserShows}/>
</Layout>;
