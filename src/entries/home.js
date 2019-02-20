
//importamos Las referec¡as
import React from 'react';
import {render} from 'react-dom';
import Home from "../pages/containers/home";
// import Playlist from '../playlist/componets/playlist';
import data from '../api.json';
// se hace refencia de donde se va renderizar
// const app = document.getElementById('app');

const homeContainer = document.getElementById('home-container');

//cual es el elemento
// const hi = <h1> gonorreaaaaa!</h1>;  
// se ejecuta el render
//ReactDOM.render(hi, app);
render (<Home data={data} />,homeContainer);