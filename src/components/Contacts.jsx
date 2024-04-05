import React from 'react'

const Contacts = (contacts) => {


    console.log("contacts data:", contacts)

    return (
        <>
            <h2>Course list</h2>
            {contacts?.contacts?.map((data) => (
                <div>
                    Course: {data?.course} <br />
                    Duration: {data?.duration} <br />
                    Fees: {data?.fees} <br /> <br />
                </div>
            ))}
        </>
    )
}

export default Contacts
