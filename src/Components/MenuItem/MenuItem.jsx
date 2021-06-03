import React from 'react'
import "./MenuItem.scss"

function MenuItem({items,imageUrl,size}) {
    return (
           
           <div className={`${size} menu-item`} 
           style={{backgroundImage:`url(${imageUrl})`}}
           >
                      <div className='content'>
                          <div className='title'>{items.toUpperCase()}</div>
                          <span className='subtitle'>SHOP NOW</span>
                      </div>
           </div>
    
    )
}

export default MenuItem
