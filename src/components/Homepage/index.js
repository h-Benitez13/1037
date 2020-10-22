import React from "react"
import styles from "./Homepage.module.css"
import puzzleLogo from "../../img/logo.png"

const Homepage = () => {
  return (
    <div>
      <section>
        <div>
          <img
            id="js-header"
            src={puzzleLogo}
            className={styles.logo}
            alt="1037 logo"
          />
        </div>
      </section>
    </div>
  )
}

export default Homepage
