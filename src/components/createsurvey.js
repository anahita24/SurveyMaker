import React, { useState } from "react";
import { useHistory } from "react-router";
import Option from "./options.js";
import Question from "./question.js";
import TypeSelector from "./typeselector.js";

const CreateSurvey = ({ squestions, setSquestion }) => {
  const history = useHistory();
  const generateRandomNumber = () => Math.floor(Math.random() * 1000 + 1);
  const [qtext, setQtext] = useState("");
  const [qtype, setQtype] = useState(0);
  const [options, setOptions] = useState([
    { uid: generateRandomNumber(), value: "" },
    { uid: generateRandomNumber(), value: "" },
  ]);
  const addOptions = () => {
    const newOption = {
      uid: generateRandomNumber(),
      value: "",
    };
    const updatedOption = [...options];
    updatedOption.push(newOption);
    setOptions(updatedOption);
  };
  const deleteOptions = (id) => {
    if (options.length > 2) {
      console.log(id);
      let updatedOption = [...options].filter((item) => item.uid !== id);
      setOptions(updatedOption);
    }
  };
  const updateTextOption = (id, text) => {
    const updatedOption = [...options];
    const changedIndex = updatedOption.findIndex((x) => x.uid === id);
    updatedOption[changedIndex].value = text;
    setOptions(updatedOption);
  };
  const addQuestion = () => {
    const newSurveyQuestion = [...squestions];
    const newQuestion = {
      qtext,
      qtype,
      options,
    };
    newSurveyQuestion.push(newQuestion);
    setSquestion(newSurveyQuestion);
    setQtext("");
    setQtype(0);
    setOptions([
      { uid: generateRandomNumber(), value: "" },
      { uid: generateRandomNumber(), value: "" },
    ]);
  };
  const publish = () => {
    addQuestion();
    history.push("/take-survey");
  };
  return (
    <>
    <div className="form-group col-sm-8 m-4">
      <TypeSelector qtype={qtype} setQtype={setQtype} />
      {qtype !== 0 ? (
        <>
          <Question qtext={qtext} setQtext={setQtext} />
          {options.map((opt, key) => (
            <Option
              key={key}
              opt={opt}
              addOptions={addOptions}
              deleteOptions={deleteOptions}
              updateText={updateTextOption}
            />
          ))}
          <button className="btn btn-warning m-3" onClick={addQuestion}>
            Add Question
          </button>
          <button className="btn btn-warning m-3" onClick={publish}>
            Publish
          </button>
        </>
      ) : null}
      </div>
    </>
  );
};

export default CreateSurvey;

/*import TypeSelector from './typeselector'
import Question from './question'
import Options from './options.js'
import { useState } from 'react'
import {useHistory} from 'react-router'
const CreateSurvey=(squestions,setQuestions)=>{
    const getRandom=()=>
    {
        return Math.floor((Math.random()* 100000)+1)
    }
    
    const [qText,setqText]=useState("");
    const [qType,setqType]=useState(0);
    const [options,setOptions]=useState([{uid:getRandom(),value:" "},{uid:getRandom(),value:" "}]);
    const history=useHistory();
    const updateSurveyQuestion=()=>{
        const newSurveyQuestion = [...squestions];
    const newQuestion = {
      qtext: qText,
      qtype: qType,
      options: options,
    };
    newSurveyQuestion.push(newQuestion);
    setQuestions(newSurveyQuestion);
    setqText("");
    setqType(0);
    setOptions([
      { uid: getRandom(), value: "" },
      { uid: getRandom(), value: "" },
    ]);    }

    
const addOptions=()=>{
let newOption
={
    uid:getRandom(),
    value: ' '
}
let updatedOptions=[...options]
updatedOptions.push(newOption);
setOptions(updatedOptions)
}
const updateOptionText=(id,text)=>
{
let updatedoptions=[...options]
let changeindex=updatedoptions.findIndex(x=>x.uid === id);
updatedoptions[changeindex].value= text
setOptions(updatedoptions);
}
const publish=()=>{
updateSurveyQuestion();
history.push('/takesurvey');
}
const deleteOptions=()=>{
    if(options.length===2)
    {
        alert("Error: A select type question should have atleast two options");
    }
    else
    {
    let updatedOptions=[...options];
    updatedOptions.pop();
    setOptions(updatedOptions);
    }
}
    return (<><TypeSelector qType={qType} setqType={setqType} />
    {qType !==0 ?
    <>
    <Question onTextUpdate={setqText}/>
    {
        options.map((opt,key)=>{
           return <Options key={key} uid={opt.uid}
           addOptions={addOptions} deleteOptions={deleteOptions} updateText={updateOptionText}/>
        })
    }
    <button className="btn btn-warning m-1" onClick={()=>{updateSurveyQuestion()}}>Add Questions</button>
    <button className="btn btn-warning m-1" onClick={()=>{publish()}}>Publish</button>
    </>
    :null}
    </div>
    </>

    )
}
export default CreateSurvey;*/