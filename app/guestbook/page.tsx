import React, { FormEvent } from 'react'
import { addDoc, collection, doc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../utils/firebase"
import moment from "moment";
async function getSignatures() {
    let signatures = [] as any;
    const q = query(collection(db, "signatures"), orderBy("timestamp", "desc"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        signatures.push(doc.data());
    });
    return signatures;
}
async function create(formData: FormData) {
    'use server'
    await addDoc(collection(db, "signatures"), {
        name: "Hosenur",
        message: "Text"
    })

    // mutate data
    // revalidate cache
}
export default async function GuestBook() {
    const signatures = await getSignatures();
    return (
        <div>
            <form action={create} className='flex  items-center mb-5 gap-2.5'>
                <input type="text" className='w-full bg-zinc-700 p-2.5 text-zinc-100 rounded-md focus:outline-none' placeholder='Write Something Here' name="" id="" />
                <button type='submit' className='bg-white text-zinc-900 py-2.5 rounded-md px-10'>Submit</button>
            </form>
            {signatures.map((signature: any) => {
                return (
                    <div key={signature.created} className='mb-2.5 pb-2.5 border-b border-zinc-800'>
                        <p>{signature.text}</p>
                        <p className='text-zinc-500 text-sm'>By {signature.name} {moment(signature.created).fromNow()}</p>
                    </div>
                )
            }
            )}

        </div>
    )
}
