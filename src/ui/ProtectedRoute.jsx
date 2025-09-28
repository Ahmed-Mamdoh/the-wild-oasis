import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // load the auth user
  const { isLoading, isAuth } = useUser();

  // if not auth redirect to /login
  useEffect(() => {
    if (!isAuth & !isLoading) navigate("/login");
  }, [isAuth, navigate, isLoading]);

  // show loading spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // if auth render app
  if (isAuth) return children;
}

export default ProtectedRoute;
