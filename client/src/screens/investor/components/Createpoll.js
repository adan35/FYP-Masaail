import React, { useState } from "react";
import http from "../../../axios";
import { useHistory } from "react-router-dom";

const CreatePoll = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key, keyCode } = e;
    const trimmedInput = input.trim();

    if (keyCode === 13 && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      let newTags = [...tags, {name: trimmedInput}];
      setTags(newTags);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      setTags(tagsCopy);
      setInput(poppedTag);
    }
  };

  const onSubmit = () => {
    let body = {
      poll:{
        title: title,
        polls: tags
      }
    }

    http.post('/poll/new', body).then(res => {
      history.push('/investor/polls');
    });
  }
  return (
    <>
      <div>
        <form action="">
          <div className="col-md-10 create-post">
            <div className="create mt-4">
              <div className="form-group">
                <input
                  className="mt-3 tags-input pollsTitle"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mt-2 pollsTags">
                {tags.map((tag) => (
                  <span className="tag">{tag.name}</span>
                ))}
              </div>
              <div className="form-group"></div>
              <input
                className="mt-3 tags-input pollsTitleText"
                value={input}
                placeholder="Write Poll Name and Press Enter"
                onKeyDown={onKeyDown}
                onChange={onChange}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn" type="button" onClick={onSubmit}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePoll;
