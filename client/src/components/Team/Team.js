import React from 'react'
import styles from './Team.module.css'


const Team = () => (
<div className="container">
<div className="row justify-content-between pt-5 mt-5">
<div className="col-md-5 mt-5">
  <div className={styles.member}>
    <img src="https://cdn.glitch.com/f28949c6-6f44-4abb-a9a1-6a9e90371a91%2FIMG-20200729-WA0000_mh1596115301303.jpg?v=1596115348329"/>
    <h2>Caroline Ninganga</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Education and Healthcare industry.</p>
    
    <div className={styles.socicons}>
  
      <a target="_blank" href="https://www.linkedin.com/in/carolineninganga/"><i className="fab fa-linkedin-in"></i></a>
     
    </div>
    
  </div>
  </div>

  <div className="col-md-5 mt-5">
  <div className={styles.member}>
    <img src="https://cdn.glitch.com/f28949c6-6f44-4abb-a9a1-6a9e90371a91%2F52837649.jpg?v=1596115147721"/>
    <h2>Yaheng Wu</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Accounting and Information Systems.</p>
    
    <div className={styles.socicons}>
   
      <a target="_blank" href="https://www.linkedin.com/in/yahengwu/"><i className="fab fa-linkedin-in"></i></a>
  
    </div>
    
  </div>
  </div>
  </div>
</div>
)


export default Team;