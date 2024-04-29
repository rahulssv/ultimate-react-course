
const initialItems=[
  {id: 1,description:"Passports",quantity:2,packed: false},
  {id: 2,description:"Socks",quantity:12,packed: true}
]

export default function App(){
  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Status/>
  </div>
}
function Logo(){
  return <h1>🌴 Far Away 💼 </h1>
}
function Form(){
  return <div className="add-form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>
}
function PackingList(){
  return <div className="list">
     <ul className="list">
    {
      initialItems.map((item)=><Item items={item}/>)  
    }
  </ul>
  </div>
}
function Status(){
  return <footer className="stats">
    <em>
      You have X items on your list, and you already packed x(x%)
    </em>
  </footer>
}
function Item({items}){
  return <li>
    <span>
      {items.quantity}
    {items.description}

    </span>
    <button>❌</button>
    
  </li>
}