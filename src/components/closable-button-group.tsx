import { Button, Group } from '@mantine/core';
import { FC } from 'react';
import { BsX } from 'react-icons/bs';

type Props = {
  buttonLabels: string[];
  onClick: (value: string) => void;
};

const CloseButtonsGroup: FC<Props> = ({ buttonLabels, onClick }) => (
  <Group>
    {buttonLabels.map((buttonLabel) => (
      <Button
        compact
        key={buttonLabel}
        leftIcon={<BsX />}
        onClick={() => onClick(buttonLabel)}
        variant="outline"
      >
        {buttonLabel}
      </Button>
    ))}
  </Group>
);

export { CloseButtonsGroup };
