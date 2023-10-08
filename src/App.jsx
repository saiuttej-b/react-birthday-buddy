import { useState } from "react";
import List from "./List";
import { persons } from "./data";

const App = () => {
  const [people, setPeople] = useState(persons);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
