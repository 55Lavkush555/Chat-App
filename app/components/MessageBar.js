import React from 'react'

const MessageBar = (params) => {
    return (
        <div className={`flex flex-col my-3.5 ${params.isuser=="true" ? "items-end":"items-start"}`}>
            <div>
                <p className={`text-gray-400 px-1.5 ${params.isuser=="true" ? "text-end":"text-start"}`}>{params.User}</p>
                <div className='max-w-[250px] rounded-2xl bg-gray-700 text-white p-1.5'>{params.Message}</div>
            </div>
        </div>
    )
}

export default MessageBar
