import React, { useState } from 'react';

export const BucketyModal = (props: { onClick: Function }) => {
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
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </div>
  );
};

// export default BucketyModal;
