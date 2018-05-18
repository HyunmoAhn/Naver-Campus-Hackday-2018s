import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  onFetchApiCall: PropTypes.func,
};

const defaultProps = {
  data: [],
  onFetchApiCall() {},
};

class ApiCallSample extends React.Component {
  render() {
    const { data, onFetchApiCall } = this.props;

    return (
      <div>
        <button
          type="button"
          onClick={onFetchApiCall}
        >
          ApiCall!
        </button>
        {data.map(v => <div key={v}>{v}</div>)}
      </div>

    );
  }
}

ApiCallSample.propTypes = propTypes;
ApiCallSample.defaultProps = defaultProps;

export default ApiCallSample;
