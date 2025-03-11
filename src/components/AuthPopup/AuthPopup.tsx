import React from 'react'
import './AuthPopup.css'
import logo from '@/assets/logo.webp'
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


const AuthPopup = () => {

    const [showSignup,setShowSignup] = React.useState<boolean>(false)

    const handlelogin = () => {}
    const handleSignup = () => {}
  return (
    <div className='popup'>
        {
            showSignup ? (
                <div className='authform'>
                    <div className='left'>
                        <img src={logo.src} alt="logo"/>
                    </div>
                <div className='right'>
                    <h1>Signup to become a Freak</h1>
                    <form action="">
                    <Input
                        color="success"
                        placeholder="email"
                        size="lg"
                        variant="solid"
                        />
                    <Input
                        color="success"
                        placeholder="password"
                        size="lg"
                        variant="solid"
                        type='password'
                        />

                        <div className='form_input_leftright'>
                            <Input color="success" size="lg" variant="solid" type="number" placeholder='Age' />
                            <Input color="success" size="lg" variant="solid" type="number" placeholder='Weight' />
                        </div>

                        <Select
                            color="success"
                            placeholder="Gender"
                            size="lg"
                            >
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                            <Option value="Other">Other</Option>
                            </Select>
                            
                            <br/>

                            <label htmlFor="">Height</label>
                            <div className='form_input_leftright'>
                                {/* 5ft 11inch */}
                                <Input color="success" size="lg" variant="solid" type="number" placeholder='ft' />
                                <Input color="success" size="lg" variant="solid" type="number" placeholder='in' />
                            </div>

                        <button 
                        onClick={() => {
                            handleSignup()
                        }}
                        >Signup</button>
                    </form>
                    <p>Already have an Account ? <button onClick={() => {
                    setShowSignup(false)
                }}>Login</button></p>
                </div>
                
            </div>
            ):(
                <div className='authform'>
                    <div className='left'>
                        <img src={logo.src} alt="logo"/>
                    </div>
                    <div className='right'>
                        <h1>Login to become a Freak</h1>
                        <form action="">
                        <Input
                            color="success"
                            placeholder="email"
                            size="lg"
                            variant="solid"
                            />
                        <Input
                            color="success"
                            placeholder="password"
                            size="lg"
                            variant="solid"
                            type='password'
                            />
                            <button 
                            onClick={() => {
                                handlelogin()
                            }}
                            >Login</button>
                        </form>
                        <p>Don't have an Account ? <button onClick={() => {
                        setShowSignup(true)
                    }}>Signup</button></p>
                    </div>
                    
                </div>
            )
        }
    </div>
  )
}

export default AuthPopup