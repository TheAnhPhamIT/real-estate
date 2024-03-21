import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import "./MyProfile.scss";
import { useEffect } from "react";

export default function MyProfile() {
  const user = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/not-found");
  }, []);

  return <h1>my-profile</h1>;
}
