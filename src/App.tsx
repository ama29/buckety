import { useState } from 'react';
import { BucketyModal } from './Modal/modal';
import './App.css';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const onClick = () => {
    setIsOpenModal(!isOpenModal);
    setHideButton(!hideButton);
  };

  return (
    <div>
      <h1> Buckety </h1>
      <div>
        {' '}
        <button onClick={onClick}> Add new item </button>
        {isOpenModal ? <BucketyModal onClick={onClick} /> : null}
      </div>
    </div>
  );
}

export default App;
