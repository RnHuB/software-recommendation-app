import React, { useState } from 'react'
import './App.css'
import softwareCollection from './softwareData';
import rating from './img/rating.png'

const softwareType = ['antivirus', 'texteditor', 'videoeditor', 'browser', 'mediaplayer', 'other'];


const App = () => {
  const [movieTye, setsoftwareType] = useState('windows');
  const [genre, setGenre] = useState('antivirus')
  const [clickedId, setClickedId] = useState(-1);
  // Movie type toggeler function
  const togglesoftwareType = () => {
    if (movieTye === 'windows') {
      setsoftwareType('linux')
    }
    else {
      setsoftwareType('windows')
    }
  }


  return (
    <div className="container">

      {/* toggle software type and button */}

      {movieTye === 'windows' ? <button className='toggleBtn' onClick={togglesoftwareType}>windows</button> : <button className='toggleBtn' onClick={togglesoftwareType}>Linux</button>}
      <div className="sub-container">
        <div className="left">
          {
            softwareType.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => { setGenre(item); setClickedId(index) }}
                  className={index === clickedId ? "customButton active" : "customButton"}
                >
                  {item}
                </button>
              );
            })
          }
        </div>
        <div className="right">
          <p>software : </p>

          {
            movieTye === 'windows' ?
              <ul>{
                // console.log(Array.isArray(softwareCollection[genre].windows.software))
                softwareCollection[genre].windows.software.map((item, index) => {
                  return (
                    <li
                      key={index}
                    >
                      {item}
                      
                      <span>
                        <img src={rating} alt={`rating`}/>
                        &nbsp; {softwareCollection[genre].windows.ratings[index]}
                      </span>
                      <p>{softwareCollection[genre].windows.description[index]}</p>
                    </li>
                  )
                })

              }

              </ul> :
              <ul>{
                // console.log(Array.isArray(softwareCollection[genre].windows.software))
                softwareCollection[genre].linux.software.map((item, index) => {
                  return (
                    <li
                      key={index}
                    >
                      {item}
                      <span>
                        <img src={rating} alt={`rating`}/>
                        &nbsp; {softwareCollection[genre].linux.ratings[index]}
                      </span>
                      <p>{softwareCollection[genre].linux.description[index]}</p>
                    </li>
                  )
                })

              }

              </ul>
          }

        </div>
      </div>
    </div>
  )
}

export default App
