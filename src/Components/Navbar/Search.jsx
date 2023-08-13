import { useState } from "react"

export const Search=({toggle})=>{
    const [text, setText]=useState("");
    return (
        <div>
            {toggle ? <div className="w-full">
                <div className="w-[80%] mx-auto">
                    <input type="text" value={text} onChange={(e)=>{
                        setText(e.target.value);
                    }} placeholder="Search"/>
                    
                </div>
            </div> : null}
        </div>
    
    )
}