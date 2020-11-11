import { Component } from "react";
import firebase from "firebase";
import styles from "../styles/components/FileUpLoad.module.scss";

class FileUpload extends Component {
  constructor(props) {
    super();
    this.state = {
      uploadValue: 0,
      picture: true,
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase
      .storage()
      .ref(`/photosPublication/${file.name}`);
    console.log(storageRef.fullPath);
    console.log(file.name);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: percentage,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.setState({
            message: "Archivo subido!",
            uploadValue: 100,
            picture: downloadURL,
          });
          this.props.onImageUpload(this.state.picture);
        });
      }
    );
  }

  render() {
    return (
      <div className={styles.UpPhoto} aria-setsize>
        <img 
          width="180px" 
          height="140px" 
          src={this.state.picture} alt="" 
        />
        <br />
        <progress
          className={styles.progress_bar}
          value={this.state.uploadValue}
          max="100"
        ></progress>
        <br />
        <input type="file" onChange={this.handleUpload} />
      </div>
    );
  }
}

export default FileUpload;
