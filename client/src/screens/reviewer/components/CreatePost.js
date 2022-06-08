import React, { useRef, useState } from "react";
import http from "../../../axios";
import { useHistory } from "react-router-dom";

const CreatePost = () => {

  const history = useHistory();

  const inputFile = useRef(null);
  const [files, setFiles] = useState([]);
  const [body, setBody] = useState("");

  const onFileClick = () => {
    inputFile.current.click();
  };

  const onFileChange = (e) => {
    let formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    let fileName = e.target.files[0].name;
    http.post("/upload", formdata).then((res) => {
      let newFiles = [...files];
      newFiles.push({
        name: fileName,
        url: res.data.url,
      });
      setFiles(newFiles);
    });
  };

  const deleteFile = (index) => {
    let newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  const onSubmit = () => {
    let data = {
      post: {
        body: body,
        images: files,
      }
    }

    http.post("/post/new", data).then((res) => {
      history.push("/reviewer");
    });
  }

  return (
    <>
      <div className="col-md-12">
        <div className="col-md-8 create-post">
          <form>
            <div className="create mt-8">
              <div className="form-group">
                <textarea placeholder="Write Your Observation to attract a Business Investment" onChange={(e) => setBody(e.target.value)}></textarea>
              </div>
              <div className="col-md-12 ms-2">
                {
                  files.map((file, index) => {
                    return <span class="badge rounded-pill text-bg-secondary" onClick={() => deleteFile(index)}>{file.name}</span>
                  })
                }
              </div>
              <div>
                <div className="form-group">
                  <i class="fas fa-paperclip" onClick={onFileClick}></i>
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    onChange={(e) => onFileChange(e)}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn"type="button" onClick={onSubmit}>Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
