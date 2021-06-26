import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogsPage from './pages/BlogsPage';
import ResumePage from './pages/ResumePage';
import PostPage from './pages/PostPage';
import BlogPage from './pages/BlogPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header/>
        </header>
        <section>
          <Switch>
            <Route exact path="/">
              <ResumePage/>
            </Route>
            <Route exact path="/blogs">
              <BlogsPage/>
            </Route>
            <Route path="/blogs/:title" >
              <BlogPage/>
            </Route>
            <Route path="/blog/new">
              <PostPage/>
            </Route>
          </Switch>
        </section>
        <footer className="App-footer">
        
        </footer>
      </Router>
    </div>
  );
}

export default App;
