import GitHubRepos from "./components/GithubRepos"
import './App.css'

function App() {
  return (
    <>
      <header className="centerHeader">
        <div className="container">
          <h1>Oscar Törnqvist's Portfolio</h1>
        </div>
      </header>
      <main>
        <div className="linkContainer">
          <a href="https://github.com/Mojujo?tab=repositories">Link to my Github</a>
        </div>
        <div className="listContainer">
          <h2>My Github Repos</h2>
          <GitHubRepos username="Mojujo" />
        </div>
      </main>
    </>
  )
}

export default App
