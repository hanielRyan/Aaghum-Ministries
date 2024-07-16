"use client";
import {useForm} from "react-hook-form";
import { Alert, Button, TextField,Snackbar } from "@mui/material";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({subsets:["latin"]});
import { useState } from "react";
import  MotionDiv  from "./MotionDiv";
import axios from "axios";
export default function Contact(){
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [open,setOpen]=useState(false);
    const [disabled,setDisabled]=useState(false);
    const onSubmit=async(data:any)=>{
        setDisabled(true);
        try{
            await axios.post("http://localhost:5000/",{data});
            setOpen(true);
            setDisabled(false)
        }catch(err){
           console.log(err);
           setDisabled(false)
        }
reset();
    }
    return(
        <div className="grid place-items-center mt-[100px] min-h-[80vh]" id="contact">
                <MotionDiv initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear"}}>
            <h1 className={`${dancingScript.className} text-6xl`}>Contact Me</h1>
            </MotionDiv>
        <form className="grid grid-cols-2 gap-5 px-5" onSubmit={handleSubmit(onSubmit)}>
            <MotionDiv  initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.1}} className="grid gap-2">
            <TextField variant="outlined" label="first name" error={errors?.firstName?.type ? true : false} {...register("firstName",{
                required:true,
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First name should only contain letters"
                  }
            })} />
                        {errors?.firstName?.type === "required" && <Alert severity="error">first name is required.</Alert>}
                        {errors?.firstName?.type === "pattern" && <Alert severity="error">numbers are not allowed.</Alert>}
                        </MotionDiv>
                        <MotionDiv  initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.2}} className="grid gap-2">
            <TextField  error={errors?.lastName?.type ? true : false} variant="outlined" label="last name" {...register("lastName",{
                required:true,
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First name should only contain letters"
                  }
            })}/>
                        {errors?.lastName?.type === "required" && <Alert severity="error">last name is required.</Alert>}
                        {errors?.lastName?.type === "pattern" && <Alert severity="error">numbers are not allowed.</Alert>}
                        </MotionDiv>
                        <MotionDiv  initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.3}} className="grid col-span-2 gap-2">
            <TextField   error={errors?.email?.type ? true : false} variant="outlined" label="email"  {...register("email",{
                required:true,
                pattern: /^([^\s@]+)@gmail\.com$/
            })}/>
                        {errors?.email?.type === "required" && <Alert severity="error">email is required.</Alert>}
                        {errors?.email?.type === "pattern" && <Alert severity="error">pattern in invalid.</Alert>}
                        </MotionDiv>
                        <MotionDiv  initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.4}} className="grid col-span-2 gap-2">
            <TextField  error={errors?.subject?.type ? true : false} variant="outlined" label="subject"  {...register("subject",{
                required:true
            })}/>
                        {errors?.subject?.type === "required" && <Alert severity="error">subject is required.</Alert>}
                        </MotionDiv>
                        <MotionDiv  initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.5}} className="grid col-span-2 gap-2">
            <TextField  error={errors?.message?.type ? true : false} variant="outlined" rows={6} multiline label="message" {...register("message",{
                required:true
            })}/>
            {errors?.message?.type === "required" && <Alert severity="error">message is required.</Alert>}
            </MotionDiv>
            <MotionDiv initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:false}} transition={{ease:"linear",delay:0.6}} className="col-span-2 grid">
<Button variant="contained" type="submit" disabled={disabled} className="  py-4 ">send</Button>
</MotionDiv>
        </form>
        <Snackbar open={open} autoHideDuration={5000} onClose={()=>setOpen(false)} message="email sent successfully"/>
        </div>
    )
}