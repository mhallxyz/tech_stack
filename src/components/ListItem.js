import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true)

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title, description } = this.props.library.item;
    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);