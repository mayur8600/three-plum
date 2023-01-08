import { useNavigate } from "react-router-dom";
import userData from '../data/users.json'

function UsersData() {
    const navigate = useNavigate();
    const handleUser = (user) => {
        navigate(`/${user?.id}`)
    }

    return (
        <div className=' h-[65vh] pb-4 pl-7 pr-2 overflow-y-auto scrollbar'>{
            userData?.users.map((user) => {
                return <div key={user.id} onClick={() => handleUser(user)} className='cursor-pointer flex gap-3 items-center border-b py-2 h-[53.4px]'>
                    <img className='rounded-full w-[7%]' src={user.profilepicture} alt='img' />
                    <div className='text-md text-gray-700 font-[400]'>
                        <p className='text-md text-gray-700 font-[400]'>{user.name}</p>
                    </div>
                </div>
            })
        }</div>
    )
}

export default UsersData