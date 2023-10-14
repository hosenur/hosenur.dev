"use client";
import React, { useState } from 'react'
import { useUser } from "@clerk/nextjs";
import Link from 'next/link';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import moment from 'moment';
import { Toaster, toast } from 'sonner'
import { revalidatePath } from 'next/cache';


export default function Sign() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [signature, setSignature] = useState<string | null>(null)
    const postSignature = () => {
        addDoc(collection(db, "signatures"), {
            name: user?.fullName,
            text: signature,
            created: moment().format(),
            timestamp: Timestamp.now(),
        }).then(() => {
            toast.success("Successfully Signed")
            setSignature(null)
        })
    }
    return (
        <div>
            {
                !isSignedIn ?
                    <div className='flex items-center justify-center mb-5'>
                        <Link href={"/auth"} type='submit' className='bg-white text-zinc-900 py-2.5 rounded-md px-10'>Authenticate to Sign</Link>
                    </div> :

                    <div className='flex  items-center mb-5 gap-2.5'>
                        <input
                            value={signature || ''}
                            onChange={(e) => {
                                setSignature(e.target.value)
                            }}
                            name='message'
                            type="text"
                            className='w-full bg-zinc-900 border border-zinc-700 p-2.5 text-zinc-100 rounded-md focus:outline-none'
                            placeholder='Write anything here suggestions, message, humor or a shout out' id="" />
                        <button disabled={!signature || signature.length === 0} onClick={postSignature} className='bg-white text-zinc-900 py-2.5 rounded-md px-10'>Submit</button>
                    </div>
            }
            <Toaster />
        </div>
    )
}
