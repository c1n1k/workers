import React, { Component } from "react";
import Inner from "../UI/Inner";
import {
  Wrap,
  Head,
  Body,
  Row,
  CardLink,
  Cell,
  HeadRow,
  HeadCell,
  HeadActions,
  Actions
} from "./styled";
import Button from "../UI/Button";
import Form from "../Form";

export default class Table extends Component {
  initialState = {
    showModal: false,
    list: JSON.parse(localStorage.getItem("list")) || []
  };

  state = this.initialState;

  handleOpenModal = event => {
    const id = event.target.getAttribute("id");

    this.setState({
      showModal: true,
      selected: id
    });
  };

  handleCloseForm = () => {
    const newList = JSON.parse(localStorage.getItem("list")) || [];
    this.setState({
      showModal: false,
      list: newList
    });
  };

  render() {
    const items = this.state.list.map((item, id) => {
      if (item) {
        return (
          <Row key={id}>
            <CardLink to={"/card/" + id}>
              <Cell>{item.surname}</Cell>
              <Cell>{item.name}</Cell>
              <Cell>{item.position}</Cell>
            </CardLink>
            <Actions>
              <Button
                type="button"
                data={item}
                id={id}
                onClick={this.handleOpenModal}
              >
                Редактировать
              </Button>
            </Actions>
          </Row>
        );
      }
      return "";
    });

    return (
      <Inner>
        <Wrap>
          <Head>
            <HeadRow>
              <HeadCell>Фамилия</HeadCell>
              <HeadCell>Имя</HeadCell>
              <HeadCell>Должность</HeadCell>
              <HeadActions>
                <button type="button" onClick={this.handleOpenModal}>
                  Добавить
                </button>
              </HeadActions>
            </HeadRow>
          </Head>
          <Body>{items}</Body>
        </Wrap>
        <Form
          isOpen={this.state.showModal}
          index={this.state.selected}
          data={this.state.list[this.state.selected]}
          onClose={this.handleCloseForm}
        />
      </Inner>
    );
  }
}
