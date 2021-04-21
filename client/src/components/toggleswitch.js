import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

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
  console.log(props.english)
  const [state, setState] = React.useState({
    checked: props.english==true ? true : false
  });
  console.log(state)

  const handleChange = (event) => {
    console.log('handling change')
    console.log(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });

    props.toggleHandler(event.target.checked);
    console.log(event.target.checked);
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