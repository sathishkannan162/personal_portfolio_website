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
    console.log({ inputValue: text });
    console.log('inputValue', inputValue);
    setText(inputValue);
    console.log({ value: text });
  };
  const handleChange = (e, value) => {
    console.log({ value });
    console.log({ tag: tagSelect });
    setTagSelect(value ? value.label : 'All');
    console.log({ tag: tagSelect });
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
