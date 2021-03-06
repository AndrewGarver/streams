import React from 'react';
import{Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

// using plain Router rather than Browser router and tracking history in history.js file so that we can gain access in action creator for programmatic nav
const App = () => {
  return (
    // Note: Anything placed outside of a Route component is always visible (eg. Header)
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;