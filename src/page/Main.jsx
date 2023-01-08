import Background from '../components/Background'
import CenterBox from '../components/CenterBox'

function Main() {

    return (
        <div className='relative'>
            <Background />
            <div className='absolute top-0 w-full h-screen flex justify-center items-center'><CenterBox /></div>
        </div>
    )
}

export default Main