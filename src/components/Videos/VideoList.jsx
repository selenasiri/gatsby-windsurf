import React from "react"
import styles from "../../css/items.module.css"
import Video from "./Video"

const VideoList = props => {
  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {props.videos.nodes.map(node => (
          <Video key={node.id} video={node} />
        ))}
      </div>
    </section>
  )

  return <Video />
}

export default VideoList
