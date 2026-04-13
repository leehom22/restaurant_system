import React, { useEffect, useRef, useState } from 'react'
import { register } from '../../assets'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'

const Register = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const targetRef = useRef(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked')
  }

  useEffect(() => {
    if( targetRef.current){
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
  },[])

  return (
    <div className='min-h-screen flex bg-gradient-to-br from-orange-50 to-amber-50'>
        {/* Left Side - Image */}
        <div className='hidden lg:flex lg:justify-center lg:items-center lg:w-1/2 p-8'>
          <div className='w-full rounded-3xl overflow-hidden shadow-2xl'>
            <img 
              src={register} 
              alt="Restaurant" 
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className='w-full lg:w-1/2 flex items-center justify-center p-8' ref={targetRef}>
          <div className='w-full max-w-md'>
            {/* Logo/Header */}
            <div className='text-center mb-8'>
              <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h1>
              <p className='text-gray-600'>
                {isLogin 
                  ? 'Sign in to continue your culinary journey' 
                  : 'Join us for an amazing food experience'}
              </p>
            </div>

            {/* Form Container */}
            <div className='bg-white rounded-2xl shadow-xl p-8'>
              {/* Toggle Login/Signup */}
              <div className='flex gap-2 mb-8 bg-gray-100 rounded-lg p-1'>
                <button
                  type='button'
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 rounded-md font-medium transition-all ${
                    isLogin 
                      ? 'bg-white text-mcdRed shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Login
                </button>
                <button
                  type='button'
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 rounded-md font-medium transition-all ${
                    !isLogin 
                      ? 'bg-white text-mcdRed shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Name Field - Only for Signup */}
                {!isLogin && (
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Full Name
                    </label>
                    <div className='relative'>
                      <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='John Doe'
                        className='w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors'
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='you@example.com'
                      className='w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors'
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Password
                  </label>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='••••••••'
                      className='w-full pl-11 pr-11 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors'
                      required
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password - Only for Signup */}
                {!isLogin && (
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Confirm Password
                    </label>
                    <div className='relative'>
                      <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='••••••••'
                        className='w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors'
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Forgot Password - Only for Login */}
                {isLogin && (
                  <div className='flex items-center justify-between'>
                    <label className='flex items-center'>
                      <input type='checkbox' className='w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500' />
                      <span className='ml-2 text-sm text-gray-600'>Remember me</span>
                    </label>
                    <button type='button' className='text-sm text-orange-500 hover:text-orange-600 font-medium'>
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-mcdRed text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl'
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>

                {/* Divider */}
                <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-4 bg-white text-gray-500'>Or continue with</span>
                  </div>
                </div>

                {/* Google Sign In */}
                <button
                  type='button'
                  onClick={handleGoogleSignIn}
                  className='w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200'
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8055 10.2292C19.8055 9.55167 19.7503 8.86834 19.6315 8.20001H10.2002V12.0492H15.6017C15.3773 13.2908 14.656 14.3892 13.6052 15.0875V17.5867H16.8276C18.7177 15.8458 19.8055 13.2725 19.8055 10.2292Z" fill="#4285F4"/>
                    <path d="M10.2002 20C12.9527 20 15.2719 19.1042 16.8318 17.5867L13.6094 15.0875C12.7135 15.6975 11.5635 16.0433 10.2044 16.0433C7.54354 16.0433 5.28604 14.2842 4.49271 11.9167H1.17188V14.4925C2.76604 17.6592 6.31021 20 10.2002 20Z" fill="#34A853"/>
                    <path d="M4.48854 11.9167C4.03854 10.675 4.03854 9.33 4.48854 8.08833V5.5125H1.17188C-0.211458 8.26917 -0.211458 11.7317 1.17188 14.4883L4.48854 11.9167Z" fill="#FBBC04"/>
                    <path d="M10.2002 3.95667C11.6377 3.93417 13.0235 4.47167 14.0702 5.45917L16.9302 2.60167C15.186 0.990837 12.7344 0.0950036 10.2002 0.12167C6.31021 0.12167 2.76604 2.4625 1.17188 5.51251L4.48854 8.08834C5.27771 5.71584 7.53937 3.95667 10.2002 3.95667Z" fill="#EA4335"/>
                  </svg>
                  Sign {isLogin ? 'in' : 'up'} with Google
                </button>
              </form>

              {/* Terms & Privacy - Only for Signup */}
              {!isLogin && (
                <p className='mt-6 text-center text-xs text-gray-500'>
                  By signing up, you agree to our{' '}
                  <button type='button' className='text-orange-500 hover:underline'>Terms of Service</button>
                  {' '}and{' '}
                  <button type='button' className='text-orange-500 hover:underline'>Privacy Policy</button>
                </p>
              )}
            </div>

            {/* Mobile Image Preview */}
            <div className='lg:hidden mt-8 rounded-2xl overflow-hidden shadow-lg'>
              <img 
                src={register} 
                alt="Restaurant" 
                className='w-full h-48 object-cover'
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register