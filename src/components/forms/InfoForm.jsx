import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';

import { typeOptions, levelOptions, gradeOptions } from '@/lib/globalConsts';
import { updateKidInfo } from '@/state/kidInfoSlice';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import CustomButton from '../ui/CustomButton';
import FormSelect from '../ui/FormSelect';

import '@/css/InfoForm.scss'

const InfoForm = ({onSave}) => {
    const {register, handleSubmit, control, reset, watch} = useForm();
    const dispatch = useDispatch();
    const kidInfo = useSelector((state)=>state.kidInfo);
    
    // Watch the 'numOfQuestions' value from the form state
    const numOfQuestions = Number(watch('numOfQuestions', 10));

    useEffect(()=>{
        if(kidInfo) reset(kidInfo)
    },[kidInfo, reset]);

    const onSubmit = (data)=>{
        data.numOfQuestions = Number(data.numOfQuestions);//convert the numOfQuestion value back to number
        dispatch(updateKidInfo(data));
        localStorage.setItem("kidGradeAndLevel", JSON.stringify(data));
        onSave();
    };
    return ( 
        <form className='info-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
        <FormControl fullWidth>
            <TextField id="kid-name" label="Kid Name" variant="outlined" 
            {...register("name")} autoComplete="off" autoFocus/>
        </FormControl>
        </div>
        <FormSelect
            name="grade"
            control={control}
            label="Grade"
            options={gradeOptions}
            autocomplete = "off"
        />
        <FormSelect
            name="type"
            control={control}
            label="Type"
            options={typeOptions}
            autocomplete = "off"
        />
        <FormSelect
            name="level"
            control={control}
            label="Level"
            options={levelOptions}
            autocomplete = "off"
        />
        {/* <div className='form-control'>
        <FormControlLabel control={<Switch defaultChecked />} label="No Negative Number" />
        </div> */}
        <div className='form-control num-control'>
            <InputLabel id="num-slider-label">Num Of Questions</InputLabel>
            <Slider
                className='num-slider'
                label="Num Of Questions"
                aria-label="Num Of Questions"
                valueLabelDisplay="auto"
                value={numOfQuestions}//make sure the slider updated
                shiftStep={5}
                step={5}
                marks
                min={5}
                max={20}
                {...register('numOfQuestions')}
            />
        </div>
        <div className='btns'><CustomButton type="submit">Save</CustomButton></div>
        
    </form>
     );
}
 
export default InfoForm;