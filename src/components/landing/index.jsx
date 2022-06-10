// custom component
import Container from "./Container";
import Title from "./Title";
import Tac from "./Tac";
import Tic from "./Tic";
import Toe from "./Toe";

const Landing = () => {
    return (
        <Container>
            <Title>
                <Tac />
                &nbsp;
                <Tic />
                &nbsp;
                <Toe />
            </Title>
        </Container>
    );
};

export default Landing;
