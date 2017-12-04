import React, { Component } from "react";
import Button from "../UI/Button";
import Inner from "../UI/Inner";
import { Wrap, Row, Term, Desc, Actions } from "./styled";
import Form from "../Form";

export default class Card extends Component {
  initialState = {
    isOpen: false,
    index: this.props.match.params.id,
    list: JSON.parse(localStorage.getItem("list")) || []
  };

  state = this.initialState;

  componentWillMount() {
    const index = this.state.index;

    this.setState({
      data: this.initialState.list[index]
    });
  }

  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  handleOpenModal = event => {
    const id = event.target.getAttribute("id");

    this.setState({
      showModal: true,
      selected: id
    });
  };

  handleCloseModal = () => {
    const newList = JSON.parse(localStorage.getItem("list")) || [];
    this.setState(
      {
        showModal: false,
        data: newList[this.state.index]
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    const data = this.state.data;
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
          isOpen={this.state.showModal}
          index={this.state.index}
          data={this.state.list[this.state.index]}
          onClose={this.handleCloseModal}
        />
      </Inner>
    );
  }
}
