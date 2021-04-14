export const useLogOut = (history) =>{
    window.localStorage.removeItem('token')
    history.push('/login')
}