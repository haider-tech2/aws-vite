/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TestformUpdateFormInputValues = {
    ipaddress?: string;
    human?: boolean;
};
export declare type TestformUpdateFormValidationValues = {
    ipaddress?: ValidationFunction<string>;
    human?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestformUpdateFormOverridesProps = {
    TestformUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ipaddress?: PrimitiveOverrideProps<TextFieldProps>;
    human?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TestformUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestformUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testform?: any;
    onSubmit?: (fields: TestformUpdateFormInputValues) => TestformUpdateFormInputValues;
    onSuccess?: (fields: TestformUpdateFormInputValues) => void;
    onError?: (fields: TestformUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestformUpdateFormInputValues) => TestformUpdateFormInputValues;
    onValidate?: TestformUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestformUpdateForm(props: TestformUpdateFormProps): React.ReactElement;
