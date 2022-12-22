import React from 'react'
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function ButtonCustom({text, endpoint}) {


    const navigate = useNavigate();


    function navigazione(){
        navigate(endpoint)

    }
  return (
    <Button variant='contained' onClick={navigazione}>{text}</Button>
  )
}
