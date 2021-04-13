import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import AppContext from '../context/AppContext.js'

export default function Switches() {
//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//   });

  const handleChange = (event) => {
   // const myContext = useContext(AppContext);
   // setState({ ...state, [event.target.name]: event.target.checked });

  //   if (event.target.checked) {
  //     myContext.English = true
        
  //   } else {
  //     myContext.English = false
  //   }
  };

  return (
    <div>
      <Switch
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
    </div>
  );
}

