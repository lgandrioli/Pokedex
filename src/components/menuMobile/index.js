import React from 'react'
import "./styles.css" 
import { Link } from 'react-router-dom'

function MenuMobile({active}) {
  
  return (
    <div className='container_mobile' sidebar={active}>
        <ul className="list_mobile">
          <Link className="listItem_mobile" to="/">
            Pokedex
          </Link>
          <Link className="listItem_mobile" to="/curiosidades">
            Curiosidades
          </Link>
          <Link className="listItem_mobile" to="/tvshowpage">
            Tv Show
          </Link>
          <Link className="listItem_mobile" to="/store">
            Store
          </Link>
        </ul>
    </div>
  )
}

export default MenuMobile