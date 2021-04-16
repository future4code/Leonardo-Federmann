export const goBack = (history) => {
    history.goBack()
}

export const goToHome = (history) => {
    history.push('/')
}

export const goToListOfTrips = (history) => {
    history.push("/trips/list")
}

export const goToApplicationForm = (history) => {
    history.push("/trips/application")
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToCreateTripPage = (history) => {
    history.push('/admin/trips/create')
}

export const goToAdminHomePage = (history) => {
    history.push('/admin/trips/list')
}