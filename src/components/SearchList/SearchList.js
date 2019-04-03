import React, { Component } from 'react';
import { selectProfile } from '../../redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './SearchList.css';
import SearchBox from '../SearchBox/SearchBox';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    // console.log(this.props);
    let display;
    if (this.props.peopleSearch === '') {
      display = this.props.people.map((person, idx) => <Link key={idx} className='link-item' to={`/profile`} onClick={() => this.props.selectProfile(person.name)}>{person.name}</Link>)
    } else {
      display = this.props.filteredPeople.map((person, idx) => <Link key={idx} className='link-item' to={`/profile`} onClick={() => this.props.selectProfile(person.name)}>{person.name}</Link>)
    }
    return (
      <div>
        <SearchBox />
        <div className='searchlist'>
          {display}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  people: state.people,
  filteredPeople: state.filteredPeople,
  peopleSearch: state.peopleSearch,
})

const mapDispatchToProps = (dispatch) => ({
  selectProfile: (name) => dispatch(selectProfile(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);