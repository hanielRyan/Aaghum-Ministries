import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({subsets:["latin"]});
export default function Footer(){
    return(
        <div className="bg-black text-white h-[80px] grid place-items-center mt-[100px] ">
<p className={`${dancingScript.className}`}> may the lord guide you and bless you as you walk in his ways. </p>
        </div>
    )
}