import authReducer from "../../reducers/auth";
import auth from "../fixtures/auth";
import { LOGIN, LOGOUT } from "../../actions/types";

describe("Auth reducer setup", () => {
  it("should setup the auth reducer correctly", () => {
    const state = authReducer(undefined, "@@INIT");
    expect(state).toEqual({});
  });
});

describe("Auth reducer action triggers", () => {
  it("should add a user uid on LOGIN", () => {
    const uid = "1235";
    const action = { type: LOGIN, uid };
    const state = authReducer(auth, action);
    expect(state).toEqual({ uid });
  });

  it("should clear user uid on LOGOUT", () => {
    const preState = { uid: "1235" };
    const action = { type: LOGOUT };
    const postState = authReducer(preState, action);
    expect(postState).toEqual({});
  });
});
