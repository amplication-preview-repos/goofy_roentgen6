import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BodyTypeTitle } from "../bodyType/BodyTypeTitle";
import { FaceTitle } from "../face/FaceTitle";
import { HairColorTitle } from "../hairColor/HairColorTitle";

export const FeaturesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bodyType.id"
          reference="BodyType"
          label="BodyType"
        >
          <SelectInput optionText={BodyTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="face.id" reference="Face" label="Face">
          <SelectInput optionText={FaceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="hairColor.id"
          reference="HairColor"
          label="HairColor"
        >
          <SelectInput optionText={HairColorTitle} />
        </ReferenceInput>
        <NumberInput label="height" source="height" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};