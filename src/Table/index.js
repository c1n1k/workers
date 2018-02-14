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
import { connect } from "react-redux";

class Table extends Component {
  initialState = {
    showModal: false,
    index: null
  };

  state = this.initialState;

  handleOpenModal = event => {
    const index = event.target.getAttribute("id");

    this.setState({
      showModal: true,
      index: index
    });
  };

  handleCloseForm = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  };

  render() {
    const items = this.props.list.map((item, index) => {
      if (item) {
        return (
          <Row key={index}>
            <CardLink to={"/card/" + index}>
              <Cell>{item.surname}</Cell>
              <Cell>{item.name}</Cell>
              <Cell>{item.position}</Cell>
            </CardLink>
            <Actions>
              <Button type="button" id={index} onClick={this.handleOpenModal}>
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
          index={this.state.index}
          onClose={this.handleCloseForm}
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

export default connect(mapStateToProps)(Table);
