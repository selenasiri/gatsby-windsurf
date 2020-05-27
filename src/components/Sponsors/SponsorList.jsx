import React from "react"
import styles from "../../css/items.module.css"
import Sponsor from "./Sponsor"

const sponsorList = props => {
  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {props.sponsors.nodes.map(node => (
          <Sponsor key={node.id} sponsor={node} />
        ))}
      </div>
    </section>
  )
}

export default sponsorList
