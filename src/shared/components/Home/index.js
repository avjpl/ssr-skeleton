import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import * as Actions from '../../redux/actions/commentsAction';

if (process.env.WEBPACK) require('./home.pcss');

class Home extends Component {

  componentDidMount() {
    const { comments, fetchComments } = this.props;

    console.log('componentDidMount');
    if (comments.length === 0) {
      fetchComments();
    }
  }

  render() {
    return (
      <div>
        <div id="top-container">
          <div id="titles">
            <h1>Where will you go?</h1>
            <p className="subtitle">Visit the top 3 UK cities for a flat £100.</p>
          </div>

          <img src='../../../images/gate.jpg' className="profile" />
        </div>

        <div id="packages">
          <div className="columns">
            <h2>San Francisco, CA</h2>

            <p>Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non finibus augue.
              Proin eleifend ultrices diam, et venenatis elit suscipit in. Morbi mollis risus vitae consectetur iaculis.</p>

            <button id="ca">Choose this package <i className="hand"></i></button>
          </div>

          <div className="columns">
            <h2>New York, NY</h2>

            <p>Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non finibus augue.
              Proin eleifend ultrices diam, et venenatis elit suscipit in. Morbi mollis risus vitae consectetur iaculis.</p>

            <button id="ny">Choose this package <i className="hand"></i></button>
          </div>

          <div className="columns">
            <h2>Chicago, IL</h2>

            <p>Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non finibus augue.
              Proin eleifend ultrices diam, et venenatis elit suscipit in. Morbi mollis risus vitae consectetur iaculis.</p>

            <button id="il">Choose this package <i className="hand"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  fetchComments: compose(dispatch, Actions.fetchComments),
});

Home.needs = () => Actions.fetchComments();

export default connect(mapStateToProps, mapDispatchToProps)(Home);
