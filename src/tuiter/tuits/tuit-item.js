import { FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { like, reply, retuit } from "../reducers/tuits-reducer";
import { deleteTuitThunk } from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";

export default function TuitItem({ tuit }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  // const likeTuit = () => {
  //   dispatch(like(tuit._id));
  // };
  const retuitTuit = () => {
    dispatch(retuit(tuit._id));
  };
  const replyTuit = () => {
    dispatch(reply(tuit._id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 col-md-1">
          <div className="d-flex justify-content-center">
            <img
              width={50}
              className="float-end rounded-circle"
              src={tuit.image ? `/images/${tuit.image}` : `/images/nasa.png`}
              alt="Logo"
            />
          </div>
        </div>
        <div className="col-10 col-md-11">
          <div className="d-flex justify-content-between">
            <b>{tuit.handle ?? "@user"}</b>
            <div>
              <FaX onClick={() => deleteTuitHandler(tuit._id)} />
            </div>
          </div>
          <div>{tuit.tuit}</div>

          <TuitStats tuit={tuit} replyTuit={replyTuit} retuitTuit={retuitTuit} />

          {/* <div className="d-flex justify-content-between">
            <button className="btn" onClick={replyTuit}>
              <FaComment /> {tuit.replies}
            </button>
            <button className="btn" onClick={retuitTuit}>
              <FaRetweet /> {tuit.retuits}
            </button>
            <button onClick={likeTuit} className="btn" style={tuit.liked ? { color: "red" } : {}}>
              <FaHeart /> {tuit.likes}
            </button>
            <button className="btn ">
              <FaChartSimple />
            </button>
            <button className="btn ">
              <FaArrowUpFromBracket />
            </button>
          </div> */}
        </div>
      </div>
    </li>
  );
}
