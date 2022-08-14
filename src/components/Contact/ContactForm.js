import React, { useContext, useRef } from 'react';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { uiContext } from '../context/ui-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const textfielDetails = [
   {
      label: 'Name',
      name: 'user_name',
      type: 'text'
   },
   {
      label: 'Email',
      name: 'user_email',
      type: 'email'
   },
   {
      label: 'Subject',
      name: 'subject',
      type: 'text'
   },
   {
      label: 'Message',
      name: 'message',
      type: 'text'
   }
];

const defaultValues = {
   user_name: '',
   user_email: '',
   subject: '',
   message: ''
}

const ContactForm = () => {
   const formRef = useRef();
   const { loading, setLoading, setShowSnackbar, darkMode } = useContext(uiContext);

   const validationSchema = Yup.object().shape({
      user_name: Yup.string()
         .required('Name is required')
         .min(2, 'Name must be at least 2 characters')
         .max(100, 'Name must not exceed 100 characters')
         .matches(/^\s*([A-Za-z]{1,}([.,] |[-']| ))+[A-Za-z]+.?\s*$/, 'Please enter a valid full name'),
      user_email: Yup.string()
         .required('Email is required')
         .email('Email is invalid')
         .matches(/^([a-z0-9_.-]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/, 'Please enter a valid email address'),
      subject: Yup.string()
         .required('Message is required')
         .min(2, 'Subject must be at least 2 characters')
         .max(50, 'Subject must not exceed 50 characters')
         .matches(/^[A-Z][a-z]*/, 'Please enter the subject correctly'),
      message: Yup.string()
         .required('Message is required')
         .min(2, 'message must be at least 2 characters')
         .max(500, 'message must not exceed 500 characters')
         .matches(/^[A-Z][a-z]*/, 'Please enter the message correctly')
   });

   const {
      register,
      handleSubmit,
      reset,
      formState: {
         errors
      }
   } = useForm({
      resolver: yupResolver(validationSchema),
      defaultValues: defaultValues
   });

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   const sendEmail = async (e) => {
      const sendMail = async () => {
         setLoading(true);
         emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            'template_o7nw8ar',
            formRef.current,
            process.env.REACT_APP_EMAILJS_API_KEY
         ).then((result) => {
            setLoading(false);
            reset({ ...defaultValues });
            setShowSnackbar({ value: true, text: 'Successfully sent!' });
         }, (error) => {
            console.log(error.text);
            setLoading(false);
            setShowSnackbar({ value: true, text: 'Something went wrong!' });
         });
      }

      await sendMail();
   };

   return (
      <Box>
         <form ref={formRef}>
            <Box
               sx={theme => ({
                  marginBottom: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1rem',
                  [theme.breakpoints.down('xl')]: {
                     marginBottom: '1.75rem',
                     rowGap: '1.75rem'
                  },
                  [theme.breakpoints.down('lg')]: {
                     marginBottom: '1.5rem',
                     rowGap: '1.5rem'
                  },
                  [theme.breakpoints.down('md')]: {
                     rowGap: '1.25rem',
                     marginBottom: '1.25rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     rowGap: '1rem',
                     marginBottom: '1rem'
                  }
               })}
            >
               {textfielDetails.map((item, index) => (
                  <Box sx={{ width: '100%' }} key={index}>
                     <TextField
                        required
                        multiline
                        rows={index === textfielDetails.length - 1 ? (lgWidth ? 4 : 5) : 1}
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        variant="outlined"
                        sx={{
                           background: errors[item.name] && !darkMode ? '#fff0f0' :
                              errors[item.name] && darkMode ? '#2a2541' :
                                 !errors[item.name] && darkMode ? '#2a2541' :
                                    '#f8f6fe',
                           width: '100%',
                           '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                 borderColor: darkMode ? '#2a2541' : '#f8f6fe',
                                 borderRadius: 0,
                              },
                              '&:hover fieldset': {
                                 borderColor: darkMode ? '#2a2541' : '#f8f6fe',
                              },
                              '&.Mui-focused fieldset': {
                                 borderColor: errors[item.name] && darkMode ? 'red' :
                                    !errors[item.name] && darkMode ? '#8d85b9' :
                                       '#784cfb',
                              },
                           },
                        }}
                        InputLabelProps={{
                           style: {
                              color: errors[item.name] && !darkMode ? '#ff6666' :
                                 errors[item.name] && darkMode ? '#ff6666' :
                                    !errors[item.name] && darkMode ? '#8d85b9' :
                                       'rgba(120, 76, 251, 0.75)',
                              fontSize: mdWidth ? '14px' : '15px'
                           }
                        }}
                        {...register(item.name, { required: true })}
                     />
                     <Typography
                        sx={{
                           textAlign: 'start',
                           fontWeight: 500,
                           fontSize: '13px',
                           marginTop: '5px',
                           color: 'red'
                        }}
                     >
                        {errors[item.name]?.message}
                     </Typography>
                  </Box>
               ))}
            </Box>
            <Button
               className={darkMode ? 'primary-button-dark' : 'primary-button'}
               disableElevation
               variant='contained'
               type='submit'
               disabled={loading ? true : false}
               onClick={handleSubmit(sendEmail)}
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: '0.5s',
                  fontSize: '13px',
                  minHeight: 0,
                  minWidth: 0,
                  width: '147.85px',
                  color: darkMode ? '#bdb5e3' : '#fff',
                  height: height,
                  "&:hover": {
                     backgroundPosition: 'right center'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '12px',
                     width: '141.32px'
                  },
                  "&:disabled": {
                     color: '#fff'
                  }
               })}
            >
               <span>Contact Me</span>
               {
                  loading ?
                     <CircularProgress
                        size={smWidth ? '17px' : '22px'}
                        sx={{ color: '#fff' }}
                     /> :
                     <SendIcon
                        sx={{
                           fontSize: '1.3rem'
                        }}
                     />
               }
            </Button>
         </form>
      </Box>
   );
};

export default ContactForm;