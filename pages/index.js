import { useState } from 'react'

export default () => {

    const [estado,setEstado] = useState(0) 

    return (
    
    <div>

        <h1>{estado}</h1>
        <button onClick={()=> {setEstado(estado + 1)}}>+1</button>

    </div>

    )
}