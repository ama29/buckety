import React, { useState } from 'react';

const BucketyModal = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  if (props.isOpenModal) {
  }
  return (<div><input placeholder = "Bucket List Item" /></div>);
};
