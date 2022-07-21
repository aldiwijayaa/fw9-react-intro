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