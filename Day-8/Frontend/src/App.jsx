import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'


const App = () => {

  const [notes, setNotes] = useState([
     {
      title : " title 1",
      description : "description 1"
     },
     {
      title : " title 2",
      description : "description 2"
     },
     {
      title : " title 3",
      description : "description 3 "
     },
     {
      title : " title 4",
      description : "description 4"
     },
  ])

  console.log("Hello Integration")

  useEffect(() => {},[])

  axios.get("http://localhost:3001/api/notes") 
    .then(res => {
      setNotes(res.data.notes)
    })

 return (
  <>
    <div className="card">
        {
        notes.map(note => {
          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        })
      }
    </div>
  </>
)
}

export default App



