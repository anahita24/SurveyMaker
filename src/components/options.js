import React from "react";

const Option = ({ opt, addOptions, deleteOptions, updateText }) => {
  return (
    <div className="col-sm-8 my-3 input-group ">
      <input
        type="text"
        className="form-control"
        placeholder="Option Text"
        value={opt.value}
        onChange={(e) => {
          updateText(opt.uid, e.target.value);
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={addOptions}
        >
          +
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={(e) => {
            deleteOptions(opt.uid);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Option;
/*const Option=(props)=>{
    return (<div className="col-sm-4 input-group">
    <input type="text" className="form-control" placeholder="Option Text" onChange={(event)=>{props.updateText(props.uid,event.target.value)}}/>
    <div className="input-group-append">
    <button className="btn btn-secondary" onClick={props.addOptions}>+</button>
    <button className="btn btn-secondary" onClick={props.deleteOptions}>-</button>
 </div>
    </div>)
}
export default Option*/