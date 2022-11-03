import Card from "./components/Card/Card";
import { renderComponent } from "./renderComponent";
import { config } from "./config";

function App() {
  return (
    <div>
      <Card>{renderComponent(config)}</Card>
    </div>
  );
}

export default App;
