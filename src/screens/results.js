import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding-vertical: 50px;
  padding-horizontal: 25px;
`;

const Header = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const List = styled(FlatList)`
  margin-vertical: 50px;
`;

const ListItem = styled(View)`
  flex-direction: row;
  margin-vertical: 10px;
`;

const IconText = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  margin-top: -5px;
`;

const Button = styled(Text)`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

class Results extends PureComponent {
  onPlayAgain = () => {
    this.props.navigation.navigate('Home');
  };

  renderItem = ({ item, index }) => {
    const answers = this.props.navigation.getParam('answers');
    return (
      <ListItem>
        <IconText>
          {answers[index] ? '+' : '-'}
        </IconText>
        <HTML
          html={item.question}
          containerStyle={{ paddingHorizontal: 20 }}
          baseFontStyle={{ fontSize: 20, fontWeight: '400' }}
        />
      </ListItem>
    );
  };

  render() {
    const { quiz, navigation } = this.props;
    const answers = navigation.getParam('answers');

    return (
      <Container>
        <Header>
          {`You scored\n${answers.filter((ans) => ans).length} / 10`}
        </Header>
        <List
          data={quiz}
          keyExtractor={(item) => item.question}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
        />
        <TouchableOpacity onPress={this.onPlayAgain}>
          <Button>
            PLAY AGAIN?
          </Button>
        </TouchableOpacity>
      </Container>
    );
  }
}

Results.propTypes = {
  quiz: PropTypes.arrayOf(PropTypes.object),
};

Results.defaultProps = {
  quiz: [],
};

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
});

export default connect(
  mapStateToProps,
  null,
)(Results);
