import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

//const Header = React.lazy(() => import("home/Header"));
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

function App() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Header app={{name: 'PDP Header'}} />
        </Suspense>
        <div className="my-10">
          <Switch>
            {/* <Route exact path="/" component={HomeContent} /> */}
            <Route path="/product/:id" component={PDPContent} />
            {/* <Route path="/cart" component={CartContent} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
