import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

export default function TuitList() {
  const { tuits } = useSelector((state) => state.tuits);

  return (
    <ul>
      {tuits.map((tuit, index) => {
        return <TuitItem key={index} tuit={tuit} />;
      })}
    </ul>
  );
}
