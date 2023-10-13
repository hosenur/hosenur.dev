import React, { FormEvent } from 'react'
import { addDoc, collection, doc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../utils/firebase"
import moment from "moment";
import Sign from '@/components/Sign';
async function getSignatures() {
    let signatures = [] as any;
    const q = query(collection(db, "signatures"), orderBy("timestamp", "desc"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        signatures.push(doc.data());
    });
    return signatures;
}
export default async function GuestBook() {
    const signatures = await getSignatures();
    return (
        <div>
            <Sign/>
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
