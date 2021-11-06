import { Route, Redirect } from "react-router-dom";
import { LoginContext } from '../../Contexts/LoginContext';
import { useContext } from "react";

export default function PrivateRoute({ component: Component }) {
  const { isConnected } = useContext(LoginContext);

  return (
    <Route
      render={(props => {
        return (
          isConnected ? <Component {...props} /> : <Redirect to="/login" />
        )
      })}
    />
  )
}