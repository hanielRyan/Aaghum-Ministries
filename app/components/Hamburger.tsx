"use client";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { IconButton,Drawer,List,ListItemButton,ListItemText,Divider,Toolbar } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useState } from 'react';
import Link from 'next/link';
export default function Hamburger(){
    const [open,setOpen]=useState(false);
    const navItems = ["home","about","videos","contact"];
    return(
        <div className="  sm:hidden">
            <IconButton className="text-white" onClick={()=>setOpen(true)}>
<MenuSharpIcon className=" h-10 w-10"/>
           </IconButton>
           <Drawer sx={{"& .MuiDrawer-paper":{width:240}}} open={open} anchor="right" onClose={()=>setOpen(false)}>
<List>
    <Toolbar sx={{justifyContent:"end",height:100}}>
        <IconButton className="text-black " onClick={()=>setOpen(false)}>
            <CloseSharpIcon className="h-8 w-8"/>

        </IconButton>
    </Toolbar>
    <Divider/>
{
    navItems.map(item  => <div  key={item}><Link href={`#${item}`} >
     <ListItemButton onClick={()=>setOpen(false)} className="h-20">
        <ListItemText primary={item} className="text-center"/>
     </ListItemButton>
     </Link>
     <Divider/>
     </div>
    )
}

</List>
           </Drawer>
        </div>
    )
}