export const goBack = (history) =>{
    history.goBack()
}

export const goToListOfTrips = (history) =>{
    history.push("/trips/list")
}

export const goToApplicationForm = (history) =>{
    history.push("/trips/application")
}
