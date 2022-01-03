import React, { useState } from 'react'

const CreatePoll = () => {
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };
    const onKeyDown = (e) => {
        const { key, keyCode} = e;
        const trimmedInput = input.trim();
      
        if (keyCode === 13 && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }
      
        if (key === "Backspace" && !input.length && tags.length) {
          e.preventDefault();
          const tagsCopy = [...tags];
          const poppedTag = tagsCopy.pop();
      
          setTags(tagsCopy);
          setInput(poppedTag);
        }
    };
    return (
        <div>
            <div className='col-md-10 create-post'>
                <div className='create mt-4'>
                    {tags.map((tag) => <span className="tag">{tag}</span>)}
                    <input className='mt-3 tags-input'
                    value={input}
                    placeholder="Write Poll Name and Press Enter"
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                    />
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePoll;