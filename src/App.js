import { DataProvider } from "./components/context";

import Hub from "./components/Hub";

const App = () => {

  return (
    <>
      <DataProvider>
        <div className="container text-center">
          <h1>React Trivia App</h1>
          <Hub />
        </div>
      </DataProvider>
    </>
  );
}

export default App;
