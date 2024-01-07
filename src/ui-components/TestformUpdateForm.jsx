/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTestform } from "../graphql/queries";
import { updateTestform } from "../graphql/mutations";
const client = generateClient();
export default function TestformUpdateForm(props) {
  const {
    id: idProp,
    testform: testformModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ipaddress: "",
    human: false,
  };
  const [ipaddress, setIpaddress] = React.useState(initialValues.ipaddress);
  const [human, setHuman] = React.useState(initialValues.human);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = testformRecord
      ? { ...initialValues, ...testformRecord }
      : initialValues;
    setIpaddress(cleanValues.ipaddress);
    setHuman(cleanValues.human);
    setErrors({});
  };
  const [testformRecord, setTestformRecord] = React.useState(testformModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTestform.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTestform
        : testformModelProp;
      setTestformRecord(record);
    };
    queryData();
  }, [idProp, testformModelProp]);
  React.useEffect(resetStateValues, [testformRecord]);
  const validations = {
    ipaddress: [{ type: "Required" }, { type: "IpAddress" }],
    human: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ipaddress,
          human,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTestform.replaceAll("__typename", ""),
            variables: {
              input: {
                id: testformRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TestformUpdateForm")}
      {...rest}
    >
      <TextField
        label="Ipaddress"
        isRequired={true}
        isReadOnly={false}
        value={ipaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ipaddress: value,
              human,
            };
            const result = onChange(modelFields);
            value = result?.ipaddress ?? value;
          }
          if (errors.ipaddress?.hasError) {
            runValidationTasks("ipaddress", value);
          }
          setIpaddress(value);
        }}
        onBlur={() => runValidationTasks("ipaddress", ipaddress)}
        errorMessage={errors.ipaddress?.errorMessage}
        hasError={errors.ipaddress?.hasError}
        {...getOverrideProps(overrides, "ipaddress")}
      ></TextField>
      <SwitchField
        label="Human"
        defaultChecked={false}
        isDisabled={false}
        isChecked={human}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ipaddress,
              human: value,
            };
            const result = onChange(modelFields);
            value = result?.human ?? value;
          }
          if (errors.human?.hasError) {
            runValidationTasks("human", value);
          }
          setHuman(value);
        }}
        onBlur={() => runValidationTasks("human", human)}
        errorMessage={errors.human?.errorMessage}
        hasError={errors.human?.hasError}
        {...getOverrideProps(overrides, "human")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || testformModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || testformModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
