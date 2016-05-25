import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from 'actions/users';
import styles from 'css/components/login';
import hourGlassSvg from 'images/hourglass.svg';
import { toogleLoginDialogVisible } from 'actions/layout';

const cx = classNames.bind(styles);

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import {redA400} from 'material-ui/styles/colors';

const style = {
  dialog: {
    width: '520px'
  },
  submitButton:{
    width: '100%',
  },
  googleButton:{
    width: '100%',
    backgroundColor: redA400
  },
  radioButtonsGroup:{
    display: 'flex'
  },
  radio:{
    width: '100px',
    margin: '0 auto 10px auto'
  },
  input:{
    textfield:{
      width: '100%',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '24px'
    }
  }
};

class LoginOrRegister extends Component {

  constructor(props) {
    super(props);
    this.toggleMode = this.toggleMode.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { dispatch, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (isLogin) {
      dispatch(manualLogin({
        email,
        password
      }));
    } else {
      const confirmpassword = ReactDOM.findDOMNode(this.refs.confirmpassword).value;
      const weight = ReactDOM.findDOMNode(this.refs.weight).value;
      const height = ReactDOM.findDOMNode(this.refs.height).value;
      const birthdate = ReactDOM.findDOMNode(this.refs.birthdate).value;
      const sex = ReactDOM.findDOMNode(this.refs.sexRadioGroup).value;

      dispatch(signUp({
        email,
        password,
        confirmpassword,
        weight,
        height,
        birthdate,
        sex
      }));
    }
  }

  toggleMode() {
    this.props.dispatch(toggleLoginMode());
  }

  closeDialog(){
    if(!this.props.user.pending)
    this.props.dispatch(toogleLoginDialogVisible(false));
  }

  renderTitle(){
    const { isLogin } = this.props.user;
    return (
      isLogin ?
      'Sign in'
      :
      'Sign up'
    );
  }

  renderHeader() {
    const { isLogin } = this.props.user;
    if (isLogin) {
      return (
        <div className={cx('alternative')}>
          Have not account yet?
          <a className={cx('alternative-link')}
          onClick={this.toggleMode}> Sign up now!</a>
        </div>
      );
    }
    return (
      <div className={cx('header')}>
      <div className={cx('alternative')}>
      Already have an account?
      <a className={cx('alternative-link')}
      onClick={this.toggleMode}> Sign in now!</a>
      </div>
      </div>
    );
  }


  renderForm(){
    const {isLogin} = this.props.user;
      if(isLogin){
        return (
          <form onSubmit={this.handleOnSubmit}>
          <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="email" ref="email" hintText="email" />
          <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="password" ref="password" hintText="password" />
             <RaisedButton type="submit" label="Login" primary={true}  style={style.submitButton}/>
          </form>
        );
      }
      return (
        <form onSubmit={this.handleOnSubmit}>
        <RadioButtonGroup style={style.radioButtonsGroup} refs="sexRadioGroup" defaultSelected="male">
          <RadioButton style={style.radio} label="Male" value="male"/>
          <RadioButton style={style.radio} label="Female" value="female" />
        </RadioButtonGroup>
        <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="email" ref="email" hintText="email" />
        <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="password" ref="password" hintText="password" />
        <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="password" ref="confirmpassword" hintText="confirm password" />
        <DatePicker className={cx('input')} inputStyle={style.input.hint} primary={true} underlineShow={false} textFieldStyle={style.input.textfield} container="inline" mode="landscape" hintText="birthdate" />
       <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="number" ref="weight" hintText="weight" />
        <TextField className={cx('input')} style={style.input.textfield} underlineShow={false} type="number" ref="height" hintText="height" />
        <RaisedButton type="submit" label="Register" primary={true}  style={style.submitButton}/>
        </form>
      );
  }

  render(){
    const { isWaiting, message, isLogin } = this.props.user;
    console.log("Opening dialog - ");
    console.log(this.props.open);
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        disabled={this.props.user.pending}
        onTouchTap={this.closeDialog}
      />,
      <FlatButton
        label="Sumbit"
        primary={true}
        disabled={this.props.user.pending}
        onTouchTap={this.handleOnSubmit}
      />,
    ];
    return (
    <Dialog
          title={this.renderTitle()}
          actions={actions}
          open={this.props.open}
          contentStyle={style.dialog}
          onRequestClose={this.closeDialog}
        >
          {this.renderHeader()}
          {this.renderForm()}
          <div className={cx('google-container')}>
            <h1 className={cx('heading')}>Other possibilites</h1>
              <RaisedButton label={isLogin ? 'Login with google' : 'Register with google'} primary={false} labelColor="#FFFFFF" backgroundColor={redA400} style={style.googleButton} />
          </div>
        </Dialog>
      );
  }
}

LoginOrRegister.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(LoginOrRegister);
