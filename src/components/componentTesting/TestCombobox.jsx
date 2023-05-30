import React from 'react';
import ComboBox from '../ProjectsPage/AutoCompleteMui';

export default function TestCombobox() {
  const [text, setText] = React.useState('');
  const [tagSelect, setTagSelect] = React.useState('');

  return (
    <ComboBox
      text={text}
      setText={setText}
      setTagSelect={setTagSelect}
      data-test="tag-select"
    />
  );
}
