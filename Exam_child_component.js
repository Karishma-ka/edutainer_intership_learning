import React from 'react'

function Exam_child_component(props) {
    return (
        <>
        

            <div className='container' style={{
                backgroundColor:'lightgreen',
                width:'550px', 
                borderRadius:'12px',
                marginTop:'25px'}}>
                <div className='jumbotron'>
                    <h1 className="display-4">{props.Name}</h1>
                    <p className="lead">EXAM DETAILS coming from the child component</p>
                    <hr className="my-4" />
                    <p>Subject:{props.subject}</p>
                    <p>Date:{props.Date}</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">{props.id}</a>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Exam_child_component