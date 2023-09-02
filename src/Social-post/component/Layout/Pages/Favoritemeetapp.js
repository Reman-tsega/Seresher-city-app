import React,{useContext} from 'react'
import { FavoriteContext } from '../../Store/FavoriteContextProvider'
import MeetappItemList from '../../Meetapp/MeetappItemList'

function Favoritemeetapp(props) {

  const favctx = useContext(FavoriteContext)
  let content

  if(favctx.totalNumOfFavorite===0){
    content = <p>no favorie City sected</p>
  }else{
    content=       <MeetappItemList data = {favctx.favorite} />
  }
  return (
    <div>
      {content}

    </div>
  )
}

export default Favoritemeetapp