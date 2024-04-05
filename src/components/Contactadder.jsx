import React, { useState } from 'react'

const Contactadder = (props) => {

    const [course, setCourse] = useState()
    const [duration, setDuration] = useState()
    const [fees, setFees] = useState()

    // const addContactData = () => {
    //     // alert("add contact ")
    //     const contactdata = {course, duration, fees}
    //     console.log(contactdata)
    // }

    const addContactData = () => {
        const contactdata = {course, duration, fees}
        // console.log(contactdata)
        props.contactadd(contactdata)
    }

    return (
        <>

            Course: <input type="text" value={course} placeholder='enter your course' onChange={(e) => setCourse(e.target.value)} /> <br /><br />
            Duration: <input type="text" value={duration} placeholder='duration' onChange={(e) => setDuration(e.target.value)} /> <br /> <br />
            Fees: <input type="text" value={fees} placeholder='fees' onChange={(e) => setFees(e.target.value)} /> <br /> <br />

            {/* Course: <input type="text" placeholder='enter your course' value={} onChange={(e) => setCourse(e)}/> <br /><br /> */}


            <button onClick={addContactData}>Add Course</button>

        </>
    )
}

export default Contactadder
