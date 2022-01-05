import React from 'react'
import './SwipeButtons.css'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BoltIcon from '@mui/icons-material/Bolt';
import { IconButton } from '@mui/material';



function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayRoundedIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <CloseRoundedIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <StarsRoundedIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavoriteBorderRoundedIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <BoltIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
