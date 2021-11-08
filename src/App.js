// import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm'
import RxTemplate from "./components/RxTemplate/RxTemplate";

const App = () => {

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* Note prescriptions must contain date of issue, and prescriber signature */}
      <main>
        <section className="rx-form">
          <RxForm />
        </section>
        <section className="rx-template">
          <RxTemplate />
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
    
    
  )
}

export default App;
