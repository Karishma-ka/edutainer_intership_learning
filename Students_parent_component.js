import React from 'react'
import { useState , useRef } from 'react'
// import PropTypes from 'prop-types'
// import Exam_child_component from './Exam_child_component'


function Students_parent_component(props) {
    const [name,setName] = useState("");
    const refName = useRef("");
    
        console.log(refName);
    const [students, setStudents] = useState([
        {
            id: '1',
            Name: 'kiran kumar',
            Subject: 'Mathematics',
            Date: '2026-1-23'
        },
        {
            id: '2',
            Name: 'Chanchal Rathod',
            Subject: 'Mathematics',
            Date: '2026-1-23'
        },
        {
            id: '3',
            Name: 'Mohit KUmar',
            Subject: 'Mathematics',
            Date: '2026-1-23'
        }
    ])
    function cleartext(){
        setName("");
       // alert(refName);
        refName.current.focus();
    }
    function changetext(){

        refName.current.style.color = "red";
        refName.current.disabled="true";
        refName.current.style.font="bold";

    }
    return (
        <>
            <div className='container'>

                
                    <label>Enter your Name:</label>
                    <input ref={refName} type="text" value={name} onChange={(e)=> (setName(e.target.value))}></input>
                    <br/>
                    <br/>
                     <label>Enter your phone:</label>
                    <input type="text"></input>
                    <br/>
                    <button className="btn btn-primary" 
                    style={{marginLeft:'200px',marginTop:'12px' }}
                    onClick={cleartext}>
                        clear</button>
                     <button className="btn btn-info" 
                    style={{marginLeft:'50px',marginTop:'12px' }}
                    onClick={changetext}>
                        changetext</button>
                    
           
               
                {/* {
                    students.map((stud) => (

                        <Exam_child_component id={stud.id} subject={stud.subject} Date={stud.Date} Name={stud.Name} />
                    ))
                } */}
            </div>
        </>
    )
}


export default Students_parent_component
