import { Component } from "react";
import firebase from "firebase";
import styles from "../styles/components/FileUpload.module.scss";

class FileUpload extends Component {
   constructor () {
      super();
      this.state = {
         uploadValue: 0,
         picture: true
      };
      this. handleUpload = this.handleUpload.bind(this);
   }

   handleUpload (event) {
      const file = event.target.files[0];
      //const blob = new Blob([event.target.result], { type: "image/jpeg"});      
      const storageRef = firebase.storage().ref(`/photosPublication/${file.name}`);
      console.log(file.name)
      const task = storageRef.put(file);

<<<<<<< HEAD
      task.on('state-changed', snapshot => {
=======
      task.on('statechanged', snapshot => {
>>>>>>> 3d72e94cf656d558801bfc5f2defd192cda26ace
         let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         this.setState({
            uploadValue: percentage
         })
      }, error => {
         console.log(error.message)
      }, () => {
         this.setState({
            message: 'Archivo subido!',
            uploadValue: 100,
            picture: task.snapshot.ref.getDownloadURL
         });
      });
   }

   render () {
      return (
         <div className={styles.UpPhoto} aria-setsize>
            <progress value={this.state.uploadValue} max="100"></progress>
            <br/>
            <input type="file" onChange={this.handleUpload}/>
            <br/>
            <img width="104px" height="80px" src={this.state.picture} alt=""/>
         </div>
      );
   }
}

export default FileUpload;