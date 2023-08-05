import { FaArrowUpFromBracket, FaChartSimple, FaComment, FaHeart, FaRetweet } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

export default function TuitStats({ tuit, replyTuit, retuitTuit }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between">
      <button className="btn" onClick={replyTuit}>
        <FaComment /> {tuit.replies}
      </button>
      <button className="btn" onClick={retuitTuit}>
        <FaRetweet /> {tuit.retuits}
      </button>
      <button
        onClick={() => {
          dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
        }}
        className="btn"
        style={tuit.liked ? { color: "red" } : {}}
      >
        <FaHeart /> {tuit.likes}
      </button>
      <button className="btn ">
        <FaChartSimple />
      </button>
      <button className="btn ">
        <FaArrowUpFromBracket />
      </button>
    </div>
  );
}
