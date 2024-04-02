import React from 'react'
import style from './style.module.css'

const Dashboard = () => {
    return (
        <div className='bg-gray-900 min-h-dvh w-full font-sans'>
            <div className='container mx-auto py-10 space-y-4 text-gray-50'>
                <div className='text-2xl font-medium'>
                    <p>Hello</p>
                    <p>Abhishek Bahuguna</p>
                </div>
                {
                    [{ title: "Create new business", desc: 'Describe here what this section is' }, { title: 'Manage current businesses', desc: 'Describe here what this section is' }]?.map(item => {
                        return <div className={style.card}>
                            <div class={`${style.card2} group overflow-hidden bg-gray-900  border-[0.1px] px-6 py-4 rounded-md cursor-pointer`}>
                                <p className='text-2xl md:text-3xl lg:text-4xl'> {item?.title}</p>
                                <p className='text-lg'>{item?.desc}</p>
                                <div class="relative z-10 flex flex-col justify-between before:absolute before:-left-4 before:-top-16 before:h-28 before:w-28 before:rounded-full before:border-8 before:bg-transparent before:opacity-10 before:blur-none before:duration-700 group-hover:before:left-48  group-hover:before:scale-125 group-hover:before:blur"></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard