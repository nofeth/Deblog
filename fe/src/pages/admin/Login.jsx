import { useState } from 'react'
import LogoLogin from '../../assets/logo-login.jpg'
const Login = () => {
    const [check, setCheck] = useState(false)
    return (
        <>
            <section className='container  flex items-center justify-center relative mt-52  font-robot'>
                <div className='basis-1/2'>
                    <img src={LogoLogin} alt="" />
                </div>
                <div className='border flex justify-center items-center basis-1/2'>
                    <form className='flex flex-col w-full' action="">
                        <div>
                            <label htmlFor="">Username</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input className='border px-4'  type={check ? 'text' : 'password' } />
                            <input onClick={() => setCheck(check ? false : true)} type="checkbox"  id="" />
                        </div>
                        <button className='px-3 py-2 border tex-w bg-[#FFFBE8]' type='submit'>Masuk</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login