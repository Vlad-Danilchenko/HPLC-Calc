import {LoginButton, RegisterButton, WrapBtn} from "./HomePage.styled.js";

export const HomePage = () => {
	return (
		<WrapBtn>
			<RegisterButton>Register</RegisterButton>
			<LoginButton>Log In</LoginButton>
		</WrapBtn>
	)
}
