import './App.css';
import Navbar from './Elemnets/Navbar';
import About from './Elemnets/About';
import TextArea from './Elemnets/TextArea';
import { useState } from 'react';
import Alert from './Elemnets/Alert';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

const showAleart=(type,messege)=>{
    setAlert({
      type :type,
      msg : messege
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
}

  const toggleMdoe = () => {
    if (mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743'
    showAleart("Success","Dark Mode has been Enable")
    document.title="Text Generator-Dark Mode"
  }
  else {  
    setmode('light')
    document.body.style.backgroundColor='white'
    showAleart("Success","Light Mode has been ENable")
    document.title="Text Generator-Light Mode"
  }
}



  
  return (
    <>
    <BrowserRouter>
    <Navbar tittle="Made by Rupam" mode={mode} toggleMdoe={toggleMdoe}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Routes>
        <Route path='/' element={<TextArea heading="Here your Text" mode={mode} showAleart={showAleart}/>}/>
        <Route path='/about' element={<About mode={mode}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App;