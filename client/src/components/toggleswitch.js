import React from 'react';
import Switch from '@material-ui/core/Switch';

export default class extends React.Component {

  render() {
    return (
      <div>
        <ToggleSwitch
          toggleHandler={this.props.toggleHandler}
          english={this.props.english}
        />
      </div>
    );
  }
}

const ToggleSwitch = (props) => {
  const [state, setState] = React.useState({
    checked: props.english===true ? true : false
  });

  const handleChange = (event) => {

    setState({ ...state, [event.target.name]: event.target.checked });

    props.toggleHandler(event.target.checked);

  };

    return (
        <div>
          <Switch
            checked={state.checked}
            onChange={handleChange}
            name="checked"
          />
        </div>
      );
};