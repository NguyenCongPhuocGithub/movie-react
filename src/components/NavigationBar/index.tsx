import React from 'react'
import { navLists } from '../../data/navLists'
import NavItem from '../NavItems'

const NavigationBar = () => {
  return (
    <ul className={`navbar`}>
      {
        navLists.map((item) => 
          {
            return(
              <NavItem key= {`NavigationBar${item.id}`} nav= {item}/>
            )
          }
        )
      }
    </ul>
  )
}

export default NavigationBar