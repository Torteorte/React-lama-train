
import React from 'react';
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

   state = {
      editMode: false
   }

   activatedEditMode() {
      this.setState({
         editMode: true
      })
   }

   deActivatedEditMode() {
      this.setState({
         editMode: false
      })
   }

   render() {
      return (
         <div className={styles.status}>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activatedEditMode.bind(this)} >{this.props.status}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input autoFocus onBlur={this.deActivatedEditMode.bind(this)} type="text" value={this.props.status} />
               </div>
            }
         </div>
      )
   }

}

export default ProfileStatus