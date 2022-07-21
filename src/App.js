// import React from "react";
// import axios from "axios";
// import { Col, Container, Row } from "react-bootstrap";

// const api = axios.create({
//   baseURL:'https://rickandmortyapi.com/api/character'
// })

// class App extends React.Component{
//   state={
//     data:[]
//   }

//   constructor() {
//     super();
//     api.get('/').then(res => {
//       console.log(res.data.results);
//       this.setState({data: res.data.results})
//     })
//   }

//   render(){
//     return(
//       <Container className="w-100">
//         <Row className="d-flex justify-content-between">
//           {this.state.data.map(result=>
//           <Col s={12} md={3} key={result.id}>
//             <img className="w-100" src={result.image} alt={result.name}></img>
//             <h2 className="text-center">{result.name}</h2>
//             </Col>)}
//         </Row>
//       </Container>
//     )
//   }
// }

// export default App

import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  let [data, setData] = React.useState(null)

  React.useEffect(() => {
    const Auth = async () => {
      try {
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        setData(res.data.results)
      } catch (err) {
        console.error(err);
      }
    }
    Auth()
  }, [])

  return(
    <main className='vh-100 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap'>
      {!data? null:data.map((result) => (
        <section className='d-flex flex-column justify-content-center align-items-center col-2 p-3'>
          <img className='col-12' alt='' src={result.image}></img>
          <span className=''>{result.name}</span>
        </section>
      ))}
    </main>
  )
} 

export default App