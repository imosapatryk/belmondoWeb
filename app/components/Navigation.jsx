import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import { amber900 } from 'material-ui/styles/colors';
import classNames from 'classnames/bind';
import stylesCss from 'css/components/navigation';
import { toogleLoginDialogVisible } from 'actions/layout';


const styles = {
		appbar: {
			backgroundColor: amber900,
			color: '#FFFFFF'
		},

		title: {
			color: '#FFFFFF'
		},

		circular_progress:{
			color: '#FFFFFF'
		}
};

const cx = classNames.bind(stylesCss);
class Navigation extends React.Component{

	constructor(props) {
		super(props);
		this.openLoginDialog = this.openLoginDialog.bind(this);
	}
	openLoginDialog(){
		this.props.dispatch(toogleLoginDialogVisible(true));
	}

	acountInfo(){
		var user = this.props.user;
		if(user.pending){
			return(
				<CircularProgress size={0.3} color={styles.circular_progress} />
			);
		}
		if(user.authenticated){
			return(
				""
			);
		}
		return (
			<IconButton tooltip="Zaloguj" tooltipPosition="bottom-left" onTouchTap={this.openLoginDialog}>
				<AccountIcon />
			</IconButton>
		);
	}

	render(){
		const logoLink = <Link to="/">Belmondo</Link>;
		return (
			<AppBar title={logoLink} showMenuIconButton={false} iconElementRight={this.acountInfo()} className={cx('appbar')} style={styles.appbar} />
		)
	}

}

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
