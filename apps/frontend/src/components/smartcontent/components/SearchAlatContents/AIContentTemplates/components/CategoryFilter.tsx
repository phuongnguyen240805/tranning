import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selected,
  onSelect,
}) => {

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 h-7 rounded-full text-xs font-medium border-none transition-colors duration-150
            ${
              selected === category
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
