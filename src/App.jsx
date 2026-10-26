import Todos from "./components/Todos.jsx";
import Infos from "./components/Infos.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
      <Todos />
      <Infos name="YOUR NAME" />
    </div>
  );
}

export default App;
