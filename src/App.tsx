import backendClient from "./services/backend-api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    backendClient
      .get("/recipes/")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("We got an error", err);
      });
  }, []);
  return (
    <>
      <div>Hello World</div>
      <div>{data}</div>
    </>
  );
}

export default App;
