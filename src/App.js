import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./views/LoginPage";
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageHome from './views/PostPageHome';
import PostPageUpdate from "./views/PostPageUpdate";
import SignUpPage from './views/SignUpPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<PostPageHome />} />
      <Route path="/login" element ={<LoginPage />} />
      <Route path="/signup" element ={<SignUpPage />} />
      <Route path="/add" element ={<PostPageAdd />} />
      <Route path="/post/:id" element ={<PostPageDetails />} />
      <Route path="/update/:id" element ={<PostPageUpdate />} />
    </Routes>
    </BrowserRouter>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
