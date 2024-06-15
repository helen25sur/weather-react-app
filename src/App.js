import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

export default function App() {
  return (
    <div className="app-content col-10 my-4 mx-auto card mb-3 shadow-lg mh-100">
      <Header />
      <Main />
    </div>
  )
}