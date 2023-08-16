import "./App.css";
import GlobalStyles from "./components/globalstyles";
import DefaultLayout from "./components/layouts/defaultlayout";

function App() {
  return (
    <>
      <GlobalStyles>
        <DefaultLayout />
      </GlobalStyles>
    </>
  );
}

export default App;
