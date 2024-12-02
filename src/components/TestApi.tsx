import { useEffect, useState } from "react";
import backendClient from "../services/backend-api";

const TestApi = () => {
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
};

export default TestApi;