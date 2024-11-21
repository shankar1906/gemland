
const captilize = (
  text
) => {

  if(!text){
    return text
  }

    const textArray = text.split(" ")
    
    return textArray.map((str)=>{
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }).join(" ")
};

export default captilize;
