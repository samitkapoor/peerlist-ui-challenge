import { useState } from 'react';
import AnimatedCheckboxItem from '../components/AnimatedCheckboxItem';

interface Option {
  id: number;
  label: string;
  completed: boolean;
}

const options: Option[] = [
  {
    id: 1,
    label: 'Buy groceries',
    completed: false
  },
  {
    id: 2,
    label: 'Contemplate existence',
    completed: true
  },
  {
    id: 3,
    label: 'Learn SwiftUI',
    completed: false
  }
];

const TodoList = () => {
  const [selectedItems, setSelectedItems] = useState<Option[]>(options);

  const handleSelectItem = (item: Option) => {
    setSelectedItems((t) => {
      const prev = JSON.parse(JSON.stringify(t));
      const i = prev.findIndex((i: Option) => i.id === item.id);
      prev[i].completed = !prev[i].completed;
      return [...prev];
    });
  };

  return (
    <div className="flex items-start flex-col justify-start bg-white w-screen h-screen gap-2 p-10">
      {selectedItems.map((item) => (
        <AnimatedCheckboxItem key={item.id} item={item} handleSelectItem={handleSelectItem} />
      ))}
    </div>
  );
};

export default TodoList;
