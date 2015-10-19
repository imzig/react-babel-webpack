
require('bootstrap-webpack!./bootstrap.config.js');
//var $ = require('jquery.min');
window.jQuery = window.$ =  require('jquery/dist/jquery.min');

require("./css/style.css");

import React from "react";
import Greeting from "./components/greeting";
import Nav from "./components/nav";
import Container from "./components/container";


React.render(<Nav />, $("#nav")[0]);
React.render(<Container />, $("#container")[0]);
React.render(<Greeting name="World" />, $("#greeting")[0]);
