import React from 'react'

import './index.css'

function LoremIpsum({data, textCounter}) {

    return (
        <>
        {data.slice(0, textCounter).map((text, index) =>{
            return (
                 <p key={index} className="lorem-paragraph">
                    {text}
                </p>
            )

        })}
        </>
       
    )
}

export default LoremIpsum
