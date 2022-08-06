import { useState } from 'react';
import { BucketyModal } from './Modal/modal';
import './container.css';

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
      <div className="flex-container">
        <div className="header">
          <h1>
            <a href="/">
              <img
                className="rotated"
                src="https://lh3.googleusercontent.com/84BcYBkWozQebTiJKu_YaZjCrv3WMbPkwUNKul_TpgAagXNG4TACD6_5j7Cudzxqw6ONYzuRIS3sbhi-8JGuzEJxlsmzWnaLdHrL-nAQWXzkNVI3EiK4KMwa9O3crKjrWAxQ8pL5SQ=w180-h279-p-k"
              />
            </a>{' '}
            Buckety
          </h1>
        </div>
      </div>
      <div className="flex-container">
        {' '}
        <div className="modal_button">
          {isOpenModal ? null : (
            <button onClick={onClick}> Add new item </button>
          )}
        </div>
        {isOpenModal ? (
          <BucketyModal onClick={onClick} addItem={addItem} />
        ) : null}
      </div>
      <div>{displayItems}</div>
    </div>
  );
}

export default Container;
