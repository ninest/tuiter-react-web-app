import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import { FaTrash } from "react-icons/fa6";

export default function TuitItem({ tuit }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img width={50} className="float-end rounded-circle" src={`/images/${tuit.image}`} />
        </div>
        <div className="col-10">
          <div>
            <FaTrash onClick={() => deleteTuitHandler(tuit._id)} />
          </div>
        </div>
      </div>
    </li>
  );
}
