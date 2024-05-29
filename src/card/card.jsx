import { useDispatch } from 'react-redux'
import './card.css'
import { addinfo } from '../reducers/reducer'
export const Card=({data})=>{
  const dispatch= useDispatch()

    return<>
    <div className="card">
        <img onClick={()=>{
        dispatch(addinfo(data))
    }}  src={`./${data.coinname}_1.png`} alt="" />
        <div>
            <h2>{data.coinname}</h2>
            <p>{data.info}</p>
        </div>
    </div>
    </>
}