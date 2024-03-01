export class Api {
  baseUrl: string;
  headers: HeadersInit | undefined;
  constructor(options: any) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res: any) {
    if (res.ok) return res.json();
    else return Promise.reject(res.status);
  }

  loginUser({ login, password }: { login: string; password: string }) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  }

  checkAuth() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(this._checkResponse)
      .then((data) => data);
  }
}

const api = new Api({
  baseUrl: "asdad",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
