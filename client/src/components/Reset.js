import React from 'react'
import { Toaster } from 'react-hot-toast';//show mssg send or error
import { useFormik } from 'formik'//show mssg sent success or not
import{resetPasswordValidation} from '../helper/validate'

import styles from '../styles/Username.module.css'

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd:'',
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  }
  )

  return (
    <div className="container mx-auto ">
      <Toaster position='top-right' reverseOrder={false}></Toaster>
      <div className="flex  justify-center items-center ">
        <div className={styles.glass}  >

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Enter New Password</span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
            

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
              <input {...formik.getFieldProps('confirm_pwd')} className= {styles.textbox} type="text" placeholder='Confirm Password' />
              <button className={styles.btn} type='submit'> Reset</button>
            </div>       
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset;