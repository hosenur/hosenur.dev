"use client";
import React from 'react'
import { useUser } from "@clerk/nextjs";
import Link from 'next/link';


export default function Sign() {
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user);

    return (
        <div>
            {
                !isSignedIn ?
                    <div className='flex items-center justify-center gap-5'>
                        <Link href={"/auth"} type='submit' className='bg-white text-zinc-900 py-2.5 rounded-md px-10'>Authenticate to Sign</Link>


                    </div> :

                    <div className='flex  items-center mb-5 gap-2.5'>
                        <input
                            name='message'
                            type="text"
                            className='w-full bg-zinc-900 border border-zinc-700 p-2.5 text-zinc-100 rounded-md focus:outline-none'
                            placeholder='Write anything here suggestions, message, humor or a shout out' id="" />
                        <button type='submit' className='bg-white text-zinc-900 py-2.5 rounded-md px-10'>Submit</button>
                    </div>
            }
        </div>
    )
}
