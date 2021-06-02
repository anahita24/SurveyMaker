import React from "react";

const Question = ({ qtext, setQtext }) => {
  return (
    <div className="col-md-8 input-group my-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          ?
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Question"
        value={qtext}
        onChange={(e) => {
          setQtext(e.target.value);
        }}
      />
    </div>
  );
};

export default Question;

/*const Question=(props)=>{
    return (
        <div className="col-sm-4 input-group">
            <div className="input-group-append">
                <span className="input-group-text">?</span> 
                <input type="text" className="form-control" placeholder="Question" onChange={event=>props.onTextUpdate(event.target.value)}/>
           </div>
        </div>
    )
}
export default Question;*/