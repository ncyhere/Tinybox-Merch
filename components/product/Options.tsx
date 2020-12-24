import { useEffect, useState } from 'react';
import isArrayEqual from '@utils/isArrayEqual';

const Options = ({ product, dispatch }) => {
  const calcOptions = () => {
    const variants = product.variants;
    const calculatedOptions = [];
    for (
      let index = 0;
      index < variants[index].selectedOptions.length;
      index++
    ) {
      calculatedOptions.push({
        name: product.options[index].name,
        options: Array.from(
          new Set(
            variants.map((variant) => variant.selectedOptions[index].value)
          )
        ), // this ensures there are only unique values
      });
    }
    return calculatedOptions;
  };

  const updateSelections = (e) => {
    const [optionName, optionValue] = e.target.value.split('|');
    setSelection(
      selection.map((choice) => {
        if (choice.name == optionName) choice.value = optionValue;
        return choice;
      })
    );
  };

  const [options] = useState(() => {
    return calcOptions();
  });

  const [selection, setSelection] = useState(() =>
    options.map((option) => ({ name: option.name, value: option.options[0] }))
  );

  // when selection changes- dispatch an update
  useEffect(() => {
    const selectionOptions = selection.map((choice) => choice.value);
    const newVariant = product.variants.find((variant) => {
      const currVarrOptions = variant.selectedOptions.map(
        (option) => option.value
      );
      return isArrayEqual(selectionOptions, currVarrOptions);
    });
    console.log(newVariant);
    dispatch({
      type: 'CHANGE_VARIANT',
      payload: newVariant,
    });
  }, [selection]);

  return (
    <>
      <div className="grid md:grid-cols-2 my-4 gap-4">
        {options.map((option) => {
          return (
            <div className="block">
              <label
                className="flex flex-col"
                key={option.name}
                htmlFor={option.name}
              >
                {option.name}
              </label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                name={option.name}
                id={option.name}
                onChange={updateSelections}
              >
                {option.options.map((choice) => (
                  <option
                    key={`${option.name}|${choice}`}
                    value={`${option.name}|${choice}`}
                  >
                    {choice}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Options;
