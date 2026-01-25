

import { comments } from "./assets/commentData";
import { Card } from "./components/Card";
import "./App.css";

export function App() {
  return (
    <>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </>
  );
}

export default App;
