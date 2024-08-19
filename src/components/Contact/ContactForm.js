import React, { useContext, useRef } from 'react';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import emailjs from '@emailjs/browser';
import { uiContext } from '../../context/ui-context';
import { useForm } from 'react-hook-form';
import { BiSend } from 'react-icons/bi';

const containerStyle = theme => ({
   marginBottom: '1.5rem',
   display: 'flex',
   flexDirection: 'column',
   rowGap: '1rem',
   [theme.breakpoints.down('xl')]: {
      marginBottom: '1.25rem'
   }
});

const btnStyle = theme => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start',
   transition: '0.5s ease',
   fontSize: '14px',
   minHeight: 0,
   padding: '12px 24px',
   color: 'text.white',
   height: '48px',
   borderRadius: '50px',
   minWidth: 0,
   width: '174.42px',
   "&:hover": {
      backgroundPosition: 'right center'
   },
   [theme.breakpoints.down('xl')]: {
      width: '167.58px',
      padding: '10px 24px',
      fontSize: '13px',
      height: '42px'
   },
   [theme.breakpoints.down('md')]: {
      margin: '0 auto'
   },
   [theme.breakpoints.down('sm')]: {
      width: '160.75px',
      fontSize: '12px',
      height: '40px'
   }
});

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

   const {
      register,
      handleSubmit,
      reset,
      formState: {
         errors
      }
   } = useForm({
      defaultValues: defaultValues
   });

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

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
      <form ref={formRef}>
         <Box sx={containerStyle}>
            {
               textfielDetails.map((item, index) => (
                  <div style={{ width: '100%' }} key={index}>
                     <TextField
                        required
                        multiline
                        rows={index === textfielDetails.length - 1 ? 4 : 1}
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        variant="outlined"
                        sx={{
                           width: '100%',
                           '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              '& fieldset': {
                                 borderColor: 'secondary.main',
                              },
                              '&:hover fieldset': {
                                 borderColor: 'secondary.main',
                              },
                              '&.Mui-focused fieldset': {
                                 borderColor: errors[item.name] ? 'red' : 'secondary.main'
                              },
                           },
                        }}
                        InputLabelProps={{
                           style: {
                              color: darkMode ? '#a49ec7' : '#6039d6',
                              fontSize: mdWidth ? '14px' : '15px',
                              fontWeight: 500
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
                        {errors[item.name] && <span>{item.label} is required</span>}
                     </Typography>
                  </div>
               ))
            }
         </Box>
         <Button
            className={!loading && (darkMode ? 'primary-button-dark' : 'primary-button')}
            disableElevation
            variant='contained'
            disabled={loading}
            onClick={handleSubmit(sendEmail)}
            type='submit'
            sx={btnStyle}
         >
            <span>Contact Me</span>
            {
               loading ?
                  <CircularProgress
                     size={'20px'}
                     sx={{ color: 'text.secondary', marginLeft: '10px' }}
                  /> :
                  <BiSend style={{ marginLeft: '10px', fontSize: '1.3rem' }} />
            }
         </Button>
      </form>
   );
};

export default ContactForm;