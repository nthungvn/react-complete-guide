import { Route } from "react-router";

const Welcome = (props) => {
  return (
    <section>
      <h2>The Welcome page</h2>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
