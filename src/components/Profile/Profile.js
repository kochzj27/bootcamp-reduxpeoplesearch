import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Profile.css';

const Profile = (props) => {
  let name = props.selection;
  let profileArray = props.people.filter((person, idx) => person.name === name);
  let profile = profileArray[0];
  return (
    <div className='profile-cont'>
      {profile ?
        <div>
          <div className='back-button' onClick={() => props.history.push('/')}>
            <p>Previous Page</p>
          </div>

          <div className='profile'>
            <h1>{profile.name}</h1>
            <br />
            <h5 className='profile-item'>City: {profile.city}</h5>
            <h5 className='profile-item'>Industry: {profile.industry}</h5>
            <h5 className='profile-item'>Hobbies: {profile.hobbies}</h5>
            <h5 className='profile-item'>Email: {profile.email}</h5>
          </div>
        </div> : <div><Redirect to='/' /></div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  people: state.people,
  selection: state.selectedProfile,
})

const mapDispatchToProps = (dispatch) => ({
  // deleteTask: (id) => dispatch(deleteTask(id)),
  // updateStatus: (id) => dispatch(updateStatus(id)),
  // editTask: (id, value) => dispatch(editTask(id, value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);