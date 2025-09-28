import React from 'react'

const HomePage = () => {
    return (
        <div className='flex item-center justify-center'>
            <div className='mr-5'>
                <img src="/asset/logo.png" alt="Logo" width={1024} />
            </div>
            <div className='text-white text-4xl mt-5'>
                <h2>Welcome to T-Media System Portal</h2>
                <div className='flex text-2xl gap-5 text-black mt-11'>
                    <button className="rounded-full bg-[#B8B0FE] w-[282px] h-[70px]">Bạn là người dùng</button>
                    <button className="rounded-full bg-[#FCE6FF] w-[282px] h-[70px]">Admin</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
