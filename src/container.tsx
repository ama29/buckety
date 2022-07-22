import { useState } from 'react';
import { BucketyModal } from './Modal/modal';

interface BucketListItem {
  title: string;
  description: string;
  id: number;
  tags: string[];
}
function Container() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<BucketListItem[]>([]);

  const onClick = () => {
    setIsOpenModal(!isOpenModal);
    setHideButton(!hideButton);
  };

  const addItem = (title: string, description: string, tags: string[]) => {
    setCount(count + 1);
    setItems([
      ...items,
      { title: title, description: description, id: count, tags: tags },
    ]);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const displayItems = items.map((item, index) => {
    return (
      <div key={index}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.tags}</p>
        <button onClick={(e) => deleteItem(item.id)}> Delete</button>
      </div>
    );
  });

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
