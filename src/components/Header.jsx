import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
	const { user } = props;
	const hasUser = Object.keys(user).length > 0;

	const handleLogout = () => {
		props.logoutRequest({});
	};

	return (
		<header className="header purple_brand">
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userIcon} alt="" />}
					<p>Perfil</p>
				</div>
				<ul>
					{hasUser ? (
						<li>
							<a href="/">{user.name}</a>
						</li>
					) : null}

					{hasUser ? (
						<li>
							<Link to="#logout" onClick={handleLogout}>
								Cerrar Sesión
							</Link>
						</li>
					) : (
						<li>
							<Link to="/login">Iniciar Sesión</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
};

Header.propTypes = {
	user: PropTypes.object,
	logoutRequest: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = {
	logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
