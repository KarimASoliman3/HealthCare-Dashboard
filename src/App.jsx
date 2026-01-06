import PatientProvider from "./context/PatientContext"
import Home from "./pages/Home"

function App() {

  return <>
  <PatientProvider>
  <Home />
  </PatientProvider>
  </>
}

export default App
