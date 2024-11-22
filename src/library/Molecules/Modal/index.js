import { ButtonGroup, Content, Dialog, DialogTrigger, Divider, Flex, Header, StatusLight } from "@adobe/react-spectrum";
import { PrimaryButton } from "../../Atoms/Button/PrimaryButton";
import { SecondaryButton } from "../../Atoms/Button/SecondaryButton";
import { Heading } from "../../Atoms/Heading";
import { SecondaryText } from "../../Atoms/Text";

export const Modal = ({
  triggerButtonSection,
  titleSection,
  idSection,
  descriptionSection,
  dueAtSection,
  buttonSection,
  onSubmit,
  completed,
}) => {
  return (
    <DialogTrigger>
      {triggerButtonSection}

      {(close) => (
        <Dialog>
          <Heading>{titleSection}</Heading>

          <Header>
            <SecondaryText>Task #{idSection}</SecondaryText>
          </Header>

          <Divider size="S" marginY="size-200" />

          <Content>
            {descriptionSection}

            <Divider size="S" marginY="size-200" />

            <Flex direction="row" justifyContent="space-between">
              <SecondaryText>Due at: {dueAtSection}</SecondaryText>

              {completed && <StatusLight variant="positive">Ready</StatusLight>}
            </Flex>
          </Content>

          <ButtonGroup>
            <Flex direction="row" gap="size-200">
              <SecondaryButton onClick={close}>Close</SecondaryButton>

              {buttonSection && (
                <PrimaryButton
                  onClick={() => {
                    onSubmit?.();
                    close();
                  }}
                >
                  {buttonSection}
                </PrimaryButton>
              )}
            </Flex>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
};
