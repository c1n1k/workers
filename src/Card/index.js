import React, { Component } from "react";
import Button from "../UI/Button";
import Inner from "../UI/Inner";
import { Wrap, Row, Term, Desc, Actions } from "./styled";
import Form from "../Form";
import { connect } from "react-redux";

class Card extends Component {
  initialState = {
    isOpen: false,
    index: this.props.match.params.id
  };

  state = this.initialState;

  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  handleOpenModal = event => {
    this.setState({
      ...this.setState,
      isOpen: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      ...this.setState,
      isOpen: false
    });
  };

  render() {
    const data = this.props.list[this.state.index];
    return (
      <Inner>
        <Wrap>
          <Row>
            <Term>Фамилия</Term>
            <Desc>{data.surname}</Desc>
          </Row>
          <Row>
            <Term>Имя</Term>
            <Desc>{data.name}</Desc>
          </Row>
          <Row>
            <Term>Должность</Term>
            <Desc>{data.position}</Desc>
          </Row>
          <Row>
            <Term>Описание</Term>
            <Desc>{data.description}</Desc>
          </Row>
        </Wrap>
        <Actions>
          <Button onClick={this.back}>К списку</Button>
          <Button type="button" onClick={this.handleOpenModal}>
            Редактировать
          </Button>
        </Actions>
        <Form
          isOpen={this.state.isOpen}
          index={this.state.index}
          onClose={this.handleCloseModal}
        />
      </Inner>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state
  };
}

export default connect(mapStateToProps)(Card);
