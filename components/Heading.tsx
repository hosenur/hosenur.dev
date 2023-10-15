import React from 'react'
import { RoughNotation } from "react-rough-notation"
export default function Heading({ text, heading }: any) {
    return (
        <RoughNotation animate={false} show strokeWidth={1.5} type='underline'>
            {React.createElement(heading, { className: 'inline-block m-0' }, text )}

        </RoughNotation>
    )
}
