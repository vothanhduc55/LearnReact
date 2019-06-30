import React, { Component } from "react";

class Header extends Component {
  ShowInforObject(obj) {
    if (obj.status) {
      return (
        <div>
          <h2>{obj.status ? "Active" : "Waiting"}</h2>
          <h3>Id: {obj.id}</h3>
          <h3>Name: {obj.name}</h3>
          <h3>array: {obj.array}</h3>
        </div>
      );
    }
  }

  render() {
    let obj = {
      id: 1,
      name: "google",
      status: false,
      array: ["one", "two", "three"]
    };

    let user = [
      {
        id: 1,
        name: "121212",
        age: 30
      },
      {
        id: 2,
        name: "121212",
        age: 30
      },
      {
        id: 3,
        name: "121212",
        age: 30
      }
    ];

    var elements = user.map((user, index) => {
      return (
        <div key={index}>
          <h2>{user.id}</h2>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="_blank">
            Component
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="_blank">
                  Trang chủ <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="_blank">
                  Danh mục sản phẩm
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="_blank"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="_blank">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="_blank">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        {this.ShowInforObject(obj)}
        {elements}
      </div>
    );
  }
}

export default Header;
