import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { FavoriteContext } from '../Store/FavoriteContextProvider'

function MainNavigation() {

    const favctx = useContext(FavoriteContext)
  return (
      <header className={classes.header}>
      <div className={classes.logo}>Sheresher</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">AllCities</Link>
                </li>
                <li>
                    <Link to="/Newmeetapp">AddNewCity</Link>
                </li>
                <li>
                    <Link to="/Favoritemeetapp">FavoriteCity
        <span className={classes.badge}>{favctx.totalNumOfFavorite}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation