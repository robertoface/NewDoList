import '../List/list.css'

function List({ list, setLst }) { //accepts two props here
  
  function ListItems({ text, deleteItems, index }) {
    return (
      <>
        <button onClick={() => deleteItems(index)}> ❌  </button>
      </> //deleteItems used to have 2 parameters, text and index. Here button doesnt make sense, although it's now valid.
    );
  }

  function deleteItems(index){
    let itemDeletedList = [...list.slice(0, index), ...list.slice(index+1)];
    setLst(itemDeletedList);
  }
  
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}
          className = "list-info">
            {item}
          <ListItems class="list-items" deleteItems={deleteItems} index={index}/>
          </li>
        ))}
      </ul>
    </div>
  );


}

export default List;
