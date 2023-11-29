import { React, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Main from "../pages/main/Main";
import Posts from "../pages/posts/Posts";
import Projects from "../pages/projects/Projects";
import PostPage from "../pages/postPage/PostPage";



const AnimatedSwitch = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<SwitchTransition >
			<CSSTransition key={location.pathname} classNames='fade' timeout={500} unmountOnExit>
				<Routes location={location}>
					<Route path="*" element={<Main />} exact />
					<Route path="/posts" element={<Posts />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="post/:postId" element={<PostPage />} />
				</Routes>
			</CSSTransition>
		</SwitchTransition>
	);
};

export default AnimatedSwitch