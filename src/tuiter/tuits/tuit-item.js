import { useDispatch } from "react-redux";
import { deleteTuit, like, retuit, reply } from "../reducers/tuits-reducer";
import { FaX, FaComment, FaRetweet, FaHeart, FaChartSimple, FaArrowUpFromBracket } from "react-icons/fa6";

export default function TuitItem({ tuit }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  const likeTuit = () => {
    dispatch(like(tuit._id));
  };
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

          <img width={50} className="float-end rounded-circle" src={`/images/${tuit.image}`} alt="Logo"/>
          </div>
        </div>
        <div className="col-10 col-md-11">
          <div className="d-flex justify-content-between">
            <b>{tuit.handle}</b>
            <div>
              <FaX onClick={() => deleteTuitHandler(tuit._id)} />
            </div>
          </div>
          <div>{tuit.tuit}</div>

          <div className="d-flex justify-content-between">
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
      </div>
        </div>
      </div>
      
    </li>
  );
}
