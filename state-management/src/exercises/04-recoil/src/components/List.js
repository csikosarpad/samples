import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from '../common/styles';
import { listState, allState } from '../common/atoms';
import { listItems } from '../common/selectors';

const List = () => {
  const setList = useSetRecoilState(listState);
  const [all, setAll] = useRecoilState(allState);
  const allItems = useRecoilValue(listItems);

  const check = (id) => {
    const updated = all.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setList(updated);
    setAll(updated);
  };

  return (
    <ul>
      {allItems.map((item) => (
        <li
          key={item.id}
          style={item.done ? styles.item_done : {}}
          onClick={() => check(item.id)}
        >
          {item.task}
        </li>
      ))}
    </ul>
  );
};
export default List;
