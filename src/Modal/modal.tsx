import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import './modal.css';
export const BucketyModal = (props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  addItem: Function;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const target = e.target as HTMLTextAreaElement;
    const value = target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    target.value = '';
  };
  const removeTag = (index: number) => {
    setTags(tags.filter((tag, i) => i !== index));
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
        <input
          className="title"
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
        <div className="tags-input-container">
          {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <span className="text">{tag}</span>
              <span className="close" onClick={() => removeTag(index)}>
                &times;
              </span>
            </div>
          ))}
          <input
            onKeyDown={handleKeyDown}
            className="tags-input"
            type="text"
            placeholder="Tags"
          />
        </div>
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
            props.addItem(title, description, tags);
          }}
        >
          {' '}
          Submit{' '}
        </button>
      </div>
    </div>
  );
};
