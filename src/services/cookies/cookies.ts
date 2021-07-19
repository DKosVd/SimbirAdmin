import Cookies from "js-cookie";

class CookiesUtils {
  setAccessNRefresh(
    acces_token: string,
    refresh_token: string,
    expires_in: number
  ) {
    const date = new Date();
    const expiresAccessToken = date.setTime(date.getTime() + expires_in * 1000);
    const expiresRefreshToken = date.setTime(
      date.getTime() + expires_in * 1000 * 30
    );
    this.setAccessToken(acces_token, expiresAccessToken);
    this.setRefreshToken(refresh_token, expiresRefreshToken);
  }

  setAccessToken(token: string, expires: number) {
    Cookies.set("access_token", token, {
      secure: true,
      sameSite: "strict",
      expires: new Date(expires),
      path: "/",
    });
    return;
  }

  setRefreshToken(token: string, expires: number) {
    Cookies.set("refresh_token", token, {
      secure: true,
      sameSite: "strict",
      expires: new Date(expires),
      path: "/",
    });
    return;
  }

  getRefreshToken() {
    return Cookies.get("refresh_token");
  }

  getAccessToken() {
    return Cookies.get("access_token");
  }

  removeAccessToken() {
    Cookies.remove("access_token");
  }

  removeRefreshToken() {
    Cookies.remove("refresh_token");
  }
}

export default new CookiesUtils();
