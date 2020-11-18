

export default function Cart() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cartItems, setCartItems] = useState("");
  const [image, setImage] = useState([]);
  const [total, setTotal] = useState("");
   const [nombre, setNombre] = useState('')

  const createOrder = (e) => {
      e.preventDefault();

      const order = {
        setName(name)
        setEmail(email)
        setAddress(address)
        setCartItems(cartItems)
        setImage([image])
        total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
      };
      this.props.createOrder(order);
    };


      useEffect(()=> {    
    localStorage.setItem("nombre", nombre)
  })

    return (
    <div>
      <input onChange={ e => {
        setNombre(e.target.value)
      }}
      value={nombre}
      />
    </div>
  )
}
