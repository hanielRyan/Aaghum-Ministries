import {Avatar, Typography} from "@mui/material";
import MuiDrawer from "./MuiDrawer";
import Link from "next/link";
export default function NavBar(){
    const navItems=["home","about","videos","contact"];
    return(
        <>
<nav className="p-3 flex justify-between px-6  bg-white/30 backdrop-blur-md fixed top-0 right-0 left-0 z-20">
<div className="flex jutify-center items-center gap-2">
<Avatar src="/icon.jpeg" className="h-[4rem] w-[4rem]"/>
<Typography variant="h6" className="hidden sm:block">Aaghum Ministries</Typography>
</div> 
<MuiDrawer/>

<div className="  sm:flex hidden justify-center items-center gap-5">
    {navItems.map(name => { return <Link key={name} href={`#${name}`} className=" text-black text-xl bg-none hover:text-cyan-500 hover:-translate-y-0.5 transition-[0.5s]">{name}</Link>})}

   
</div>

</nav>

</>
    )
}