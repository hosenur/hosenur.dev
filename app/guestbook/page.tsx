import React from 'react'
import Sign from '@/components/Sign';
import Signatures from '@/components/Signatures';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {


    const ogImage = "https://hosenur.dev/og?title=Guest Book";

    return {
        title: "Hosenur's Guest Book",
        description: "Leave a message for Hosenur",
        openGraph: {
            title: "Hosenur's Guest Book",
            description: "Leave a message for Hosenur",
            type: "website",
            url: `https://hosenur.com/guestbook`,
            images: [
                {
                    url: ogImage,
                }
            ]
        },
        twitter: {
            title: "Hosenur's Guest Book",
            description: "Leave a message for Hosenur",
        },
    };
}
export default async function GuestBook() {
    return (
        <div>
            <Sign />
            <Signatures />

        </div>
    )
}
