
export const validate = (input)=>{

  const errors = {}
  if (input.name.length<8) {
    errors.name = 'Should be more than 8 characters' 
  }  
  if (input.difficulty < 1 || input.difficulty > 5) {
    errors.difficulty = 'Only between 1 and 5' 
  }
  if (input.season.length < 1 ) {
     errors.season = 'Select one' 
  }
  if(!/^\d{1,2}:\d{2}(:\d{2})?$/.test(input.duration)){
    errors.duration = 'Invalid time' 
  }
  return errors;
}