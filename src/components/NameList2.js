/* tut 19 ---Index as Key Anit-pattern ---- */

import React from 'react'

function NameList() {
    const names =['Bruce','Clark','Diana']
    const nameList = names.map((name,index) => <h2 key = {index}> {index} {name}</h2>)
    return (
        <div> 
            {nameList}
        </div>
    )
}

export default NameList