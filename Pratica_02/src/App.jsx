import Islogged from './IsLogged/IsLogged.jsx'

function App() {

  return (
      <>
        <Islogged logado={true} name="Thiago"></Islogged>
        <Islogged logado={false}></Islogged>
      </>
  )
}

export default App
