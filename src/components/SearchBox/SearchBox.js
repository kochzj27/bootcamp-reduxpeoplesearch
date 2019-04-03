import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInput } from '../../redux';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <input className='searchbox' type='text' placeholder='People Search' onChange={(e) => this.props.updateSearchValue(e.target.value)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  people: state.people,
  peopleSearch: state.peopleSearch
})

const mapDispatchToProps = (dispatch) => ({
  updateSearchValue: (value) => dispatch(searchInput(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);