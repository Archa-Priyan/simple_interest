import './App.css';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function App() {
  const[principle,setPrinciple]=useState(0)
  const[rate, setRate]=useState(0)
  const[year, setYear]=useState(0)
  const[interest, setInterest]=useState(0)
  const[isPrinciple,setIsprinciple]=useState(true)
  const[israte,setIsRate]=useState(true)
  const[isyear,setIsYear]=useState(true)


  const validateData=(e)=>
  {
    const {name,value} = e.target
    /* console.log(name,value); */
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
   if(name=='principle')
   { 
    setPrinciple(value)
    setIsprinciple(true)
  }
    else if(name =='rate')
    {
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name=='principle')
    {
      setPrinciple(value)
    setIsprinciple(false)
    }

    else if(name =='rate')
    {
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)

    }  
  }
  }
  
  const handleCalculate =(e)=>{
  e.preventDefault(e)
    if(!principle || !rate || !year){
      alert('please fill the form completely')
    }
    else{
          setInterest(principle*rate*year/100)
     }
  }

  const handleReset =(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsprinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
  <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div className='bg-light p-5 rounded' style={{width:'500px'}}>
      <h2 >Simple Interest App</h2>
      <p>Calculate your simple interest Easily</p>
    <div style={{height:'150px'}} className='bg-warning mt-5 d-flex d-flex justify-content-center align-items-center 
    w-100 rounded flex-column shadow'>
      <h1>₹ {''} {interest}</h1>
      <p>Total simple interest</p>
    </div>

  <form className='mt-5' onSubmit={handleCalculate}>

    <div className='mb-3'>
      <TextField name='principle' value={principle || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="₹ principle amount" variant="outlined"  />
    </div>
    { !isPrinciple &&

      <div>
      <p className='text-danger fw-bold '>*Invalid Input</p>


      </div>
    }


    <div className='mb-3'>
      <TextField name='rate' value={rate || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="rate of interest (p.a) %" variant="outlined"  />
    </div>

    { !israte &&

    <div>
      <p className='text-danger fw-bold '>*Invalid Input</p>
  </div>
    }
    <div className='mb-3'>
      <TextField name='year' value={year || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="Year (yr)" variant="outlined"  />
    </div>

    { !isyear &&

<div>
<p className='text-danger fw-bold '>*Invalid Input</p>


</div>
}

    <div className='mt-5'>
      <Stack direction="row"  spacing={2}>
        <Button type='submit' disabled={isPrinciple && israte && isyear? false:true} variant='contained' className='bg-success' style={{height:'60px',width:'200px'}}>Calculate</Button>
        <Button onClick={handleReset} variant='outlined' style={{height:'60px',width:'200px'}}>Reset</Button>
      </Stack>
    </div>

  </form>
  
    
  </div>
  </div>
  
);
  
}

export default App;
