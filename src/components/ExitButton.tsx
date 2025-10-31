import { ArrowLeftCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const ExitButton = () => {
  return (
    <button className='absolute top-2 left-0 p-2.5 text-[16px] rounded-lg border'>
        <Link to={'/profile'}>
            <ArrowLeftCircleIcon/> 
        </Link>
    </button>
  )
}

export default ExitButton
