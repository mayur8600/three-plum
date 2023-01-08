import { useEffect, useState } from 'react'

function Profile(user) {
    const [selectedUser, setSelectedUser] = useState();

    useEffect(() => {
        setSelectedUser(user?.user)
    }, [user])

    return (
        user ? <div className='block'>
            <div className='w-full h-full flex mt-5'>
                <div className='border-r border-gray-300 h-full w-[40%]'>
                    <div className='flex flex-col  w-full items-center h-full justify-center'>
                        <img src={selectedUser?.profilepicture} className='rounded-full w-[48%]' alt='img' />
                        <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.name}</p>
                        <div className='flex flex-col gap-2 border-b border-gray-300 py-3'>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>Username   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.username}</p>
                            </div>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>email   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.email}</p>
                            </div>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>phoneNumber   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.phone}</p>
                            </div>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>website   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.website}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-2 py-3'>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>Company Name   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.company?.name}</p>
                            </div>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>catchPhrase   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.company?.catchPhrase}</p>
                            </div>
                            <div className='flex gap-3 items-center justify-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>bs   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.company?.bs}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' h-full w-[60%]'>
                    <div className='flex flex-col gap-4'>
                        <div className='pl-9 mt-2'>
                            <p className='text-[16px] font-[400] text-gray-400'>Address:</p>
                        </div>
                        <div className='ml-[70px] flex flex-col gap-1'>
                            <div className='flex gap-3 items-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>Street   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.address?.street}</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>Suite   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.address?.suite}</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>City   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.address?.city}</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <p className='text-[16px] font-[400] text-gray-400'>Zipcode   :</p>
                                <p className='text-[16px] font-[400] text-gray-800'>{selectedUser?.address?.zipcode}</p>
                            </div>
                        </div>
                        <div className='flex flex-col w-full justify-center items-center gap-1'>
                            <img className='w-[80%]' src='https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg' alt='img' />
                            <div className='flex flex-row-reverse w-[80%] m-[auto]  gap-4 text-[12px]'>
                                <div className='flex gap-2'>
                                    <p className='text-gray-400'>Lat:</p>
                                    <p>{selectedUser?.address?.geo?.lat}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-gray-400'>Long:</p>
                                    <p>{selectedUser?.address?.geo?.lng}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> : <div className='flex justify-center items-center h-full w-full'><h1 className='text-[80px] font-[700] text-gray-200'>Coming Soon</h1></div>
    )
}

export default Profile