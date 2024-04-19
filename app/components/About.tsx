import { MotionDiv } from "./MotionDiv";
import { Typography } from "@mui/material";
export default function About(){
    const fadeVariant={
        hidden:{
            opacity:0,
            y:80
        },
        show:{
            opacity:1,
            y:0
        }
    }
    return(  
        <div id="about" className="h-[80vh] px-2 sm:px-20 flex flex-col justify-center">
<MotionDiv variants={fadeVariant} initial="hidden" whileInView="show" viewport={{once:false}} transition={{duration:1}}>
    <Typography variant="h3" className="mb-5">About Me</Typography>
</MotionDiv>
<MotionDiv variants={fadeVariant} initial="hidden" whileInView="show" viewport={{once:false}} transition={{duration:1,delay:0.5}}>
    <Typography  className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quasi autem unde eveniet quibusdam quos? Nemo est eveniet, quia repellat rem deserunt repellendus commodi placeat? Similique dolore dolorum mollitia eveniet ea culpa cupiditate corrupti, nostrum vero? At expedita repellendus recusandae.</Typography>
</MotionDiv>
        </div>
    )
}