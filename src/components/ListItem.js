import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    console.log(this.props)
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return (
        <Text style={styles.titleStyle}>{this.props.library.item.description}</Text>
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
          {/* <CardSection>
            <Text style={styles.titleStyle}>{description}</Text>
          </CardSection> */}
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
  return {
    selectedLibraryId: state.selectedLibraryId
  }
}

export default connect(mapStateToProps, actions)(ListItem);