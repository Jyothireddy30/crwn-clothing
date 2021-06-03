import React from 'react'

function MenuItem({items}) {
    return (
           <div className='directory-menu'>
                   <div className='menu-item'>
                      <div className='content'>
                          <div className='title'>{items}</div>
                               <span className='subtitle'>SHOP NOW</span>
                      </div>
           </div>
           </div> 
    
    )
}

export default MenuItem
