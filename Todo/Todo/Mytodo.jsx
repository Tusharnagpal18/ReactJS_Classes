import React, { useState, useSyncExternalStore } from "react";
import "./style.css";
// this is a component
const Mytodo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const addTask = () => {
    // will work synchronously

    setListData((listData) => {
      let updList
      if(activity.length>=1){
        updList= [...listData, activity];
        console.log(updList);
        console.log(activity.length);
        return updList;
      }
      else{
        alert('please add a TODO');
        return "";
      }
    });
    setActivity("");
  };
  const removeTask = (i) => {
    const updList = listData.filter((element, id) => {
      return i != id;
    });
    setListData(updList);
  };
  const deleteAll = () => {
    setListData([]);
  };
  return (
    <>
      <div className="container">
        <div className="header bg-dark bg-gradient">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Your TODO"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button
          onClick={addTask}
          className="btn btn-warning  m-3 px-4 fw-bolder"
        >
          Add
        </button>
        <h4 className=" badge bg-primary fs-5 d-inline-block mb-5">
          Here's Your TODO list 🌟📰{" "}
        </h4>
        {listData != [] &&
          listData.map((data, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div
                className="mydiv1 bg-success bg-gradient p-2 fw-bold m-2 text-wrap"
                style={{ marginRight: "10px", color: "black" }}
              >
                {data}
              </div>
              <div>
              <button
                className="btn btn-danger m-2"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
              </div>
            </div>
          ))}
        {listData.length >= 1 && (
          <button onClick={deleteAll} className="btn btn-dark mb-3">
            Delete All
          </button>
        )}
      </div>
    </>
  );
};

export default Mytodo;
