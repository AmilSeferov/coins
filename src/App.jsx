import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Card } from "./card/card";
import { useEffect, useState } from "react";
import { fetchCoins, removeinfo, searcha } from "./reducers/reducer";

function App() {
  const [state ,setstate]=useState()
  const coins=useSelector(state=>state.coinslist.fillter)
  const inf=useSelector(state=>state.coinslist.info)
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(fetchCoins())
  },[])
  return (
    <>
      <header>
        <h1>LIST OF THE COINS</h1>
       
        <div>
          <input placeholder="coins type" onInput={(e)=>{
            setstate(e.target.value)
          }} type="text" />
          <button onClick={()=>{
            dispatch(searcha(state))
            console.log('clic')
          }} >search</button>
        </div>
        <a href="">filter</a>
      </header>
      <main>
        {
coins.map(item=>{
  // console.log(item.type_)
return <>
<Card data={item}/>
</>
})
        }
       
      </main>
     
      <div style={inf[0]?{display:'block'}:{display:'none'}} className="info">
        <div className="h"> <h3>{inf[0]?.coinname}</h3>
        <button onClick={()=>{
          dispatch(removeinfo())
        }}>X</button>
        </div>
        <p>{inf[0]?.biginfo}</p>
        <img src={`./${inf[0]?.coinname}_2.png`} alt="" />
      </div>
    </>
  );
}

export default App;
