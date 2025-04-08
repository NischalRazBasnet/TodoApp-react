import {
  Button,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const todoSchema = Yup.object({
  title: Yup.string().max(200).required(),
  email: Yup.string()
    .matches(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim, 'provide proper mail')
    .max(100)
    .required(),
  location: Yup.string().required(),
  colors: Yup.array().min(1).required(),
  country: Yup.string().required(),
  description: Yup.string().min(10).max(500).required(),
});

export default function TodoAdd() {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          email: '',
          location: '',
          colors: [],
          country: '',
          description: '',
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
        validationSchema={todoSchema}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldValue,
          touched,
          errors,
        }) => {
          return (
            <form onSubmit={handleSubmit} className='max-w-[400px] space-y-5'>
              <div>
                <Input
                  value={values.title}
                  onChange={handleChange}
                  label='Title'
                  name='title'
                />
                {errors.title && touched.title && (
                  <h1 className='text-pink-500'>{errors.title}</h1>
                )}
              </div>
              <div>
                <Input
                  value={values.email}
                  onChange={handleChange}
                  label='Email'
                  name='email'
                />
                {errors.email && touched.email && (
                  <h1 className='text-pink-500'>{errors.title}</h1>
                )}
              </div>

              <div className=''>
                <Typography variant='h6'>Select One</Typography>
                <div className='flex gap-10'>
                  <Radio
                    onChange={handleChange}
                    color='red'
                    name='location'
                    value={'Indoor'}
                    label='Indoor'
                  />
                  <Radio
                    color='amber'
                    onChange={handleChange}
                    name='location'
                    value={'Outdoor'}
                    label='Outdoor'
                  />
                </div>
                {errors.location && touched.location && (
                  <h1 className='text-pink-500'>{errors.location}</h1>
                )}
              </div>

              <div>
                <Typography variant='h6'>Select Colors</Typography>
                <div className='flex w-max gap-4'>
                  <Checkbox
                    name='colors'
                    label='Blue'
                    onChange={handleChange}
                    color='blue'
                    value={'blue'}
                  />
                  <Checkbox
                    name='colors'
                    label='Red'
                    onChange={handleChange}
                    color='red'
                    value={'red'}
                  />
                  <Checkbox
                    name='colors'
                    onChange={handleChange}
                    label='Green'
                    color='green'
                    value={'green'}
                  />
                </div>
                {errors.colors && touched.colors && (
                  <h1 className='text-pink-500'>{errors.colors}</h1>
                )}
              </div>

              <div>
                <div className='space-y-2'>
                  <Typography variant='h6'>Select your Country</Typography>
                  <Select
                    onChange={(e) => setFieldValue('country', e)}
                    label='Select Country'
                    name='country'
                  >
                    <Option value='Nepal'>Nepal</Option>
                    <Option value='india'>India</Option>
                    <Option value='china'>China</Option>
                  </Select>
                </div>
                {errors.country && touched.country && (
                  <h1 className='text-pink-500'>{errors.country}</h1>
                )}
              </div>

              <div>
                <Textarea
                  onChange={handleChange}
                  value={values.description}
                  label='Description'
                  name='description'
                />
                {errors.description && touched.description && (
                  <h1 className='text-pink-500'>{errors.description}</h1>
                )}
              </div>

              <Button type='submit'>Submit</Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
