import React, { useState } from 'react'

export default function About(props) {
     
    // const [myStyle,setmyStyle] = useState ({
    //     color : 'white',
    //     backgroundColor : 'black'
        
    // })
    let myStyle = {
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36,74,104)':'white'
    
    }
    
    // const enable=() =>{
    //     if (myStyle.color =='white') {
    //         setmyStyle ({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border: '1px solid black'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //         else {
    //             setmyStyle ({
    //                 color : 'white',
    //                 backgroundColor : 'black',
    //                 border: '1px solid white'
                    
    //         })
    //         setbtnText ("Enable Light Mode")

    //     }
    // }


   
  return (
    <div>
        <h1>About Us</h1>
         <div className="accordion" id="accordionExample" style={{ color:props.mode==='dark'?'white':'#042743'}}>
            
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        It is free to use 
      </button>
    </h2>
    
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        it made on 17 july 2024
      </button>
    </h2>
  </div>

</div>
    <div className='container my-3'>
        {/* <button type="button" className="btn btn-outline-primary" >{btntext}</button> */}
    </div>

    </div>
  )
}
