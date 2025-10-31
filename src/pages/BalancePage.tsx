import { ArrowBigDown, ArrowBigUp, ArrowLeftCircleIcon } from 'lucide-react'
import Deco from '../../src/assets/decoration.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const BalancePage = () => {
  const inOut = [
    {
      id: 0,
      type: "in",
      transactionType: "Humo",
      date: "30.10.2025",
      price: "2100000"
    },
    {
      id: 1,
      type: "out",
      transactionType: "Visa",
      date: "30.10.2025",
      price: "2100000"
    },
    {
      id: 2,
      type: "out",
      transactionType: "UzCard",
      date: "30.10.2025",
      price: "2100000"
    },
    {
      id: 3,
      type: "out",
      transactionType: "ClickUp",
      date: "30.10.2025",
      price: "61000"
    },
    {
      id: 4,
      type: "in",
      transactionType: "Visa",
      date: "30.10.2025",
      price: "32000"
    },
  ]
  const [isInOut, setIsInOut] = useState(false)
  const b=326000
  return (
    <div>
        <p className=' mt-4 flex relative justify-center items-center'>
            <button className='absolute top-2 left-0 p-2.5 text-[16px] rounded-lg border'>
                <Link to={'/profile'}>
                    <ArrowLeftCircleIcon/> 
                </Link>
            </button>
            <h3 className='text-2xl font-semibold'>Balans</h3>
            <p></p>
        </p>
        <div className='mt-10 mb-1 relative py-4 overflow-hidden border border-blue-500 w-full h-[200px] rounded-[7px] flex flex-col justify-between items-center'>
          <img src={Deco} className=' absolute -top-6 -right-30'  alt="deco" />
          <p className='z-10 font-semibold'>Joriy balans</p>
          <strong className='z-10 text-xl'>{b > 0 ? "326,000 so'm" : "Mablag' yetarli emas!"}</strong>
          <div className='flex gap-3.5 z-10'>
            <button disabled={b>0} className={`${b<0 ? "cursor-pointer bg-[#22348A]" : "cursor-no-drop bg-[#54565f]"} text-xl py-2 px-6 rounded-[7px] text-white bg-[#22348A]`}>Chiqarish</button>
            <button className='text-xl py-2 px-6 rounded-[7px] text-white bg-[#22348A]'>To'ldirish</button>
          </div>
        </div>
        <p className=''>Qarzingiz: 0 so'm</p>
        <div className='w-full mt-4'>
          <div className=' w-full flex'>
            <button onClick={()=>setIsInOut(false)} className={`w-full border-b-2 ${isInOut ? "border-transparent text-gray-400" : "border-[#22348a] text-[#22348a]"} font-semibold  text-lg`}>Kirim</button>
            <button onClick={()=>setIsInOut(true)} className={`w-full border-b-2 ${!isInOut ? "border-transparent text-gray-400" : "border-[#22348a] text-[#22348a]"} font-semibold  text-lg`}>Chiqim</button>
          </div>
          <ol>
            {
            inOut
              .filter(item => item.type === (isInOut ? "out" : "in"))
              .map(item => <li key={item.id}
              className='flex justify-between p-2'>
                <div className='flex gap-4.5 items-center'>
                  {item.type === "in" ? <ArrowBigDown/> : <ArrowBigUp/>} <span className='text-xl font-semibold'>{item.transactionType}</span>
                </div>
                <div>
                  <b className={`${item.type === "out" ? "text-red-600" : "text-green-600"}`}>{item.price} so'm</b><br />
                  {item.date}
                </div>
              </li>)
            }

          </ol>
        </div>
    </div>
  )
}

export default BalancePage
