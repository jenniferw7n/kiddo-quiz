import Avatar from '@mui/material/Avatar';

const CustomAvatarLink = ({name, onClick}) => {
    let shortLetters = "";
    if(name){
        const nameArray = name.split(" ");
        
        nameArray.forEach(string => {
            shortLetters=shortLetters.concat(string[0]);
        });
    }
    return (  
        <Avatar onClick= {onClick}>{shortLetters.toUpperCase()}</Avatar>
    );
}
export default CustomAvatarLink;