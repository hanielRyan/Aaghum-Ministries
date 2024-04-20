import { Typography } from "@mui/material";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
export default function Videos(){
const bigVariation={
    hidden:{
        opacity:0,
        scale:"60%"
    },
    show:{
        opacity:1,
        scale:"100%"
    }
}
    return(
        <div id="videos">
            <MotionDiv variants={bigVariation} initial="hidden" whileInView="show" viewport={{once:false}} transition={{duration:1,type:"linear",ease:"easeIn"}}>
            <Typography variant="h3" id="videos" className="text-center"> <Link href="https://www.youtube.com/@Aaghum" className="text-black underline" target="_blank">Like</Link> My Latest Songs</Typography>
            </MotionDiv>
            <MotionDiv variants={bigVariation} initial="hidden" whileInView="show" viewport={{once:false}} transition={{duration:1,delay:0.5}} className="h-[90rem] lg:h-[25rem] grid lg:grid-cols-3  p-4 sm:p-20 gap-4 ">
<div className="h-[100%] w-[100%]"> 
   <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VkN3xIzCLK4?si=jJv7_w9ub6oNZ93u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div className="h-[100%] w-[100%]">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BN3Ggb9q514?si=xhoz64b6t0n8WYZu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div className="h-[100%] w-[100%]">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HT_hQj3gwEE?si=TXR0xPTzBOo9tLis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
                <div className="h-[100%] w-[100%]>
                </div>
                <div className="h-[100%] w-[100%]">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HT_hQj3gwEE?si=TXR0xPTzBOo9tLis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
            </MotionDiv>
        </div>
    )
}
