import { useState } from 'react'
import LogoLogin from '../../assets/logo-login.jpg'
import {BiShow} from 'react-icons/bi'
const Login = () => {
    const [check, setCheck] = useState(false)
    return (
        <>
            <section className='container flex justify-center flex-wrap xl:flex-nowrap relative mt-52  font-roboto'>
                <div className='hidden xl:block basis-1/2'>
                    <img src={LogoLogin} alt="" />
                </div>
                <div className='flex flex-col items-center basis-full xl:basis-1/2 mx-4 xl:mx-0'>
                    <form className=' shadow-md rounded-lg flex max-w-[500px] p-10 h-full w-full gap-y-3 flex-col' action="/admin/dashboard">
                        <h1 className='font-extrabold text-center mb-20 text-3xl'>Login Admin</h1>
                        <div className='my-5 h-28'>
                            <input className='border h-full w-full rounded-lg px-2' placeholder='Username' id="username" type="text" autoComplete="off" />
                        </div>
                        <div className='my-5 flex border focus-within:ring-2 ring-slate-900 h-28 overflow-hidden rounded-lg items-center  '>
                            <input className='w-full  outline-none h-full px-2' id="password"  type={check ? 'text' : 'password' } placeholder='Password'/>
                            <label className="cursor-pointer h-full">
                                <span className={`${check ? 'opacity-100 text-slate-200 ' : ''} text-slate-800 transition rounded-lg opacity-50 items-center justify-center h-full w-10 text-xl flex`}><BiShow/></span>
                                <input className='hidden'  hidden onClick={() => setCheck(check ? false : true)} type="checkbox"   />
                            </label>
                        </div>
                        <div className='flex flex-col h-full justify-end w-full '>
                            <button className='px-3 py-2 hover:opacity-75  bg-[#FFFBE8]' type='submit'>Masuk</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login