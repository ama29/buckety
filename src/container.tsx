import { useState } from 'react';
import { BucketyModal } from './Modal/modal';

function Container() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<
    { title: string; description: string; id: number }[]
  >([]);

  const onClick = () => {
    setIsOpenModal(!isOpenModal);
    setHideButton(!hideButton);
  };

  const addItem = (title: string, description: string) => {
    setCount(count + 1);
    setItems([...items, { title: title, description: description, id: count }]);
  };

  const displayItems = () => {
    return (
    {items.map(({ title, description, id }) => (
      <div key={id}>
        <h2> {title} </h2>
        <p> {description} </p>
      </div>
    ))}
    );
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
      <div>{displayItems}</div>
    </div>
  );
}

export default Container;
