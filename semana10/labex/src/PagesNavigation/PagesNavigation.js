import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TripDetailsPage from '../pages/TripDetailsPage'
import LoginPage from '../pages/LoginPage'
import ListOfTripsPage from '../pages/ListOfTripsPage'
import HomePage from '../pages/HomePage'
import CreateTripPage from '../pages/CreateTripPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import AdminHomePage from '../pages/AdminHomePage'
import ErrorPage from '../pages/ErrorPage'

export default function PagesNavigation() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/trips/list">
                <ListOfTripsPage />
            </Route>
            <Route exact path="/trips/application">
                <ApplicationFormPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/admin/trips/list">
                <AdminHomePage />
            </Route>
            <Route exact path="/admin/trips/create">
                <CreateTripPage />
            </Route>
            <Route exact path="/admin/trips/:id">
                <TripDetailsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    </BrowserRouter>
}