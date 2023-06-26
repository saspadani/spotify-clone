'use client';

import * as RadixSlider from '@radix-ui/react-slider';

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
  const handleChange = (newvalue: number[]) => {
    onChange?.(newvalue[0]);
  };

  return (
    <RadixSlider.Root
      className='relative flex items-center select-none touch-none w-full h-10'
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label='Volume'
    >
      <RadixSlider.Track className='relative bg-neutral-600 grow rounded-full h-[3px]'>
        <RadixSlider.Range className='absolute h-full bg-white rounded-full' />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
