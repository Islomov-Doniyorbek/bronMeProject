import { ArrowLeftCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/react.svg'

const ProfileMyDataPage = () => {
    const img=Avatar;
  return (
    <div>
        <p className=' mt-4 flex relative justify-center items-start'>
            <button className='absolute top-2 left-0 p-2.5 text-[16px] rounded-lg border'>
                <Link to={'/profile'}>
                    <ArrowLeftCircleIcon/> 
                </Link>
            </button>
            {
                <div>
                    {img ? <img src={img} className='bg-blue-100 rounded-full w-28 h-28' alt="avatar" /> : <p>A</p>}
                </div>
            }
        </p>
        <div className='my-8 flex justify-evenly'>
            <button className='rounded-[7px] cursor-pointer py-2.5 px-5 border border-[#1F5099] text-[#1F5099] bg-[#1f50992d] text-[17px] font-medium'>Rasm yuklash</button>
            <button className='rounded-[7px] cursor-pointer py-2.5 px-5 text-[17px] border-[#EE5858] text-[#EE5858] bg-[#ee58582d]'>Rasmni o'chirish</button>
        </div>
        <form className='flex flex-col gap-2.5'>
            <label htmlFor="name">
                Ism: <br />
                <input type='tel' className='py-3 px-2 rounded-[7px] text-[#1F5099] bg-blue-50 w-full outline-0' />
            </label>
            <label htmlFor="lastname">
                Familiya: <br />
                <input type='tel' className='py-3 px-2 rounded-[7px] text-[#1F5099] bg-blue-50 w-full outline-0' />
            </label>
            <p className='flex gap-2.5 justify-between'>
                <label className='w-full' htmlFor="pol">
                    Jinsi: <br />
                    <select className='py-3 px-2 rounded-[7px] text-[#1F5099] bg-blue-50 w-full outline-0' >
                        <option value="male">Erkak</option>
                        <option value="female">Ayol</option>
                    </select>
                </label>
                <label className='w-full' htmlFor="birth">
                    Tug'ilgan sanasi: <br />
                    <input type='date' className='py-3 px-2 rounded-[7px] text-[#1F5099] bg-blue-50 w-full outline-0' />
                </label>
            </p>
            <label htmlFor="phone">
                Raqamni o'zgartirish: <br />
                <p className='flex w-full gap-2 justify-start'><span className='w-[140px]  py-3 px-2 rounded-[7px] text-[#1F5099] bg-blue-50 outline-0'>+998</span><input type='tel' className='w-full py-3 px-2 rounded-[7px] text-[#1F5099] bg-blue-50 outline-0' /></p>
            </label>
            <button className='py-4 px-2 rounded-[7px] bg-[#22348A] text-white mt-20 cursor-pointer' type="submit">O'zgarishlarni saqlash</button>
        </form>
    </div>
  )
}

export default ProfileMyDataPage
