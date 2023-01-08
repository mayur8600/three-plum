import UsersData from './UsersData'

function CenterBox() {
  
  return (
    <div className='h-[85vh] shadow-2xl w-2/5 rounded-[25px] bg-white border'>
      <div className='w-full rounded-t-[25px] flex justify-center items-center h-[16vh] text-gray-600 bg-gray-100 text-xl'>
        <p>Select an account</p>
      </div>
      <div className=' h-[65vh] pb-4 overflow-y-auto scrollbar-hidden'>
        <UsersData />
      </div>
    </div>
  )
}

export default CenterBox