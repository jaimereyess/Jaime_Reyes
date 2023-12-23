import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-200 text-black p-4 text-center w-full">
            <section className='flex flex-col flex-wrap items-center md:flex-row md:justify-around gap-5 font-medium'>
                <h6>Jaime Reyes Rodríguez</h6>
                <Link href={"https://linkedin.com/in/jaime-reyes-rodríguez"}
                    className='bg-blue-200 hover:bg-blue-300 rounded-xl px-3 w-40 py-2'>LinkedIn</Link>
                <Link href={"https://github.com/jaimereyess"}
                    className='bg-purple-200 hover:bg-purple-300 rounded-xl w-40 py-2'>GitHub</Link>

                <span>jaimereyesrdgz@gmail.com</span>
            </section>
        </footer>
    )
}
