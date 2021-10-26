// import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm'

const App = () => {
  // <header>
  //   <h1>OptomRx</h1>
  //   <nav>
  //     <ul>
  //       <li>About</li>
  //       <li>Home</li>
  //     </ul>
  //   </nav>
  // </header>
  // <main>
  //   <section className="main-form">
  //     <h2>Prepare prescription</h2>
  //     <fieldset>
  //       {/* Main medication select */}
  //       <label htmlFor="DrugInput">Select Medication</label>
  //       <input type="text" id="DrugInput"/>
  //     </fieldset>
  //     <fieldset>
  //       {/* Px details */}
  //     </fieldset>
  //     <fieldset>
  //       {/* Provider details */}
  //     </fieldset>
  //     <fieldset>
  //       {/* Quantity, dose, repeats, possibly PBS */}
  //     </fieldset>
  //   </section>
  //   <section className="rx-preview">
  //     <h2>Your generated prescription</h2>
  //     <div className="prescription-preview"></div>
  //   </section>
  // </main>
  // <footer></footer>
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main>
        <section className="rx-form">
          <RxForm />
        </section>
      </main>
      {/* <Switch> */}
        {/* <Route exact path="/" render={() => <Home />}/> */}
        {/* <Route exact path="/cart" render={() => <Cart />}/> */}
      {/* </Switch> */}
    </div>
    
    
  )
}

export default App;
