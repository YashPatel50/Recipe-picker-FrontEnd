import backendClient from "./services/backend-api";

function App() {
  backendClient.get("/recipes/").then((res) => {
    console.log(res);
  });
  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export default App;
