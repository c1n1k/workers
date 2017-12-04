import React, { Component } from "react";
import { Wrap, Form, Label, Row } from "./styled";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import ReactModal from "react-modal";

ReactModal.defaultStyles.content = {
  margin: "40px auto",
  maxWidth: "640px",
  outline: "none",
  border: "none",
  backgroundColor: "#fff"
};
ReactModal.setAppElement("#root");

export default class Add extends Component {
  save = event => {
    event.preventDefault();

    const index = this.props.index;
    const list = JSON.parse(localStorage.getItem("list")) || [];

    const data = {};
    const formData = new FormData(event.target);
    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    index ? (list[index] = data) : list.push(data);
    localStorage.setItem("list", JSON.stringify(list));

    this.props.onClose(list);
  };

  render() {
    const data = this.props.data || {};
    return (
      <ReactModal isOpen={this.props.isOpen}>
        <Wrap>
          <button type="button" onClick={this.props.onClose}>
            Закрыть
          </button>
          <Form action="" onSubmit={this.save}>
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
