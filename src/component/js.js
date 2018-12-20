import React from 'react';
import './css.css'

const DPerson =(props) =>{
return (
<div className="Person">
<p onClick={props.click}> I am {props.name}. I am {props.age} year old!.</p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name} />

</div>
)
};
export default DPerson;