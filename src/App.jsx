import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './components/Contacts'
import Contactadder from './components/Contactadder'

function App() {

  const initialContacts = [
    {
      course: "Ui/Ux",
      duration: "2.5 months",
      fees: "16k"
    },
    {
      course: "Python",
      duration: "2.5 months",
      fees: "16k"
    },
    {
      course: "Digital Marketing",
      duration: "2.5 months",
      fees: "16k"
    },
  ]

  const [contacts, setContacts] = useState(initialContacts)


  // const contactadderhandler = (contactdata) => {
  //   // alert("parent to child call")
  //   contacts.push(contactdata);
  //   console.log(contacts)
  // }


  const contactadderhandler = (contactdata) => {
    setContacts([...contacts, contactdata ])
    console.log(contacts)
  }


  return (
    <>

      <Contactadder contactadd={contactadderhandler}/>

      <Contacts contacts={contacts} />


      <form action="">
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
        name:<input type="text" />
      </form>


    </>
  )
}

export default App
