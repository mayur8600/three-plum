import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";
import CheckOutsideClick from '../components/CheckOutsideClick';
import Gallery from '../components/Gallery';
import Posts from '../components/Posts';
import Profile from '../components/Profile';
import ShortProfile from '../components/ShortProfile';
import Todo from '../components/Todo';
import userData from '../data/users.json';

function UserDetails() {
    const location = useLocation();
    const [selectedUser, setSelectedUser] = useState();
    const [selectedDefaultOne, setSelectedDefaultOne] = useState();
    const [selectedDefaultTwo, setSelectedDefaultTwo] = useState()
    const [selectedPage, setSelectedPage] = useState('Profile')
    const [popUp, setPopUp] = useState(false)
    const param = location.pathname.split('/');
    const navigate = useNavigate();

    useEffect(() => {
        userData.users.map((user) => {
            if (user.id === +param[1]) {
                setSelectedUser(user)
            }
            if (user.id === 1) {
                setSelectedDefaultOne(user)
            }
            if (user.id === 2) {
                setSelectedDefaultTwo(user)
            };
            return true;
        })
        setSelectedPage(param?.length > 1 && param[2] ? param[2] : 'Profile')

    }, [location, selectedDefaultOne, selectedDefaultTwo])

    const closeDropdown = () => {
        setPopUp(false);
    }

    const HandlePopUp = () => {
        setPopUp(!popUp)
    }

    return (
        <div className='w-screen h-screen  flex gap-10 px-8  pt-3 overflow-x-hidden'>
            <div className='bg-gradient-to-r from-[#5168cd] to-[#3e57c8]  h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 text-white'>
                <div className='border-b capitalize border-white block w-full py-3' onClick={() => navigate(`/${+param[1]}/`)}><p className='cursor-pointer'>Profile</p></div>
                <div className='border-b capitalize border-white block w-full py-3' onClick={() => navigate(`/${+param[1]}/posts`)}><p className='cursor-pointer'>Posts</p></div>
                <div className='border-b capitalize border-white block w-full py-3' onClick={() => navigate(`/${+param[1]}/gallery`)}><p className='cursor-pointer'>Gallery</p></div>
                <div className='border-b capitalize border-white block w-full py-3' onClick={() => navigate(`/${+param[1]}/toDO`)}><p className='cursor-pointer'>ToDO</p></div>
            </div>
            <div className='flex flex-col w-full'>
                <div className='h-[13vh]  w-[100%] border-b border-gray-300'>
                    <div className='flex h-full items-center justify-between '>
                        <div className='capitalize text-[20px] text-gray-500'>
                            <p>{selectedPage}</p>
                        </div>
                        <div className='relative inline-block text-left mt-5 ml-40 '>
                            <div>
                                <CheckOutsideClick onClickOutside={closeDropdown}>
                                    <button className='inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none' onClick={HandlePopUp}>
                                        <div className=' cursor-pointer flex justify-end gap-3 items-center'>
                                            <img className='rounded-full w-[40px]' loading='eager' src={selectedUser?.profilepicture} alt='img' />
                                            <p>{selectedUser?.name}</p>
                                        </div>
                                    </button>
                                    {popUp && <ShortProfile user={selectedUser} selectedDefaultOne={selectedDefaultOne} selectedDefaultTwo={selectedDefaultTwo} setSelectedUsers={setSelectedUser} />}
                                </CheckOutsideClick>
                            </div>
                        </div>
                    </div>
                </div>
                {selectedPage === 'Profile' && <Profile user={selectedUser} />}
                {selectedPage === 'posts' && <Posts user={selectedUser} />}
                {selectedPage === 'gallery' && <Gallery user={selectedUser} />}
                {selectedPage === 'toDO' && <Todo user={selectedUser} />}
            </div>
        </div>
    )
}

export default UserDetails