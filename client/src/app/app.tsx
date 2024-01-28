import { BrowserRouter } from "react-router-dom";
import Header from "~/widgets/header/ui/header";
import "~/app/index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
