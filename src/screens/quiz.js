import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding-vertical: 50px;
  padding-horizontal: 40px;
`;

const Header = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const QuestionContainer = styled(View)`
  height: 300px;
  padding: 30px;
  border-width: 2px;
  justify-content: center;
`;

const Pager = styled(Text)`
  margin-top: 25px;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;

const ButtonsContainer = styled(View)`
  width: 250px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
`;

const Button = styled(Text)`
  font-size: 28px;
  font-weight: 500;
`;

class Quiz extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      quizIndex: 0,
      answers: [],
    };
  }

  onAnswer(answer) {
    const { quizIndex, answers } = this.state;
    const { quiz, navigation } = this.props;
    const temp = answers.slice();

    const correctAnswer = (quiz[quizIndex].correct_answer.toUpperCase() === 'TRUE');
    temp.push(correctAnswer === answer);
    this.setState({ answers: temp });

    if (quizIndex < quiz.length - 1) {
      this.setState({ quizIndex: quizIndex + 1 });
    } else {
      navigation.navigate('Results', { answers: temp });
    }
  }

  render() {
    const { quiz } = this.props;
    const { quizIndex } = this.state;

    return (
      <Container>
        <Header>{quiz[quizIndex].category}</Header>
        <QuestionContainer>
          <HTML html={quiz[quizIndex].question} baseFontStyle={{ fontSize: 26, textAlign: 'center', fontWeight: '600' }} />
        </QuestionContainer>
        <Pager>
          {quizIndex + 1}
          {' of 10'}
        </Pager>
        <ButtonsContainer>
          <TouchableOpacity onPress={() => this.onAnswer(true)}>
            <Button>True</Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onAnswer(false)}>
            <Button>False</Button>
          </TouchableOpacity>
        </ButtonsContainer>
      </Container>
    );
  }
}

Quiz.propTypes = {
  quiz: PropTypes.arrayOf(PropTypes.object),
};

Quiz.defaultProps = {
  quiz: [],
};

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
});

export default connect(
  mapStateToProps,
  null,
)(Quiz);
