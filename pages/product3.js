import { db } from "../firebase/firebase.config";

const Product = ( ) => {

  db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    console.log(doc.data())
    })
  })
  // return <>console.log(doc.data())</>;
}

export default Product;