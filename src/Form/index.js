import React, { Component } from "react";
import { Wrap, Form, Label, Row } from "./styled";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import ReactModal from "react-modal";
import { add, edit } from "./action.js";
import { connect } from "react-redux";

ReactModal.defaultStyles.content = {
  margin: "40px auto",
  maxWidth: "640px",
  outline: "none",
  border: "none",
  backgroundColor: "#fff"
};

class Add extends Component {
  componentWillMount() {
    ReactModal.setAppElement("body");
  }

  onSave = event => {
    event.preventDefault();

    const index = this.props.index;

    const data = {};
    const formData = new FormData(event.target);

    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1];
      index
        ? (data.id = this.props.list[this.props.index].id)
        : (data.id = Date.now());
    }

    index
      ? this.props.dispatch(edit(index, data))
      : this.props.dispatch(add(data));

    this.props.onClose();
  };

  render() {
    const data = this.props.list[this.props.index] || {};
    return (
      <ReactModal isOpen={this.props.isOpen}>
        <Wrap>
          <button type="button" onClick={this.props.onClose}>
            Закрыть
          </button>
          <Form action="" onSubmit={this.onSave}>
            <Row>
              <Label htmlFor="surname">Фамилия</Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                defaultValue={data.surname}
                required
              />
            </Row>
            <Row>
              <Label htmlFor="name">Имя</Label>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={data.name}
                required
              />
            </Row>
            <Row>
              <Label htmlFor="position">Должность</Label>
              <Input
                type="text"
                name="position"
                id="position"
                defaultValue={data.position}
                required
              />
            </Row>
            <Row>
              <Label htmlFor="description">Описание</Label>
              <Textarea
                type="text"
                name="description"
                id="description"
                defaultValue={data.description}
              />
            </Row>
            <Row>
              <Button type="submit">Сохранить</Button>
            </Row>
          </Form>
        </Wrap>
      </ReactModal>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state
  };
}

export default connect(mapStateToProps)(Add);
