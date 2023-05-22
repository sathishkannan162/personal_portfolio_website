// import projectTags from './projectTags';

// import React, { useState } from 'react';
// import Autosuggest from 'react-autosuggest';
// import Fuse from 'fuse.js';

// const options = projectTags;

// const fuseOptions = {
//   keys: ['label'],
// };

// const AutoSuggestSearchBar = () => {
//   const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const fuse = new Fuse(
//     options.map((option) => ({ label: option })),
//     fuseOptions
//   );

//   const getSuggestions = (inputValue) => {
//     if (inputValue.trim() === '') {
//       return [];
//     }
//     console.log(inputValue);

//     const fuseResults = fuse.search(inputValue.trim());
//     const results = fuseResults.map((result) => result.item.label);
//     console.log(results);

//     return results;
//   };

//   const getSuggestionValue = (suggestion) => suggestion;

//   const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

//   const onSuggestionsFetchRequested = ({ value }) => {
//     setSuggestions(getSuggestions(value));
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onSuggestionSelected = (_, { suggestion }) => {
//     // Handle the selected suggestion here
//     console.log('Selected suggestion:', suggestion);
//   };

//   const onChange = (_, { newValue }) => {
//     setValue(newValue);
//   };

//   const inputProps = {
//     placeholder: 'Type to search...',
//     value,
//     onChange,
//   };

//   return (
//     <Autosuggest
//       suggestions={suggestions}
//       onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//       onSuggestionsClearRequested={onSuggestionsClearRequested}
//       onSuggestionSelected={onSuggestionSelected}
//       getSuggestionValue={getSuggestionValue}
//       renderSuggestion={renderSuggestion}
//       inputProps={inputProps}
//     />
//   );
// };

// export default AutoSuggestSearchBar;

import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';

const options = ['Apple', 'Banana', 'Cherry', 'Grape', 'Lemon', 'Orange'];

const fuseOptions = {
  keys: ['label'],
};

const AutoSuggestSearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  let autosuggestProps;
  useEffect(() => {
    const fuse = new Fuse(
      options.map((option) => ({ label: option })),
      fuseOptions
    );

    const getSuggestions = (inputValue) => {
      if (inputValue.trim() === '') {
        return [];
      }
      console.log({ inputValue });

      const fuseResults = fuse.search(inputValue.trim());
      const results = fuseResults.map((result) => result.item.label);
      console.log({ results });

      return results;
    };

    const onSuggestionsFetchRequested = ({ value }) => {
      setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
      setSuggestions([]);
    };

    const onSuggestionSelected = (_, { suggestion }) => {
      // Handle the selected suggestion here
      console.log('Selected suggestion:', suggestion);
    };

    const onChange = (_, { newValue }) => {
      setValue(newValue);
    };

    const inputProps = {
      placeholder: 'Type to search...',
      value,
      onChange,
    };

    autosuggestProps = {
      suggestions,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      onSuggestionSelected,
      getSuggestionValue: (suggestion) => suggestion,
      renderSuggestion: (suggestion) => <div>{suggestion}</div>,
      inputProps,
    };

    // return () => {
    //   // Cleanup if necessary
    // };
    return autosuggestProps;
  }, [value]);

  return <Autosuggest {...autosuggestProps} />;
};

export default AutoSuggestSearchBar;
