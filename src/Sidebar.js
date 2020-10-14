import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined'
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={TrendingUpOutlinedIcon} title='Dashboard'/>
            <SidebarRow Icon={ShoppingCartOutlinedIcon} title='Penjualan'/>
            <SidebarRow Icon={DashboardOutlinedIcon} title='Report'/>
            <SidebarRow Icon={PlaylistAddOutlinedIcon} title='Product'/>
            <SidebarRow Icon={SupervisedUserCircleOutlinedIcon} title='Employee'/>
            <SidebarRow Icon={PlaylistAddCheckOutlinedIcon} title='Inventory'/>
        </div>
    )
}

export default Sidebar
