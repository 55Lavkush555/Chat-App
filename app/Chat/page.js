"use client"
import React, { useState, useEffect } from 'react'
import MessageBar from '../components/MessageBar'

const Page = () => {
    const [username, setUsername] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [messages, setMessages] = useState([]);
    const [mess, setMess] = useState("")
    const [submiting, setSubmiting] = useState(false)

    useEffect(() => {
        async function fetchMessages() {
            const res = await fetch("/api/getMessages");
            const data = await res.json();
            setMessages(data);
        }
        fetchMessages();
    }, []);

    async function sendMessage(data) {
        setSubmiting(true)
        let r = await fetch("/api/addMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setMessages([...messages, data])
        setSubmiting(false)
        setMess("")
    }

    return (
        <div>
            {!isLogin && <div className='w-full h-screen flex justify-center items-center'>
                <div className='flex flex-col w-fit h-fit border-[3px] border-black p-3 gap-3 rounded-[8px]'>
                    <span className='text-[30px] text-center'>Your name</span>
                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} className='border rounded-full px-2 text-[25px]' placeholder='Enter your name' />
                    <button className='cursor-pointer text-2xl bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full' onClick={() => setIsLogin(true)}>Submit</button>
                </div>
            </div>}

            {isLogin && <div className='w-full md:w-[80%] mx-auto mt-8'>
                <div className='mb-14'>
                    {messages.map((item, index) => {
                        return <MessageBar key={index} User={item.User} Message={item.Message} isuser={item.User == username ? "true" : "false"} />
                    })}
                </div>

                <div className='fixed w-full md:w-[80%] justify-center bottom-0 bg-gray-400 rounded-2xl px-4 py-2.5 flex gap-2 items-center mx-auto'>
                    <input value={mess} onChange={(e) => setMess(e.target.value)} type="text" placeholder='Type your message' className='bg-white text-2xl border-2 rounded-full px-1.5' />

                    {!submiting?<button className='font-bold w-[50px] bg-red-600 text-white text-2xl flex justify-center items-center rounded-2xl cursor-pointer' onClick={()=> sendMessage({User: username, Message: mess})}>{">"}</button>
                    :<button className='font-bold w-[50px] bg-gray-600 text-white text-2xl flex justify-center items-center rounded-2xl'>{">"}</button>}
                </div>

            </div>}
        </div>
    )
}

export default Page
