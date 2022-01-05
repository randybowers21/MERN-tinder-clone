import React from 'react';
import './Header.css';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonOutlineRoundedIcon fontSize='large' className='header__icon' />
            </IconButton>

            <img
                className='header__logo'
                src='https://www.pngfind.com/pngs/m/13-130341_tinder-logo-png-pluspng-tinder-logo-png-transparent.png' 
                alt="" 
            />

            <IconButton>
                <MessageRoundedIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header;
