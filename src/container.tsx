import { useState } from 'react';
import { BucketyModal } from './Modal/modal';

interface BucketListItem {
  title: string;
  description: string;
  id: number;
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

  const addItem = (title: string, description: string) => {
    setCount(count + 1);
    setItems([...items, { title: title, description: description, id: count }]);
  };

  // const displayItems = () => {
  //   return (
  //   {items.map(({ title, description, id }) => (
  //     <div key={id}>
  //       <h2> {title} </h2>
  //       <p> {description} </p>
  //     </div>
  //   ))}
  //   );
  // };

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
      <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Container;
