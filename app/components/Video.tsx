"use client";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MotionDiv } from "./MotionDiv";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({subsets:["latin"]});
import Link from "next/link";
export default function Video(){
    return(
        <div className="mt-[100px] min-h-[80vh] py-20" id="videos">
 <MotionDiv initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",type:"spring",delay:0.2}}>
            <h1 className={`${dancingScript.className} text-6xl text-center` }><Link target="_blank" href="https://www.youtube.com/@Aaghum" className="text-red-500 underline">Like</Link> My Latest Videos</h1>
            </MotionDiv>

            <Swiper className="Swiper mt-24" navigation modules={[Navigation]} >
                <SwiperSlide >
                    <div className="grid place-items-center">
                <iframe  height="315" src="https://www.youtube.com/embed/BN3Ggb9q514?si=9XhUD83-9zj_lQim" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[360px] sm:w-[560px]"></iframe>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-items-center">
                <iframe  height="315" src="https://www.youtube.com/embed/SEeNM4-SALU?si=17E4_y75FWST_y_L" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[360px] sm:w-[560px]"></iframe>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-items-center">

                 
                <iframe height="315" src="https://www.youtube.com/embed/HT_hQj3gwEE?si=RO-bDSFYCAjZuCSb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[360px] sm:w-[560px]"></iframe>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid place-items-center">
                <iframe  height="315" src="https://www.youtube.com/embed/Kdk_P3UbypY?si=QJ7VWlCQeuu4JK8c" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[360px] sm:w-[560px]"></iframe>
                </div>
                </SwiperSlide>
                <SwiperSlide>
<div className="grid place-items-center">
                <iframe  height="315" src="https://www.youtube.com/embed/VkN3xIzCLK4?si=aVlIs25F25kmKAyy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[360px] sm:w-[560px]"></iframe>
                </div>
                </SwiperSlide>
            </Swiper>





        </div>
    )
}