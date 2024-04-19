import { Avatar, Typography } from "@mui/material";
import { MotionDiv } from "./MotionDiv";
export default function Hero(){
    const fadeVariant = {
        hidden:{
            opacity:0,
            x:-80
        },
        show:{
opacity:1,
x:0,
        }
    }
    const imgFadeVariant = {
        hidden:{
            opacity:0,
            x:80
        },
        show:{
opacity:1,
x:0,
        }
    }
    return(
<div className="grid bmd:grid-cols-2 place-items-center mt-32 h-screen  md:h-[85vh]" id="home">
    <section className="flex flex-col gap-10 items-start pl-10 justify-center">
        <MotionDiv variants={fadeVariant} initial="hidden" whileInView="show" viewport={{once:false}} transition={{duration:1}}>
<Typography className="text-4xl">Aaghum Ministries</Typography>
</MotionDiv>
<MotionDiv variants={fadeVariant} initial="hidden" whileInView="show" viewport={{once:false}} transition={{delay:0.5,duration:1}}>
<Typography variant="h6">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure asperiores, non magnam quam blanditiis quaerat praesentium sit deleniti consequuntur, velit repellat recusandae ea harum animi nobis quas vero id!
</Typography>
</MotionDiv>
    </section>
    <MotionDiv variants={imgFadeVariant} initial="hidden" whileInView="show" transition={{duration:1}} viewport={{once:false}} className="grid place-items-center">
<Avatar src="/icon.jpg" className="h-[22rem] w-[22rem] shadow-md"/>
    </MotionDiv>
</div>
    )
}