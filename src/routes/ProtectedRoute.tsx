import { ReactNode } from "react";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const user = useUser();
  if (user) return children;
  return <Navigate to="/login" />;
}
