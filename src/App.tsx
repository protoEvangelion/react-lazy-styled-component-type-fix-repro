import { lazy } from "react";
import "./App.css";

const Button = lazy(() => import("./Button"));
const StyledButton = lazy(() => import("./StyledButton"));

function App() {
  return (
    <>
      <Button color={1234} />

      <StyledButton color={1234} />
    </>
  );
}

export default App;
