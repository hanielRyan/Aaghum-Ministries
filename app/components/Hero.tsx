import { Typography,Button } from "@mui/material";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import  MotionDiv  from "./MotionDiv";
import Link from "next/link";
const dancingScript = Dancing_Script({subsets:["latin"]});
export default function Hero(){
    return(
        <div className="mt-[110px] mx-[30px] min-h-[80vh] max-w-[95vw] lg:max-w-fit   grid gap-20 lg:gap-0 lg:grid-cols-2 place-items-center" id="home">
            <section className="grid gap-10">
                <MotionDiv initial={{x:-10,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.2}}>
    <h1 className={`text-4xl sm:text-6xl font-bold ${dancingScript.className}`}>
        
        <span className="font-[1000] text-cyan-600">  Aaghum </span>    Ministries
    </h1>
    </MotionDiv>
    <MotionDiv initial={{x:-10,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.3}}>
    <Typography  className="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure asperiores, non magnam quam blanditiis quaerat praesentium sit deleniti consequuntur, velit repellat recusandae ea harum animi nobis quas vero id!
    </Typography>
    </MotionDiv>
    <MotionDiv initial={{x:-10,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.4}} className="grid place-items-center">
        <Link href="https://www.youtube.com/@Aaghum" target="_blank">
        <Button variant="contained" className="py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[3rem]">visit my channel</Button>
        </Link>

    </MotionDiv>
    </section>
    <MotionDiv initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.5}} className="px-3 justify-self-center lg:justify-self-end">
        <div className="containerz  lg:h-[600px] lg:w-[500px] h-[350px] w-[350px] bg-blue-500 relative rounded-full lg:rounded-2xl overflow-hidden grid place-items-center" > 
<Image src="/ephin.jpeg" alt="" className="h-full w-full absolute object-left  " fill/>
        </div>
    </MotionDiv>
        </div>
    )
}