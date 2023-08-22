import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'


function MainNavigation() {
  return (
      <header className={classes.header}>
      <div className={classes.logo}>Sheresher</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Allmeetapp</Link>
                </li>
                <li>
                    <Link to="/Newmeetapp">Newmeetapp</Link>
                </li>
                <li>
                    <Link to="/Favoritemeetapp">Favoritemeetapp</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation