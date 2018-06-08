import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Footer() {
  return (
    <Menu className="footer" attached inverted>
      <h4 className="footer-msg">
        Have questions? Reach out to me at daniel.lee9415@gmail.com!
      </h4>
      <br />
      <div className="github">
        <a
          href="https://github.com/Dawolee/schedulee"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github fa-3x" />
        </a>
      </div>
      <h4 className="footer-quote">
        There cannot be a crisis next week. My schedule is already full - Henry
        Kissinger
      </h4>
    </Menu>
  )
}
