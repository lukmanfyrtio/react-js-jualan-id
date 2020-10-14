import React from 'react'
import './SidebarRow.css';

export default function SidebarRow({title,Icon}) {
    return (
        <div className='sidebarRow'>
            {Icon&&<Icon/>}
            <h4>{title}</h4>
        </div>
    )
}
