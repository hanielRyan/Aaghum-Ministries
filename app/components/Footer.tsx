"use client";
import { Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
export default function Footer(){
    return(
        <footer className="bg-black h-24 flex justify-around items-center ">
           <Typography className="text-white" variant="h6" >youtube channel :<Link href="https://www.youtube.com/@Aaghum" target="_blank"> <YouTubeIcon className="text-red-500 text-[40px] hover:cursor-pointer"/></Link></Typography>

        </footer>
    )
}