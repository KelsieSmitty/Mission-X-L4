import './Styling/Footer.css'; 
import "./Styling/SPL.css"; 
import Footer from './Components/Footer.jsx'; 
import StudentProyectLibrary from './Pages/Project Library & Student Profile/StudentProjectLibrary';

function App() {
  return (
    <div className="App">
      <StudentProyectLibrary />
      <Footer />
    </div>
  );
}

export default App;
