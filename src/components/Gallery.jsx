function Gallery(user) {

    return (
        user?.gallery ? <div>Gallery</div> : <div className='flex justify-center items-center h-full w-full'><h1 className='text-[80px] font-[700] text-gray-200'>Coming Soon</h1></div>
    )
}

export default Gallery