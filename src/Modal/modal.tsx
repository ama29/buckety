import React, { MouseEventHandler, useState } from 'react';

export const BucketyModal = (props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  addItem: Function;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <input
        placeholder="Bucket List Item"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          props.onClick(e);
        }}
      >
        {' '}
        Close{' '}
      </button>
      <button
        type="submit"
        onClick={(e) => {
          props.onClick(e);
          props.addItem(title, description);
        }}
      >
        {' '}
        Submit{' '}
      </button>
    </div>
  );
};
