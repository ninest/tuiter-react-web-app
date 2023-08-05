import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import Nav from "../nav";
import BookmarksScreen from "./bookmarks-screen";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import NavigationSidebar from "./navigation-sidebar";
import ProfileScreen from "./profile-screen";
import authReducer from "./reducers/auth-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import WhoToFollowList from "./who-to-follow-list";

const store = configureStore({ reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer } });

function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10 col-lg-7">
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
            </Routes>
          </div>
          <div className="d-none d-xl-block d-lg-block col-3">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
