import React from 'react'
import { FiUnlock } from 'react-icons/fi'
import { LiaEdit } from 'react-icons/lia'
import { RiDiscountPercentLine } from 'react-icons/ri'
import ProfileEditModal from './ProfileEditModal'


const ManagerDetails = () => {
    const [isOpen , setIsOpen] = React.useState(false);
    return (
        <div className="py-8 px-10 rounded-2xl bg-white  flex w-full gap-7">
            <div className="w-[251px]">
                <div className="w-full h-[251px]">
                    <img src="https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg" className='w-full h-full object-cover rounded-2xl border shadow-lg' alt="" />
                </div>
                <div className="relative">
                    <div className="text-center text-lg mt-2.5">
                        <p className="">Mr. Nadir</p>
                        <p className='text-[#FF8000]'>Manager</p>
                    </div>
                    <FiUnlock size={20} color='#A1A1A1' className='absolute top-0 right-0' />
                </div>
            </div>
            <div className="w-full relative">
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Name:</p>
                    <p className='text-[#5C5C5C]'>Asadujjaman Mahfuz </p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Position:</p>
                    <p className='text-[#5C5C5C]'>: Manager</p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Id. no.:</p>
                    <p className='text-[#5C5C5C]'>BB4578EED2</p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Email:</p>
                    <p className='text-[#5C5C5C]'>Asadujjaman101@bd.com</p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Contact Number</p>
                    <p className='text-[#5C5C5C]'>: 073 155 4568</p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Death of birth</p>
                    <p className='text-[#5C5C5C]'>12 nov, 2024</p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Gender</p>
                    <p className='text-[#5C5C5C]'>: Male</p>
                </div>
                <div className="mb-[40px]">
                    <p className='text-[#A1A1A1] mb-2'>Address</p>
                    <p className='text-[#5C5C5C]'>: 284 Daffodil Dr, Mount Frere,Eastern  Cape -5088 South Africa</p>
                </div>
                <div className="flex items-center gap-7 absolute top-0 right-0 cursor-pointer">
                    <RiDiscountPercentLine size={24} color='#58553A' />
                   <LiaEdit onClick={()=>setIsOpen(!isOpen)} size={24} color='#58553A' />
                </div>
            </div>
        <ProfileEditModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default ManagerDetails