import React from 'react';

function ContactUs() {
    return (
        <div className='mt-40 items-center justify-center  flex flex-col'>
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <div className='mt-4 space-y-2'>
                <span>Name</span> <br />
                <input
                    type="text"
                    placeholder='Enter name'
                    className='w-80 px-3 py-1 border rounded-md outline-none' />
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span> <br />
                <input
                    type="email"
                    placeholder='Enter your Email'
                    className='w-80 px-3 py-1 border rounded-md outline-none' />
            </div>
            <div className='mt-4 space-y-2'>
                <span>Message</span> <br />
                <textarea placeholder="enter here..." cols="30" rows="10" className="'w-80 px-3 py-1  border border-2"></textarea>
            </div>
            <button className='bg-blue-600 p-2 text-white rounded-md hover:bg-blue-800'>Submit</button>
        </div>
    );
}

export default ContactUs;
