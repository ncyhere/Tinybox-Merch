import { useEffect, useState } from 'react';
import isArrayEqual from '@utils/isArrayEqual';

const Options = ({ staticProduct, state, dispatch }) => {
  if (state.loading) return <SkeletonOptions staticProduct={staticProduct} />;
  return <LoadedOptions product={state.product} dispatch={dispatch} />;
};

const SkeletonOptions = ({ staticProduct }) => {
  return (
    <div className="grid gap-4 my-4 md:grid-cols-2">
      {staticProduct.options > 1 &&
        staticProduct.options.map((option) => (
          <div key={option.id} className="block">
            <label className="flex flex-col" htmlFor={option.name}>
              {option.name}
            </label>
            <select
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name={option.name}
              id={option.name}
            >
              <option value={undefined}>loading...</option>
              {option.values.map((value) => (
                <option
                  key={`${option.name}|${value.value}`}
                  value={`${option.name}|${value.value}`}
                  disabled={true}
                >
                  {value.value}
                </option>
              ))}
            </select>
          </div>
        ))}
    </div>
  );
};

const LoadedOptions = ({ product, dispatch }) => {
  const calcOptions = () => {
    if (product.variants.length > 1) {
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
    } else {
      return [];
    }
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

  const [selection, setSelection] = useState(() => {
    if (product.variants.length > 1) {
      return options.map((option) => ({
        name: option.name,
        value: option.options[0],
      }));
    } else {
      return product.variants[0];
    }
  });

  // when selection changes- dispatch an update
  useEffect(() => {
    if (product.variants.length > 1) {
      const selectionOptions = selection.map((choice) => choice.value);
      const newVariant = product.variants.find((variant) => {
        const currVarrOptions = variant.selectedOptions.map(
          (option) => option.value
        );
        return isArrayEqual(selectionOptions, currVarrOptions);
      });
      dispatch({
        type: 'CHANGE_VARIANT',
        payload: newVariant,
      });
    }
  }, [selection]);

  return (
    <>
      <div className="grid gap-4 my-4 md:grid-cols-2">
        {options.map((option) => {
          return (
            <div key={option.id} className="block">
              <label className="flex flex-col" htmlFor={option.name}>
                {option.name}
              </label>
              <select
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
