import React, { PropTypes } from 'react';

function AsyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
      const { Component } = this.state;

      if (Component) {
        return <Component { ...this.props } />;
      }

      return null;
    }
  };
}

export {
  AsyncComponent,
};
