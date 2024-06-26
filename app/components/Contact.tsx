"use client";
import { Button, TextField, Typography,Snackbar } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {useForm} from "react-hook-form";
export default function Contact(){
    const [open,setOpen]=useState(false);
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const onSubmit = async(data:any)=>{
    try{
     await axios.post("https://aaghum-backend.onrender.com",{data});
    console.log(data);
    reset();
    setOpen(true);
    }catch(err){
           console.log(err);
    }
    }

    const onClose=(event: React.SyntheticEvent | Event, reason?: string)=>{
        if(reason === "clickaway") return;
        setOpen(false);
    }

    return(
        <div className="mt-20 min-h-[80vh] mb-5 flex flex-col gap-10 items-center"  id="contact">
            <motion.div initial={{opacity:0, x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{ duration:1}}>
            <Typography variant="h3" className="text-center">
                Contact Me
            </Typography>
            </motion.div>
<motion.form initial={{opacity:0, x:-80}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{ duration:1,delay:0.5}} onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 w-[22rem]  sm:w-[28rem] gap-4"> 
<div >
    <TextField variant="outlined" error={errors?.lastName ? true : false} color={`${errors?.firstName ? "error" : "primary"}`} placeholder="first name" {...register("firstName",{
        required:true,
        pattern: /^[A-Za-z]+$/
    })}/>

{errors?.firstName?.type === "required" && <p className="text-red-500">First name is required</p>}
{errors?.firstName?.type === "pattern" && <p className="text-red-500">number is not allowed</p>}
</div>
<div>
    <TextField variant="outlined" error={errors?.lastName ? true : false} placeholder="last name" {...register("lastName",{
        required:true,
        pattern: /^[A-Za-z]+$/
    })}/>

{errors?.lastName?.type === "required" && <p className="text-red-500">Last name is required</p>}
{errors?.lastName?.type === "pattern" && <p className="text-red-500">number is not allowed</p>}
</div>
<div className="col-span-2 grid">
    <TextField className="col-span-2" error={errors?.lastName ? true : false} variant="outlined" color={`${errors?.email ? "error" : "primary"}`} placeholder="email" {...register("email",{
        required:true,
        pattern: /^([^\s@]+)@gmail\.com$/
    })}/>

{errors?.email?.type === "required" && <p className="text-red-500">email is required</p>}
{errors?.email?.type === "pattern" && <p className="text-red-500">email is invalid</p>}
</div>
<div className="col-span-2 grid">
    <TextField variant="outlined" error={errors?.lastName ? true : false}  color={`${errors?.subject ? "error" : "primary"}`} placeholder="subject" {...register("subject",{
        required:true
    })}/>

{errors?.subject?.type === "required" && <p className="text-red-500">subject is required</p>}
</div>
<div className="col-span-2 grid">
    <TextField multiline rows={6} error={errors?.lastName ? true : false}variant="outlined" color={`${errors?.message ? "error" : "primary"}`} placeholder="message" {...register("message",{
        required:true
    })}/>

{errors?.message?.type === "required" && <p className="text-red-500">message is required</p>}
</div>
<Button variant="contained" type="submit" className="col-span-2" >send</Button>
</motion.form>
<Snackbar open={open} autoHideDuration={4000} message="Message Sent" onClose={onClose} />
        </div>
    )
}