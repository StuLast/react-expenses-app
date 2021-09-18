import { logIn, logOut } from "../../actions/auth";

describe("Action generators", () => {
  it("should generate LOGIN action", () => {
    const uid = "91782";
    const action = logIn(uid);

    expect(action).toEqual({ type: "LOGIN", uid });
  });

  it("should generate LOGOUT action", () => {
    const action = logOut();
    expect(action).toEqual({ type: "LOGOUT" });
  });
});
