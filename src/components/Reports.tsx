import { Menu } from 'lucide-react';
import Deco from '../../src/assets/decoration.svg'

// interface ReportData {
//     id: string;
//     title: string;
//     clients: number;
//     total: string;
// }
const Reports = () => {
    const reports = [
        {
            id: "today",
            title: "Bugun",
            clients: 44,
            total: '2300000',
        },
        {
            id: "yesterday",
            title: "Kecha",
            clients: 44,
            total: '2300000',
        },
        {
            id: "week",
            title: "Haftalik",
            clients: 44,
            total: '2300000',
        },
        {
            id: "month",
            title: "Oylik",
            clients: 44,
            total: '2300000',
        },
        {
            id: "years",
            title: "Yillik",
            clients: 44,
            total: '23900000',
        },
    ]
    // setReports([])
  return (
    <div className='w-full pb-16'>
        <div className="flex items-center justify-between">
            <div className="flex items-center px-4 py-3 space-x-2">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Mijozlar qabuli bo’yicha <br /> statistka</h1>
            </div>
            </div>
            
            <div className="flex items-center space-x-3">
            <Menu className="w-5 h-5 text-gray-600" />
            
            </div>
        </div>
        <div className="relative">
            <div className="flex flex-col justify-around overflow-hidden relative px-4 py-4 my-4 shadow-md border border-[#DEE3FB] rounded-xl h-[150px]">
                <h2 className='text-xl font-medium'>Umumiy daromad</h2>
                <p className='text-3xl text-[#22348A] font-bold'>6,320,000 so'm</p>
                <img src={Deco} alt="deco" className=' absolute -top-6 -right-10' />
            </div>
            {
                reports.map((report, i)=>{
                    return (
                        <div key={i} className="flex flex-col justify-between overflow-hidden relative px-4 py-4 my-4 shadow-md border border-[#DEE3FB] rounded-xl h-[150px]">
                            <h2 className='text-xl font-medium'>{report.title}</h2>
                            <div className='text-[15px] font-normal'>
                                <p>Mijozlar: {report.clients}</p>
                                <p>Daromad: {report.total}</p>
                            </div>
                            <img src={Deco} alt="deco" className=' absolute -top-6 -right-10' />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Reports
