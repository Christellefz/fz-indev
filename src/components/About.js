import './About.css'

import { DataAbout } from './assets/DataAbout'
import Moi from './assets/images/profil-tiny.webp'
import React from 'react'

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title'>A propos</h1>
      <div className='about-card-container'>
        {DataAbout.map(data => {
          return data.Title1 ? (
            <div key={data.Title1} className='about-card'>
              <h2>{data.Title1}</h2>
              <p>{data.text1}</p>
              <img
                className='profil-picture'
                src={Moi}
                alt='Christelle Fernandez'
              />
            </div>
          ) : null
        })}

        {DataAbout.map(data => {
          return data.Title ? (
            <div key={data.Title} className='about-card'>
              <h2>{data.Title}</h2>
              <h3>{data.title1}</h3>
              <p>{data.p1}</p>
              <h3>{data.title2}</h3>
              <p>{data.p2}</p>
              <h3>{data.title3}</h3>
              <p>{data.p3}</p>
              <h3>{data.title4}</h3>
              <p>{data.p4}</p>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}
export default About
