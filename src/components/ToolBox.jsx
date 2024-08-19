import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';

import '@/css/ToolBox.scss';

const ToolBox = ({params, onChange}) => {      
    const [type, setType] = useState(params.type);
    const [level, setLevel] = useState(params.level);
    const [numOfQuestions, setNumOfQuestions] = useState(params.numOfQuestions);

    const typeOptions = [
        { value: 'addition', label: 'Addition only' },
        { value: 'add-sub', label: 'Mix Add & Sub' },
        // { value: 'multiple', label: 'Multiple' }
    ];

    const handleTypeChange = (event) => {
        const newType = event.target.value;
        setType(newType);
        onChange({ type: newType, level, numOfQuestions});
    };

    const handleLevelChange = (event) => {
        const newLevel = event.target.value;
        setLevel(newLevel);
        onChange({ type, level: newLevel, numOfQuestions});
    };

    const handleNumChange = (event) => {
        const newNum = event.target.value;
        setNumOfQuestions(newNum);
        onChange({ type, level, numOfQuestions: newNum});
    };

    return (
    <div className="toolbox">
        <div className='type-control'>
            <Typography component="legend">Type</Typography>
           <Select
            labelId="type-label"
            id="type-select"
            value={type}
            label="Type"
            onChange={handleTypeChange}
            className="toolbox-select"
            >
            {typeOptions.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </Select>
        </div>
         <div className='level-control'>
            <Typography component="legend">Level</Typography>
            <Rating
                name="customized-color"
                defaultValue={2}
                max = {3}
                // getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={1}
                icon={<OfflineBoltIcon fontSize="inherit" />}
                emptyIcon={<OfflineBoltOutlinedIcon fontSize="inherit"/>}
                onChange= {handleLevelChange}
            />
         </div>
         <div className='num-control'>
            <Typography component="legend">Num Of Questions</Typography>
            <Slider
                className='num-slider'
                aria-label="Num Of Questions"
                defaultValue={10}
                valueLabelDisplay="auto"
                shiftStep={5}
                step={5}
                marks
                min={5}
                max={20}
                onChange={handleNumChange}
            />
         </div>
    </div>
    );
}
 
export default ToolBox;