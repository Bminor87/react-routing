import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>{error.data}</p>
      <p>
        Return to <a href="/">home page</a>
      </p>
    </div>
  );
}

export default Error;
