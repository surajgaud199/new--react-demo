//   export default function Mydata(){
//     return(
//         <div>
//             <p> This is a new data </p>
//         </div>
//     )
// }

 export function ProfileInformetion(){
    return(
      <div className='ProfileInformetion'>
        <h2>Suraj Gaud</h2>
        <h4>Age : 24</h4>
        <h4>City : Ahmedabad</h4>
      </div>
    )
  }
  


  export function ProfileImage(){
    return(
      <div >
         <img className='Profile-Image' src={require('./image/photo99.jpg')} alt=''/>
      </div>
    )
  }
 