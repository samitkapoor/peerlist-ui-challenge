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
    label: 'Create Animated Label',
    completed: false
  },
  {
    id: 2,
    label: 'Create Animated Checkbox',
    completed: false
  },
  {
    id: 3,
    label: 'Submit on Peerlist',
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
    <div
      style={{
        background: 'radial-gradient(circle at top right, rgba(0, 200, 83, 0.2), #ffffffED 25%)'
      }}
      className="flex items-start flex-col justify-start w-full h-full gap-2 p-5"
    >
      {selectedItems.map((item) => (
        <AnimatedCheckboxItem key={item.id} item={item} handleSelectItem={handleSelectItem} />
      ))}
    </div>
  );
};

export default TodoList;
