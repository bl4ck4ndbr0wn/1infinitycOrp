import React, { Component } from "react";
import { Link } from "react-router-dom";
import showcase from "../../img/showcase.jpg";

class Jumbotron extends Component {
  render() {
    return (
      <div
        class="card card-image"
        style={{
          backgroundImage: `url(${showcase})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div class="text-white text-center rgba-stylish-strong py-5 px-4">
          <div class="py-5">
            {/* <!-- Content --> */}
            <h5 class="h5 orange-text">
              <i class="fa fa-camera-retro" /> Welcome
            </h5>
            <h2 class="card-title h2 my-4 py-2">1infinitycOrp News Dapp</h2>
            <p class="mb-4 pb-2 px-md-5 mx-md-5">
              Your voice is worth something Get paid for good content. Post and
              upvote articles on Steemit to get your share of the daily rewards
              pool.
            </p>
            <Link to="/register" className="btn peach-gradient">
              Sign Up{" "}
            </Link>{" "}
            <Link to="/login" className="btn peach-gradient">
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
