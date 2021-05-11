import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <Avatar alt="Remy Sharp" src={avatar} alt="avatar" width="32" />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
