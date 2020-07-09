import React from "react"
import styles from "./Homepage.module.css"
import GIF from "../../img/gif-logo.gif"
import mov from "../../img/design.mp4"
import caption from "file-loader!../captions/captions.vtt"
import Insta from "../../img/ig.svg"

const Homepage = () => {
  return (
    <div>
      <section>
        <div>
          <img
            id="js-header"
            src={GIF}
            className={styles.logo}
            alt="coin logo gif"
          />
          <video controls loop autoPlay className={styles.movie}>
            <source src={mov} type="video/mp4" />
            <track kind="captions" srcLang="en" rc={caption} />
          </video>
        </div>
        <div className={styles.missionContainer}>
          <p className={styles.font}>
            An exploratory operation, providing an imaginative yet original
            shared experience through sonic and visual artist collaboration.
          </p>
          <a
            href="https://www.instagram.com/medallion.house"
            target="_blank"
            rel="noreferrer"
            title="Check us out on Instagram"
          >
            <img className={styles.insta} src={Insta} alt="instagram icon" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Homepage
