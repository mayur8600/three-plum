function Todo(user) {

    return (
        user?.todo ? <div>Todo</div> : <div className='flex justify-center items-center h-full w-full'><h1 className='text-[80px] font-[700] text-gray-200'>Coming Soon</h1></div>
    )
}

export default Todo