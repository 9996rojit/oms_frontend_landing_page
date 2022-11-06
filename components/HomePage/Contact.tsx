import React, { useState } from 'react';
import Header from '../Header';
import Button from '../UI/Button';
import Layout from '../UI/Layout';
import { useForm } from 'react-hook-form';
import Error from '../UI/Error';

interface Form {
  fullName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Form>({ reValidateMode: 'onChange' });

  const handleSubmitForm = (data: Form) => {
    console.log('form data', data);
  };

  return (
    <div className='h-screen text-[#F7F7FC]'>
      <Header />
      <Layout>
        <div className='lg:flex  lg:justify-between'>
          <div className=''>
            <div
              className='text-[76px] lg:text-[104px]'
              style={{ fontFamily: 'Okine' }}
            >
              Contact
            </div>
            <div className='w-[234px]'>
              We Provide You The Best interface To Keep Your Business Intact
              With Each Other By Maintaining Your Inventory
            </div>
          </div>
          <form
            className='mt-9 w-full lg:max-w-[490px] flex flex-col gap-y-10 lg:mr-[144px] lg:py-[90px] lg:px-[48px]'
            style={{ boxShadow: '0px 4px 38px #363739' }}
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div>
              <input
                {...register('fullName', { required: 'Full Name is Required' })}
                type='text'
                name='fullName'
                placeholder='Full Name'
                className='border-b-2 border-white focus:border-primary placeholder:text-[#F7F7F7] bg-transparent w-full py-2 px-3 outline-none'
              />
              <div className='mt-2'>
                {errors?.fullName && (
                  <Error message={errors?.fullName?.message || ''} />
                )}
              </div>
            </div>
            <div className=''>
              <input
                {...register('email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
                name='email'
                placeholder='Email'
                className='border-b-2 border-white focus:border-primary placeholder:text-[#F7F7F7] bg-transparent w-full py-2 px-3 outline-none'
              />
              <div className='mt-2'>
                {errors?.email && (
                  <Error message={errors?.email?.message || ''} />
                )}
              </div>
            </div>

            <div className=''>
              <textarea
                {...register('message', {
                  required: 'Message is Required',
                  maxLength: { message: 'Max Length is 50', value: 50 },
                })}
                name='message'
                placeholder='Message'
                className='border-b-2 border-white focus:border-primary placeholder:text-[#F7F7F7] bg-transparent w-full py-2 px-3 outline-none'
              />

              <div className='text-[#4c9412fc] text-xs flex justify-end'>
                {watch('message')?.length || 0} / 50
              </div>

              {errors?.message && (
                <Error message={errors?.message?.message || ''} />
              )}
            </div>

            <Button buttonType='primary' type='submit'>
              Contact Now
            </Button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
