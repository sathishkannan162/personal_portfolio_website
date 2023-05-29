import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import projectTags from '../../data/projectTags.js';
import { ThemeProvider, createTheme } from '@mui/material';

let options = projectTags.map((tag) => {
  return { label: tag };
});
const muiTheme = createTheme();

export default function ComboBox(props) {
  const { text, setText, setTagSelect, ...extra } = props;
  const handleInputChange = (_e, inputValue) => {
    setText(inputValue);
  };
  const handleChange = (e, value) => {
    setTagSelect(value ? value.label : 'All');
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <Autocomplete
        disablePortal
        options={options}
        autoHighlight
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tag" />}
        inputValue={text}
        onInputChange={handleInputChange}
        onChange={handleChange}
        {...extra}
      />
    </ThemeProvider>
  );
}
