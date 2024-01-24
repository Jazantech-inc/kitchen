import Pages from "./assets/Pages/Pages";
import { useSelector } from "react-redux";
import Spinner from "./assets/Components/Spinner";
function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <>
      {loading && <Spinner />}
      <Pages />
    </>
  );
}

export default App;
