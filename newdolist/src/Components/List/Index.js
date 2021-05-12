import ListItems from "./ListItems/index"

function List({ list, setLst }) { //accepts two props here
  

  function deleteItems(index){
    let itemDeletedList = [...list.slice(0, index), ...list.slice(index+1)];
    setLst(itemDeletedList);
  }
  
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}
          <ListItems class="list-items" deleteItems={deleteItems} index={index}/>
          </li>
        ))}
      </ul>
    </div>
  );


}

export default List;
