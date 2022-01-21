import React, { useState } from 'react';


const App = () =>{
    const [time,setTime] = useState(new Date().toLocaleTimeString())

    const UpdateTime = () =>{
        const ctime = new Date().toLocaleTimeString()
        setTime(ctime)
    }
    setInterval(UpdateTime,1000)

    return(
        <div className='time' style={{fontSize:'120px'}}>
            <div className='container text-center'>
                <p className='text-success'>Current time is : </p>
                <p className='text-primary'>{time}</p>
            </div>
        </div>
    );
}

export default App;