import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    console.log(headline);
    return (
      <h2>
        { headline }
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: '',
};

export default Title;
