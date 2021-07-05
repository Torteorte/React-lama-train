import React from "react";
import styles from "./Paginator.module.css";
import Pagination from "react-js-pagination";

class Paginator extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         activePage: this.props.currentPage
      };
   }

   handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({ activePage: pageNumber });
      this.props.onPagechange(pageNumber)
   }

   render() {
      return (
         <div className={styles.Paginator}>
            <Pagination
               activePage={this.state.activePage}
               itemsCountPerPage={this.props.pageSize}
               totalItemsCount={this.props.totalUsers}
               pageRangeDisplayed={10}
               onChange={this.handlePageChange.bind(this)}
               activeClass={styles.active}
               disabledClass={styles.disabledClass}
            />
         </div>
      );
   }
}

export default Paginator