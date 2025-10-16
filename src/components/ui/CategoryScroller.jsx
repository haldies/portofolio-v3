import React from 'react';
import { cn } from '../../utils/cn';

const CategoryScroller = ({
  categories = [],
  selectedCategory,
  onSelect,
  className,
  buttonClassName,
  selectedClassName,
  unselectedClassName
}) => {
  if (!categories.length) {
    return null;
  }

  const baseSelectedClass =
    selectedClassName || 'border-foreground bg-foreground text-background';
  const baseUnselectedClass =
    unselectedClassName ||
    'border-border bg-card text-muted-foreground hover:border-foreground/50 hover:text-foreground border-2 border-gray-300' ;

  return (
    <div
      className={cn(
        'flex items-center gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-center scrollbar-hide ',
        className
      )}
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect?.(category)}
          className={cn(
            'flex-shrink-0  rounded-full px-4 py-2 text-sm transition-colors ',
            buttonClassName,
            selectedCategory === category ? baseSelectedClass : baseUnselectedClass
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryScroller;
