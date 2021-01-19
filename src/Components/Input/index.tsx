import React, { useEffect, useRef, forwardRef } from "react";
import { TextInputProps, TextInput, Text } from "react-native";
import { useField } from "@unform/core";
import { View2 } from "./styles";
import normalize from "../../utils/normalize";
interface InputProps extends TextInputProps {
  name: string;
  className?: string;
  disable?: string;
  type?: string;
}

interface InputValuereference {
  value?: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);

  const {
    registerField,
    defaultValue = "",
    fieldName,
    error,
    clearError,
  } = useField(name);
  const inputValueRef = useRef<InputValuereference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <View2>
        <TextInput
          style={{ textAlign: "left", flex: 1, width: normalize(300) }}
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#666360"
          defaultValue={defaultValue}
          onFocus={clearError}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          className={error ? "has-error" : ""}
          {...rest}
        />
      </View2>
      {error && (
        <Text
          style={{
            fontSize: normalize(10),
            color: "#ff0000",
            marginTop: normalize(5),
          }}
        >
          {error}
        </Text>
      )}
    </>
  );
};

export default forwardRef(Input);
