import { useState } from 'react';
import { BucketyModal } from './Modal/modal';

function Container() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [numItems, setNumItems] = useState(0);
  const [titles, setTitles] = useState({});
  const [descriptions, setDescriptions] = useState({});

  const onClick = () => {
    setIsOpenModal(!isOpenModal);
    setHideButton(!hideButton);
  };

  const addItem = (numItems: number, title: string, description: string) => {
    setNumItems(numItems + 1);
    setTitles((titles) => ({ ...titles, numItems: 'testTitle' }));
    setDescriptions((descriptions) => ({
      ...descriptions,
      numItems: 'testdescription',
    }));
    console.log('num', numItems);
    console.log('titles', titles);
    console.log('descriptions', descriptions);
  };

  return (
    <div>
      <h1> Buckety </h1>
      <div>
        {' '}
        {isOpenModal ? null : <button onClick={onClick}> Add new item </button>}
        {isOpenModal ? (
          <BucketyModal onClick={onClick} addItem={addItem} />
        ) : null}
      </div>
    </div>
  );
}

export default Container;
