import { Typography} from "@mui/material";
import { Dancing_Script } from "next/font/google";
import  MotionDiv  from "./MotionDiv";
const dancingScript = Dancing_Script({subsets:["latin"]});

export default function About(){
    return(
        <div className="mt-[100px] min-h-[80vh] flex justify-center items-center flex-col gap-5 px-10 py-10" id="about">
                <MotionDiv initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",type:"spring"}}>
<h1 className={` text-6xl ${dancingScript.className}`}>About me</h1>
</MotionDiv>
<MotionDiv initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.2}}>
<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis consequuntur magni nesciunt dolor ea odit saepe distinctio aperiam blanditiis, alias dolorum facere fugit eum accusantium pariatur consequatur! Quidem, aliquid quo assumenda quia veritatis vitae quas est eaque amet nisi labore, eligendi obcaecati incidunt ut perferendis, sunt reiciendis consequuntur nulla repellat. Quam facere fugiat eum temporibus numquam necessitatibus veniam veritatis itaque est deleniti ducimus nihil, sequi rerum repellendus porro quo inventore debitisbus, illo modi  provident, ab tempora nisi non sint maiores ex. Commodi cum cupiditate, quidem recusandae voluptatiipsa adipisci sit voluptatum ex, earum id nisi tempora delectus doloremque facilis.</Typography>
</MotionDiv>
        </div>
    )
}