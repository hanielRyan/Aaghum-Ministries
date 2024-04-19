import { Typography } from "@mui/material";
import { MotionDiv } from "./MotionDiv";
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
            <Typography variant="h3" id="videos" className="text-center">My Latest Songs</Typography>
            </MotionDiv>
            <MotionDiv variants={bigVariation} initial="hidden" whileInView="show" viewport={{once:false}} transition={{duration:1,delay:0.5}} className="h-[90rem] lg:h-[25rem] grid lg:grid-cols-3  p-4 sm:p-20 gap-4 ">
<div className="h-[100%] w-[100%]"> 
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sxP0FFDCeb4?si=CSijg-reaycXJx8E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div className="h-[100%] w-[100%]">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MoYfxWSLIBo?si=1WIS4-9wm0N_qYKK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div className="h-[100%] w-[100%]">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/1-PkUZbnM78?si=PSnFm21FGkFj9UZ8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
            </MotionDiv>
        </div>
    )
}