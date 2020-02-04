class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static getPayload() {
    const token = this.getToken() // try and get the token
    if (!token) return false // if it is not there, return false
    const parts = token.split('.') // split token into array on .
    if (parts.length < 3) return false // if there are less than 3 parts the token will be invalid, return false
    return JSON.parse(atob(parts[1]))
  }
}

export default Auth
