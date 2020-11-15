import React from "react";
import Pagination from "../03_Pagination/Pagination";
import { paginate } from "../Reusable_Component/02_Pagination/paginate";
import TodoItem from "./03_ItemList.jsx";

class OrganizerItems extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      pageSize: 5,
    };
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.props.items;
    if (count === 0)
      return (
        <div className="">
          <p></p>
        </div>
      );
    const items = paginate(
      this.props.items,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div>
        <div>
          <thead>
            {/*  <tr>
              <th>Todo item list: {count}.</th>
            </tr> */}
            {items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  onDeleteItem={this.props.onDeleteItem}
                  UpdateItem={this.props.UpdateItem}
                />
              );
            })}
          </thead>
        </div>
        <br />
        <Pagination
          itemsCount={this.props.items.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}
export default OrganizerItems;
