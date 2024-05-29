import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


function EditElemento() {
    const {state} = useLocation()
    useEffect(()=>{
        setCurr(state)
    },state)

    const [curr, setCurr] = useState()
    const handleChange = (e:any)=>{
        const {value, name} = e.target
        console.log(value, name)
        setCurr((prev:any)=>{
            return(
                {...prev,
                    [name]:value
                }
            )
        })
    }

    const handleFormSubmit = ()=>{
        
    }
    return (
        curr &&
        <div className='w-full h-full flex justify-center items-center'>
            <form className=' w-10/12 flex flex-col gap-2 text-center'>
                {Object.keys(curr).map(t=>{
                    return(
                        t!='usos' && <input onChange={(e)=>{handleChange(e)}} name={t} value={curr[t]} className=''></input>
                    )
                })}
                <button onClick={()=>handleFormSubmit()}>send</button>
            </form>
        </div>
    )
}

export default EditElemento