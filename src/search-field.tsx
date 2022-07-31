import { Button, Space, TextInput } from '@mantine/core';
import { FC, FormEventHandler, useId, useRef } from 'react';
import { BsPlus } from 'react-icons/bs';

type Props = {
  name: string;
  label: string;
  placeholderText?: string;
  onSubmit: (input: string) => void;
};

const SearchField: FC<Props> = ({
  name,
  onSubmit: onSubmitProp,
  label,
  placeholderText,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const id = useId();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (ref.current?.value) {
      onSubmitProp(ref.current?.value);
      ref.current.value = '';
    }
  };

  return (
    <form name={`${name} input`} onSubmit={onSubmit}>
      <TextInput
        autoComplete="false"
        id={id}
        label={
          <>
            <label htmlFor={id}>{label}</label>
            <Space h="sm" />
          </>
        }
        name={name}
        placeholder={placeholderText}
        ref={ref}
        rightSection={
          <Button
            rightIcon={<BsPlus />}
            style={{ marginRight: '50px' }}
            type="submit"
          >
            Add
          </Button>
        }
        size="lg"
      />
    </form>
  );
};

export { SearchField };
