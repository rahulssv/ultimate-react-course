import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [select, setSelect] = useState(false);
  return (
    <div>
      <FriendList select={select} setSelect={setSelect} />
      <SplitBill select={select} />
      <AddFriend />
    </div>
  );
}

function FriendList({ select, setSelect }) {
  const [button, setButton] = useState(null);
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend, i) => (
          <Friend
            friend={friend}
            select={select}
            setSelect={setSelect}
            button={button}
            setButton={setButton}
            index={i}
          />
        ))}
      </ul>
    </div>
  );
}
function Friend({ friend, select, setSelect, setButton, button, index }) {
  function updateSelect() {
    setButton(index);
    setSelect(!select);
  }

  return (
    <div className="sidebar">
      <li>
        <img src={friend.image} />
        <h3>{friend.name}</h3>
        <p></p>
        {button === index && select ? (
          <button className="button" onClick={() => updateSelect()}>
            Close
          </button>
        ) : (
          <button className="button" onClick={() => updateSelect()}>
            Select
          </button>
        )}
      </li>
    </div>
  );
}

function SplitBill({ select }) {
  return (
    <div className="form-split-bill">
      {select ? (
        <>
          <form className="form">
            <h2>SPLIT A BILL WITH ANTHONY</h2>
            <div>
              <label>💰 Bill Value</label>
              <input type="number" />
            </div>
            <div>
              <label>🤵‍♂️ Your expense</label>
              <input type="number" />
            </div>
            <div>
              <label>🧑‍🤝‍🧑 Friend's expense</label>
              <input type="number" />
            </div>
            <div>
              <label>🤑 Who is paying the bill?</label>
              <select>
                <option>You</option>
                <option>Friend</option>
              </select>
            </div>
            <button className="button">Split bill</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function AddFriend() {
  const [add, setAdd] = useState(false);
  return (
    <div>
      {add ? (
        <>
          <form className="form">
            <div>
              <label>🤵‍♂️ Friend Name</label>
              <input type="number" />
            </div>
            <div>
              <label>🧑‍🤝‍🧑 Image URL</label>
              <input type="number" />
            </div>

            <button className="button">Add</button>
          </form>
          <button className="button" onClick={() => setAdd(!add)}>
            Close
          </button>
        </>
      ) : (
        <button className="button" onClick={() => setAdd(!add)}>
          Add Friend
        </button>
      )}
    </div>
  );
}
