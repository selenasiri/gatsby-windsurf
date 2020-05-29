import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"

const Video = ({ video }) => {
  const { title, date, videoUrl } = video
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <iframe src={videoUrl} />
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </article>
  )
}

export default Video
