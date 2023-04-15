import React from 'react'
import '../css/About.css'

export default function About() {
  return (
    <>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{textAlign:"center"}}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="aj.png" alt="Ajinkya" style={{width:"100%"}} />
              <div class="container">
                <h2>Jane Doe</h2>
                <p class="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="Dev.jpg" alt="Devendra" style={{width:"100%"}} />
              <div class="container">
                <h2>Mike Ross</h2>
                <p class="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button class="button">Contact</button></p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
