import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const PasswordField = ({ control }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {register} = control

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative border-[1px] border-[#C1D5F6] rounded-[8px]">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter Your Pawword"
        className="px-4 py-2 outline-none border-none rounded-[8px]"
        {...register(`password`, {
          required: `password is required`,
        })}
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <Icon icon="majesticons:eye-off" className='text-[#B3B3B3]' />
        ) : (
            <Icon icon="iconamoon:eye-fill" className='text-[#B3B3B3]' />
        )}
      </div>
    </div>
  );
};

export const ConfirmPasswordField = ({ control,passwordValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {register} = control
 

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="relative border-[1px] border-[#C1D5F6] rounded-[8px]">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter Your Pawword"
        className="px-4 py-2 outline-none border-none rounded-[8px]"
        {...register(`confirmPassword`, {
          required: `confirmPassword is required`,
          validate:{
            notMatch:(fieldValue) =>{
              return(
                fieldValue === passwordValue || "dont match with password"
              )
            }
          }
        })}
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <Icon icon="majesticons:eye-off" className='text-[#B3B3B3]' />
        ) : (
            <Icon icon="iconamoon:eye-fill" className='text-[#B3B3B3]' />
        )}
      </div>
    </div>
  );
};


