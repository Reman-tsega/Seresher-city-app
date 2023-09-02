import React, { createContext, useContext, useState } from 'react'

export  const FavoriteContext = createContext({
                                        favoriteCities:[],
                                        totalNumOfFavorite:0,
                                        addFavoriteCity:(favorieCity)=>{},
                                        removeFavoriteCity:(favorieCityId)=>{},
                                        isCityFavorite:(favorieCityId)=>{}
                                    })

function FavoriteContextProvider(props) {
    const [FavoriteCity, setFavoriteCity] = useState([])

    const addFavoriteCity =(favorieCity)=>{
        setFavoriteCity((prevFavCity)=>{
            return prevFavCity.concat(favorieCity)
        })

    }
    
    const removeFavoriteCity =(favorieCityId)=>{
        setFavoriteCity((prevFavCity)=>{
            return prevFavCity.filter(city=>city.id !== favorieCityId)
        })
    }

    const isCityFavorite =(favorieCityId)=>{
        return FavoriteCity.some(city=>city.id === favorieCityId)

    }
    
    const context = {
        favorite:FavoriteCity,
        totalNumOfFavorite:FavoriteCity.length,
        addToFav: addFavoriteCity,
        removeFav: removeFavoriteCity,
        checkInFav: isCityFavorite
    };
    console.log(FavoriteCity,"in cp")

  return (
    <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider