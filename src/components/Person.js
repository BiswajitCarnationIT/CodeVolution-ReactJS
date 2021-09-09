/*   ----Refractor ---

*/

import React from 'react'

function Person({personProp}) {
    return (
        <div>
            <h2>I am {personProp.name}.And I know {personProp.skill}</h2>
        </div>
    )
}

export default Person
