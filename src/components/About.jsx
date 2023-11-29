import React from 'react'
import cl from '../pages/main/Main.module.scss'
import narutoGif from '../media/naruto.gif';





function About() {

	return (
		<div className={cl.about}>
			<div className={cl.aboutImg}>
				<img src={narutoGif} alt="" />
			</div>
			<div className={cl.aboutText}>
				<h3>About me</h3>
				<p>
					&nbsp; &nbsp; &nbsp;I am a student actively learning frontend development with a special focus on the React ecosystem. My main goal is to become an expert in the field of frontend development. In the future, I also aspire to evolve into a full-stack developer.
					<br /><br />
					I systematically develop skills in frontend development, concentrating on creating quality projects for my portfolio and continually improving my skills through studying theory and solving complex problems on LeetCode.
					<br /><br />
					Currently, I am seeking opportunities for employment as a junior frontend developer or intern. I am open to exchanging experiences, networking, and opportunities for learning and development. If you have advice, recommendations, or just interesting ideas, I would be glad to hear them.
				</p>
			</div>
		</div>
	)
}

export default About