import React from "react"

export default function Info() {
    return (
      <div className="main-box">
        <h1>Laura Smith</h1>
        <h2 className="subtitle">Frontend Developer</h2>
        <p class="email">laurasmith.website</p>
        <div className="btn-box">
          <div class="btn-box-email">
            <i class="fa-solid fa-envelope fa-lg"></i>
            <a className="btn-email" href="">Email</a>
          </div>
          <div class="btn-box-linkedin">
            <i class="fa-brands fa-linkedin fa-lg"></i>
            <a className="btn-linkedin" href="">Linkedin</a>
          </div>
        </div>
      </div>
    )
}
