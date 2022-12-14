import react from "react";

function Heading(){
     const date = new Date();
     const time = date.getHours();

     let greeting;

     const customStyle = {
           
         color: " "

     };


     if (time < 12) {
       greeting = "Good morning";
       customStyle.color = "Grey";
       }
      else if (time < 18) {
       greeting = "Good afternoon";
       customStyle.color = "Green";
       } 
     else {
       greeting = "Good night";
       customStyle.color = "Blue";
       }

       
  return( <div>
    <h1 className="heading" style={customStyle}>
      {greeting}{" "}
    </h1>
  </div>)
}

export default Heading;