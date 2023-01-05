import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <div className="form row">
          <div className="searchBar col-4">
            <input
              type="text"
              placeholder="Enter a city name"
              className="rounded-pill form-control"
              autocomplete="off"
            />
          </div>
          <div className="Go col">
            <input type="submit" value="Go" className="rounded-circle" />
          </div>
        </div>
      </form>
      <button className="current">Current Location</button>
    </div>
  );
}
