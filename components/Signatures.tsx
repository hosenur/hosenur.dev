"use client";
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from '@/utils/firebase';
import moment from 'moment';
export default function Signatures() {
    const [signatures, setSignatures] = useState([])
    useEffect(() => {
        const collectionRef = collection(db, "signatures");
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshot) => {
            //@ts-ignore
            setSignatures(snapshot.docs.map((doc) => doc.data()));
        });
    }, [])
    return (
        <>
            {
                signatures.map((signature: any) => {
                    return (
                        <div key={signature.created} className='mb-2.5 pb-2.5 border-b border-zinc-800'>
                            <p>{signature.text}</p>
                            <p className='text-zinc-500 text-sm'>By {signature.name} {moment(signature.created).fromNow()}</p>
                        </div>
                    )
                }
                )
            }
        </>
    )
}
