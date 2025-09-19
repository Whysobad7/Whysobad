import React from 'react'
import cl from './Projects.module.scss'
import Project from '../../components/Project'
import cyberPunk from '../../media/Cyberpunk.webp';
import yandexGo from '../../media/Yandex-GO.webp';
import posts from '../../media/posts.webp';


const projectsData = [
	{
		name: 'Cyberpunk',
		img: cyberPunk,
		description: 'One of my early educational projects: a landing page advertising the second masterpiece game from the Polish company CD Projekt Red. I am not sure if it can be called a commercial project, as I took on the task of developing this order for free on a freelance platform to gain experience.',
		stack: {
			lib: 'Native JS',
			style: 'SCSS'
		},
		repoLink: 'https://github.com/Whysobad7/website',
		demoLink: 'https://whysobad7.github.io/website/',
	},
	{
		name: 'Yandex-GO',
		img: yandexGo,
		description: 'Another landing page, advertising Yandex-GO.',
		stack: {
			lib: 'Native JS',
			style: 'SCSS'
		},
		repoLink: 'https://github.com/Whysobad7/Yandex-GO',
		demoLink: 'https://whysobad7.github.io/Yandex-GO/',
	}
]

function Projects() {
	return (
		<section className={cl.projects}>
			<h3>Works</h3>
			<div className={cl.projectsGrid}>
				{projectsData.map((project) => (
					<Project key={project.name} props={project} />
				))}
			</div>
		</section>
	)
}

export default Projects