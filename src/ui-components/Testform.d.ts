/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestformInputValues = {
    Field0?: string;
    Field1?: boolean;
    Field2?: string;
    ipaddress?: string;
    human?: boolean;
};
export declare type TestformValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<boolean>;
    Field2?: ValidationFunction<string>;
    ipaddress?: ValidationFunction<string>;
    human?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestformOverridesProps = {
    TestformGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field2?: PrimitiveOverrideProps<SelectFieldProps>;
    ipaddress?: PrimitiveOverrideProps<TextFieldProps>;
    human?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TestformProps = React.PropsWithChildren<{
    overrides?: TestformOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestformInputValues) => TestformInputValues;
    onSuccess?: (fields: TestformInputValues) => void;
    onError?: (fields: TestformInputValues, errorMessage: string) => void;
    onChange?: (fields: TestformInputValues) => TestformInputValues;
    onValidate?: TestformValidationValues;
} & React.CSSProperties>;
export default function Testform(props: TestformProps): React.ReactElement;
