// ====== 1- the "data" parameter is the array of objects which i will store the data in =======
// ====== 2- the "useStateSetter" parameter is the setter of the useState that tracks which index we will display our
// cards from ===================

//next btn logic
const  handleNext = (data,useStateSetter)=> {
        useStateSetter((prevIndex) => {
        if (prevIndex === data.length - 1) {
            return 0; 
        } else {
            return prevIndex + 1;;
        }
    });
}
// previour btn logic
function handlePrev(data,useStateSetter) {
    useStateSetter((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - 1;    
      } else {
        return prevIndex - 1; 
      }
    });
}

// the export so i can use them everywhere i need.
export {handleNext,handlePrev};

// WORKS PERFECTLY!