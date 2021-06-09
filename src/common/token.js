/**
 * @file token
 */
import Cookies from 'js-cookie'

export const TOKEN_KEY = 'token'
const cookieExpires = 60000
export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, '', { expires: cookieExpires || 1 })
    console.log(Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 }))
}
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}

export const rmToken = () => {
    return Cookies.remove(TOKEN_KEY);
}