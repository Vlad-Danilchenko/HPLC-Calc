import {HomePage} from "../../pages/HomePage/HomePage.jsx";
import {Container} from "../Header/Header.styled.js";

export const Main = ({children}) => {
	return (
		<main>
			<Container>
			{children}
			</Container>
		</main>
	)
}
