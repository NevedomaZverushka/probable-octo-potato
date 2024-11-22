import { ButtonGroup, Content, Dialog, DialogTrigger, Divider, Flex, Header } from "@adobe/react-spectrum";
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

            <SecondaryText>Due at: {dueAtSection}</SecondaryText>
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
