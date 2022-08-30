// import components
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import LoginForm from './components/loginPage';
import NavBar from './components/nav';
// App function that gets called below to export
function App() {
  return (
    <div className="App">
        <NavBar />
        <div className='center'>
          <LoginForm />
        </div>
    </div>
  );
}

//export the App function
export default App;
