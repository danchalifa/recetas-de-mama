import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';

export default class extends React.Component {
  
  constructor(){
    super();
  }

  handleChange = (event) => {
    this.props.toggleHandler(event.target.checked);
  };

  render() {
    return (
      <div>
        <Switch
          onChange={this.handleChange}
          checked={this.checked}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
    );
  }
}

