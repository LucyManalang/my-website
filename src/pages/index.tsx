import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = {
  portrait: "/res/portraitXXX.jpeg",
};

const formArr = [
  { title: "Name", type: "text", autocomplete: "name", id: 1 },
  { title: "Email", type: "email", autocomplete: "email", id: 2 },
  { title: "Subject", type: "text", autocomplete: "none", id: 3 },
];

const contentArr = [
  { title: "About me", id: 1 },
  { title: "Links", id: 2 },
  { title: "Contact me", id: 3 },
];

const formItems = formArr.map((formItem) => (
  <input
    className="form-item"
    type={formItem.type}
    placeholder={formItem.title}
    key={formItem.id}
  />
));

const navItems = contentArr.map((navItem) => (
  <li className="nav-item" key={navItem.id}>
    <Link href="">
      <p>{navItem.title}</p>
    </Link>
  </li>
));

function Navigation() {
  return (
    <div id="nav">
      <ul id="nav-bar">
        <Link className="nav-item" href="/">
          <h1>Lucy Manalang</h1>
        </Link>
        {navItems}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="mx-20 my-10">
        <div className="header">
          <div className="info">
            <div>
              <h1>Lucy Manalang</h1>
            </div>
            <div>
              <p>
                Computer Science Major | <br />
                Studio Arts Minor <br />
                <Link className="link" href="macalester.edu" target="_blank">
                  Macalester College
                </Link>{" "}
                <br />
                Oakland, CA
              </p>
            </div>
          </div>
          <div className="portrait">
            <img src={images.portrait} alt="Picture of me" />
          </div>
        </div>
        <div className="section">
          <h1 id="about-me">About Me:</h1> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            cum doloribus autem porro odio, dicta facilis reprehenderit dolor
            dolore numquam assumenda ipsam eveniet placeat, veniam velit
            possimus deserunt eaque vel.
          </p>
        </div>
        <div className="section">
          <h1 id="links">Links:</h1> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            cum doloribus autem porro odio, dicta facilis reprehenderit dolor
            dolore numquam assumenda ipsam eveniet placeat, veniam velit
            possimus deserunt eaque vel.
          </p>
        </div>
        <div className="contact">
          <div className="section">
            <h1>Contact Me:</h1>
            <br />
            <p>Send me an email about anything!</p>
          </div>
          <form>
            <div className="form">{formItems}</div>
            <input className="form-button" type="submit" placeholder="Submit" />
          </form>
        </div>
      </main>
      <Navigation />
    </>
  );
}
