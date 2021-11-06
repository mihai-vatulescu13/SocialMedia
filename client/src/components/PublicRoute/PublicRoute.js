import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../../Contexts/LoginContext';
import { useContext } from 'react';

export default function PublicRoute({ component: Component }) {
  const { isConnected } = useContext(LoginContext);

  return (
    <Route
      render={(props) => {
        return (
          isConnected ? <Redirect to="/" /> : <Component {...props} />
        )
      }}
    />
  )
}