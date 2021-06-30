import React, { useState, useEffect } from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileStatusHook = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   let activatedEditMode = () => {
      setEditMode(true)
   }

   let deActivatedEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   let onStatusChange = (e) => {
      setStatus(e.target.value)
   }

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   return (
      <div className={styles.status}>
         {!editMode &&
            <div>
               <span onDoubleClick={activatedEditMode} >{props.status || "--"}</span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={onStatusChange} onBlur={deActivatedEditMode} value={status} autoFocus type="text" />
            </div>
         }
      </div>
   )
}

export default ProfileStatusHook



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