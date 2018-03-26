import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'ramda';

// import * as Actions from '../../redux/actions/commentsAction';

if (process.env.WEBPACK) require('./home.pcss');

class Home extends Component {
  render() {
    return (
      <div>
        <p>Under construction</p>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

// Home.needs = () => Actions.fetchComments();

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
