import axios from "axios";
import { useState , useEffect } from "react";


function Forgot() {
    const [Pata, setPata] = useState("");
  

    useEffect( ()=>{

      axios.get('/api/hello', {
      })
      .then(function(response){
        console.log(response.data);

        setPata(response.data);

        console.log(response);
        
      })

      .catch(function (error) {
        console.log(error);
      });
  

    },[]);

    
    alert({Pata});

  return (

    



    <div className="App">
        
        
        <div> {Pata} </div>




    </div>




  );
}

export default Forgot;
