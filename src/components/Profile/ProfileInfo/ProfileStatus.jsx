// import React from 'react';
// import styles from "./ProfileInfo.module.css";

// class ProfileStatus extends React.Component {

//    state = {
//       editMode: false,
//       status: this.props.status
//    }

//    activatedEditMode = () => {
//       this.setState({
//          editMode: true
//       })
//    }

//    deActivatedEditMode = () => {
//       this.setState({
//          editMode: false
//       })
//       this.props.updateStatus(this.state.status)
//    }

//    onStatusChange = (e) => {
//       this.setState({
//          status: e.target.value
//       })
//    }

//    componentDidUpdate(prevProps, prevStatus) {
//       if (prevProps.status !== this.props.status) {
//          this.setState({
//             status: this.props.status
//          })
//       }
//    }

//    render() {
//       return (
//          <div className={styles.status}>
//             {!this.state.editMode &&
//                <div>
//                   <span onDoubleClick={this.activatedEditMode} >{this.props.status || "--"}</span>
//                </div>
//             }
//             {this.state.editMode &&
//                <div>
//                   <input onChange={this.onStatusChange} autoFocus onBlur={this.deActivatedEditMode} type="text" value={this.state.status} />
//                </div>
//             }
//          </div>
//       )
//    }

// }

// export default ProfileStatus