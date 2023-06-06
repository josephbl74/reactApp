// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react"
import { NewMarkerForm } from "./NewMarkerForm"
import "./styles.css"

export default function App(){

  // const [newMarker, setNewMarker] = useState("") // [new elem,function called]
  const [markers, setMarkers]=useState([])


  // function handleSubmit(e){
  //   e.preventDefault()

  //   setMarkers((currentMarkers) => [
  //       ...currentMarkers, 
  //       {id: crypto.randomUUID(), title: newMarker, completed: false},
  //     ]
  //   );
    
  //   setNewMarker("")
  // }

  function addMarker(title){
    setMarkers((currentMarkers) => [
      ...currentMarkers, 
      {id: crypto.randomUUID(), title , completed: false},
    ]
    );
  }

  function toggleMarker(id, completed) {
    setMarkers(currentMarkers =>{
      return currentMarkers.map(marker => {
        if(marker.id === id){
          return {...marker, completed}
        }
        return marker 
      })
    })
  }

  function deleteMarker(id) {
    setMarkers(currentMarkers => {
      return currentMarkers.filter(marker => marker.id !== id)
    })
  }

  // console.log(markers) 

  return (
    <>
      {/* <form onSubmit={handleSubmit} className="new-marker-form">
        <div className="form-row">
          <h3 htmlFor="marker">New Marker</h3>
          <label htmlFor="title">Title</label>
          <input 
            value={newMarker}
            onChange={e => setNewMarker(e.target.value)}
            type="text"
            id="marker "
          />
          <br></br>
        </div>
        <button className="btn">Add+</button>
      </form> */}

      <NewMarkerForm onSubmit={addMarker}/>

      <h1 className="header">Markers</h1>
      <ul className="list">
        {markers.length === 0 && "No Markers"}
        {markers.map(marker => {
          return (
            <li key={marker.id}>
              <label>
                <input 
                  type="checkbox"
                  checked={marker.completed}
                  onChange={e => toggleMarker(marker.id, e.target.checked)}
                />
                {marker.title}
              </label>
              <button
                onClick={() => deleteMarker(marker.id)}
                className="btn"
              >Delete
              </button>
            </li>
          )
        })}
      </ul>

      {/* <MarkerList markers={markers}/> */}
    </>
  )
}