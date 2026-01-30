import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ setWindowsState }) => {
  const openTerminal = (e) => {
    e.preventDefault()
    setWindowsState(state => ({ ...state, cli: true }))
  }

  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./navbar-icons/apple.svg" alt="" />
            </div>

            <div className="nav-item">
                <p>Subhankar Dey</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p onClick={openTerminal} style={{ cursor: 'pointer' }}>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="/navbar-icons/wifi.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateTime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav