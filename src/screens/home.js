import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';

import { getQuiz } from '../redux/actions/quiz';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 50px;
`;

const Header = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const Body = styled(Text)`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

const Button = styled(Text)`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

class Home extends PureComponent {
  componentDidMount() {
    this.props.getQuiz();
  }

  render() {
    const { loading, navigation } = this.props;

    if (loading) {
      return (
        <Container>
          <ActivityIndicator size="large" color="black" />
        </Container>
      );
    }

    return (
      <Container>
        <Header>Welcome to the Trivia Challenge!</Header>
        <Body>You will be presented with 10 True or False questions.</Body>
        <Body>Can you score 100%?</Body>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Button>BEGIN</Button>
        </TouchableOpacity>
      </Container>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool,
  getQuiz: PropTypes.func.isRequired,
};

Home.defaultProps = {
  loading: false,
};

const mapStateToProps = (state) => ({
  loading: state.quiz.loading,
});

export default connect(
  mapStateToProps,
  {
    getQuiz,
  },
)(Home);
