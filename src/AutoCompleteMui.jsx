import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import projectTags from './projectTags.js';

let options = projectTags.map((tag) => {
  return { label: tag };
});

export default function ComboBox(props) {
  const { text, setText, tagSelect, setTagSelect } = props;
  const handleInputChange = (e, inputValue) => {
    setText(inputValue);
  };
  const handleChange = (e, value) => {
    setTagSelect(value ? value.label : 'All');
  };
  return (
    <Autocomplete
      disablePortal
      options={options}
      autoHighlight
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Tag" />}
      inputValue={text}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  );
}
