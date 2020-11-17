import { useSelector } from "react-redux";
export default function Cant() {
  const quantity = useSelector((state) => state.quantity);
  return <> {quantity}</>;
}