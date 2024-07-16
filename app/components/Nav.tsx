import { AppBar,Avatar, Typography } from "@mui/material";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import Hamburger from "./Hamburger";
export default function Nav(){

const navItems = ["home","about","videos","contact"];

    return(
        <AppBar className="bg-black text-white h-[100px] grid grid-cols-2 justify-center items-center  px-10" position="fixed">
            <MotionDiv initial={{x:-10,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:"linear"}}>
            <section className="flex gap-5 items-center">
<Avatar src="/icon.jpeg" alt="" className="h-[60px] w-[60px] hidden sm:block"/>
<Typography variant="h6">Aaghum Ministries</Typography>
            </section>
            </MotionDiv>
            <MotionDiv initial={{x:10,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:"linear",delay:0.2}}>
            <section className="sm:flex gap-4 items-center justify-end hidden">
{navItems.map(item => {return <Link href={`#${item}`} key={item} ><Typography variant="h6" className="hover:text-cyan-400 hover:-translate-y-1 transition-all" >{item} </Typography></Link>})}
            </section>
            <section className="flex items-center justify-end">
         <Hamburger/>
         </section>
            </MotionDiv>
            </AppBar>
    )
}