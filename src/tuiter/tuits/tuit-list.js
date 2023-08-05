import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";
import { useEffect } from "react";

export default function TuitList() {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}

      {tuits.map((tuit, index) => {
        return <TuitItem key={index} tuit={tuit} />;
      })}
    </ul>
  );
}
