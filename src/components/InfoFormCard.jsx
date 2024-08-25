import { useSelector } from 'react-redux';
import CustomCard from './ui/CustomCard';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import '@/css/InfoForm.scss'
import InfoForm from './forms/InfoForm';
import * as React from 'react'; 

const InfoFormCard = React.forwardRef((props, ref) => {
    const {showCloseButton, onClose} = props;
    const kidInfo = useSelector((state)=>state.kidInfo);
    const handleSave = ()=>{
        if(showCloseButton) onClose();
    }

    return ( 
        <CustomCard className="info-form-card" position="relative" ref={ref}>
            {showCloseButton && <IconButton
            onClick={onClose}
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                }}
            >
            <CloseIcon />
            </IconButton>}              
            <h4 className='title'>{kidInfo?.name? `${kidInfo.name}' info`: 'Kid info'}</h4>
            <p className='slogan'>Set the difficulty level for the quiz</p>
            <InfoForm onSave={handleSave}/>
            <p className="footnote">* the info will only be saved in local storage temporarily.</p>
        </CustomCard>
     );
});

InfoFormCard.displayName ="InformCard";
 
export default InfoFormCard;