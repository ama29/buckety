import { useState } from 'react';
import { BucketyModal } from './Modal/modal';
import './App.css';
import Container from './container';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const onClick = () => {
    setIsOpenModal(!isOpenModal);
    setHideButton(!hideButton);
  };

  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
