"use client";
import { useState } from "react";
import { Drawer,Box } from "@mui/material";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
export default function MuiDrawer(){
    const [open,setOpen]=useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const navItems=["home","about","videos","contact"];
    return(
        <>
                <MenuIcon className="text-[40px] block sm:hidden " onClick={handleDrawerOpen}/>
<Drawer anchor="right"   open={open} PaperProps={{style:{backgroundColor:"#3B3B3B",color:"white"}}} onClose={()=>setOpen(false)}>
    <Box className="w-[250px] text-center p-4 grid gap-5 pt-10">
    {navItems.map(name => { return <Link onClick={()=>setOpen(false)} key={name} href={`#${name}`} className="  text-xl bg-none hover:text-cyan-500 hover:-translate-y-0.5 transition-[0.5s]">{name}</Link>})}
    </Box>
    </Drawer>
        </>
    )
}