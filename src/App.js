import s from './App.module.css';
import 'antd/dist/antd.css';
import OrganisationRegisterForm from "./components/OrganisationRegisterForm/OrganisationRegisterForm";
import React from "react";
import Header from "./components/Header/Header";
import {Route, Switch} from 'react-router-dom';
import UserRegisterForm1 from "./components/UserRegisterForm/UserRegisterForm1";
import UserRegisterForm2 from "./components/UserRegisterForm/UserRegisterForm2";
import UserRegisterForm3 from "./components/UserRegisterForm/UserRegisterForm3";


function App() {

    return (
        <div className={s.App}>
            <Header/>
            <div className={s.container}>
                <Switch>
                    <Route exact path={'/organisationRegister'} render={() => <OrganisationRegisterForm/>}/>
                    <Route exact path={'/userRegister1'} render={() => <UserRegisterForm1/>}/>
                    <Route exact path={'/userRegister2'} render={() => <UserRegisterForm2/>}/>
                    <Route exact path={'/userRegister3'} render={() => <UserRegisterForm3/>}/>
                </Switch>

            </div>
        </div>
    );
}

export default App;
