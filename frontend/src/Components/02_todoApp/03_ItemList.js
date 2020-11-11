import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import styled from "../styles";

class TodoItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div style={styled.list}>
          <p style={styled.list.p}>
            <input
              style={styled.list.input}
              type="text"
              id={item.id}
              value={item.text}
              onChange={(e) => {
                this.props.UpdateItem(e.target.value, item.id);
              }}
            />
            <span style={styled.del}>
              <DeleteOutlineIcon
                onClick={() => this.props.onDeleteItem(item.id)}
              />
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default TodoItem;
