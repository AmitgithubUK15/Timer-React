
import './App.css'

function App() {
  
  let Time = new Date();
  let second = Time.getSeconds();
  second = 180;
  let minit = second/60;
  
  console.log(second);
  console.log(minit);

  return (
    <>
      <div>
        <h2>Timer App</h2>
        <div style={{display:"flex", justifyContent:"space-around",margin:"25px 0"}}>
        <div style={{padding:"20px 27px", margin:"0 10px", borderRadius:"10px",fontSize:"25px", backgroundColor:"#3f3f3f73"}}>00</div>
        <div style={{padding:"20px 27px", margin:"0 10px", borderRadius:"10px",fontSize:"25px", backgroundColor:"#3f3f3f73"}}>00</div>
        <div style={{padding:"20px 27px", margin:"0 10px", borderRadius:"10px",fontSize:"25px", backgroundColor:"#3f3f3f73"}}>00</div>
        </div>

        <div>
          <button type='button' style={{margin:"0 10px"}}>Start</button>
          <button type='button' style={{margin:"0 10px"}}>Stop</button>
        </div>
      </div>
    </>
  )
}

export default App
