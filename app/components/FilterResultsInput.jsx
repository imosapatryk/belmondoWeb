import React, { Component, PropTypes } from 'react';
import {InputGroup, FormControl, Glyphicon} from 'react-bootstrap';
const ENTER_KEY_CODE = 13;

export default class FilterResultsInput extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onSave() {
    const { onEntrySave, value } = this.props;
    onEntrySave(value);
  }

  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onChange(event) {
    const { onEntryChange } = this.props;
    onEntryChange(event.target.value);
  }

  /*
   * @param  {object} event
   */
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    const { className, placeholder, value } = this.props;
    return (
      <InputGroup>
        <FormControl
          type="text"
          placeholder={placeholder}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={value}
          autoFocus/>
        <InputGroup.Addon>
          <Glyphicon glyph="search" />
        </InputGroup.Addon>
      </InputGroup>
      /*
      <input className={className}
        placeholder={placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={value}
        autoFocus />
      */
    );
  }
}

FilterResultsInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onEntrySave: PropTypes.func,
  onEntryChange: PropTypes.func
};
