import ExitButton from "../components/ExitButton"
import Logo from '../assets/bronMe_Logo.jpg'
const AboutAppPage = () => {
  return (
    <div>
      <p>
        <ExitButton/>
        <h2 className="text-center  font-semibold">Ilova haqida</h2>
      </p>
      <div className="w-full flex mt-10 justify-center">
        <img className="w-64 h-64" src={Logo} alt="logo" />
      </div>
      <p>
        <b>Bronme</b> — bu xizmat va joylarni tez va qulay bron qilish uchun yaratilgan mobil ilova. U orqali foydalanuvchilar istalgan vaqt va joyda onlayn band qilish, vaqtni tejash va jarayonni boshqarish imkoniga ega bo‘ladilar. Shuningdek, ilova real vaqt rejimida bandlikni ko‘rsatib beradi, eslatmalar yuboradi va to‘lovlarni xavfsiz amalga oshirish imkoniyatini yaratadi.
      </p>
    </div>
  )
}

export default AboutAppPage
