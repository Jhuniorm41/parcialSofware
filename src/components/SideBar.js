import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink } from "react-router-dom";

const SideBar = (props)=>{
    const {anchor, open, classes, theme} = props
    return (
        <Drawer variant="persistent" anchor={anchor} open={open} classes={{paper: classes.drawerPaper}} >
            <div className={classes.drawerHeader} style={{backgroundColor:'#0277BD'}}>
                <img src={icono} style={{width:30}} align="middle"/>
                <label style={{color:'#fff',fontSize:15}}> DIAGRAMALO</label>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <div className={classes.root} style={{backgroundColor:'#FFFDE7'}}>
                <List component="nav">
                    {props.appRoutes.map((prop, key)=>{
                        if(prop.ignore) return null;
                        return (
                        <NavLink
                            to={prop.path}
                            activeClassName="active"
                            key={key}
                        >
                            <ListItem button >
                            <ListItemIcon >
                                <prop.icon />
                            </ListItemIcon>
                            <ListItemText
                                primary={prop.sidebarName}
                            />
                            </ListItem>
                        </NavLink>
                        )
                    })}
                </List>
            </div>
        </Drawer>
    )
}

export default SideBar