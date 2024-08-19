export const getRandomItemInArray = (array)=>{
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * array.length);
    // Return the item at the random index
    return array[randomIndex];
}