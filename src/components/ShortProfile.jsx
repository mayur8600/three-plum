import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ShortProfile(props) {
    const { user, selectedDefaultOne, selectedDefaultTwo, setSelectedUsers } = props;
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState();
    const [selectedUserOne, setSelectedUserOne] = useState();
    const [selectedUserTwo, setSelectedUserTwo] = useState();

    useEffect(() => {
        setSelectedUser(user);
        setSelectedUserOne(selectedDefaultOne);
        setSelectedUserTwo(selectedDefaultTwo);
    }, [user, selectedDefaultOne, selectedDefaultTwo, setSelectedUsers]);

    return (
        <div className='absolute right-0 z-10 mt-2 w-[20vw] origin-top-right rounded-md bg-white shadow-lg focus:outline-none popout'>
            <div className='py-1'>
                <div className=' flex flex-col justify-center items-center gap-2 pb-3'>
                    <img className='rounded-full' loading='lazy' src={selectedUser?.profilepicture} width='50%' alt='img' />
                    <p>{selectedUser?.name}</p>
                    <p className='text-[14px] text-gray-400'>{selectedUser?.email}</p>
                    <div className='mx-5 border-t border-gray-300 mt-3'>
                        <div onClick={() => { setSelectedUsers(selectedDefaultOne) }} className='cursor-pointer flex gap-3 justify-center items-center border-b py-2 '>
                            <img className='rounded-full w-[10%]' src={selectedUserOne?.profilepicture} alt='img' />
                            <div className='text-md text-gray-700 font-[400]'>
                                <p>{selectedUserOne?.name}</p>
                            </div>
                        </div>
                        <div onClick={() => { setSelectedUsers(selectedDefaultTwo) }} className='cursor-pointer flex gap-3 justify-center items-center border-b py-2 '>
                            <img className='rounded-full w-[10%]' src={selectedUserTwo?.profilepicture} alt='img' />
                            <div className='text-md text-gray-700 font-[400]'>
                                <p>{selectedUserTwo?.name}</p>
                            </div>
                        </div>
                    </div>
                    <button className='mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]' onClick={() => navigate('/')}>Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default ShortProfile