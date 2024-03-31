import React from 'react'

const Button = ({ children }) => {
    return (
        <div className="flex justify-center items-center w-full h-[4.75em] max-w-[170px] text-[1em] text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] rounded-[2.125em] bg-transparent p-0 cursor-pointer">
            <div className="w-fit h-fit">
                <span className="font-medium">
                    Development
                </span>
            </div>
        </div>
    )
}

export default Button