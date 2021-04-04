import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  // Submit helper to pass on to StreamForm
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  } 

  render() {
    // on first load, result of componentDidMount wont have returned so show loading
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
      </div>
    )
  } 
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  editStream: editStream
})(StreamEdit);