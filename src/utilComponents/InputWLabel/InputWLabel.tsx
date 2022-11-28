import { TextInput, View, Text, KeyboardTypeOptions } from "react-native"
import React, { Dispatch, SetStateAction } from "react"
import { globalStyle, inputStyle } from "../../styles"

interface IInputWLabel {
  label?: string;
  onChangeText?: Dispatch<SetStateAction<string>>
  value?: string;
  defaultValue?: string;
  placeholder?: string
  keyboardType?: KeyboardTypeOptions;
  baseStylesInput?: {},
  customStylesInput?: { width: string },
  baseStylesLabel?: {},
  customStylesLabel?: {},
  customStylesInputStack?: {},
  halfWidth?: boolean,
  doubleInputStack?: boolean,
  labelA?: string,
  labelB?: string,
  onChangeTextA?: Dispatch<SetStateAction<string>>,
  onChangeTextB?: Dispatch<SetStateAction<string>>,
  darkMode?: boolean,
  afterChangeCallback?: () => void;
}
const InputWLabel = (props: IInputWLabel) => {
  const {
    label,
    onChangeText,
    value,
    defaultValue,
    placeholder,
    keyboardType,
    baseStylesInput = {},
    customStylesInput = { width: '70%' },
    baseStylesLabel = {},
    customStylesLabel = {},
    customStylesInputStack = {},
    halfWidth,
    doubleInputStack,
    labelA,
    labelB,
    onChangeTextA,
    onChangeTextB,
    darkMode,
    afterChangeCallback
  } = props

  if (!label) customStylesInput.width = "95%"

  return (
    <View style={doubleInputStack ? inputStyle.doubleInputStack : null}>
      <View
        style={[
          inputStyle.inputStack,
          customStylesInputStack,
          halfWidth ? { width: `50%` } : null,
          doubleInputStack ? { marginRight: `5%`, width: `47.5%` } : null
        ]}
      >
        {(label || (labelA && labelB)) && (
          <Text
            style={[
              inputStyle.formLabel,
              customStylesLabel,
              halfWidth ? { width: `40%` } : null,
              darkMode ? globalStyle.textDark : globalStyle.text
            ]}
          >
            {label || labelA}
          </Text>
        )}
        <TextInput
          style={[
            inputStyle.input,
            customStylesInput,
            halfWidth ? { width: `40%` } : null,
            darkMode ? globalStyle.textDark : globalStyle.text
          ]}
          onChangeText={onChangeText ? onChangeText : onChangeTextA}
          onEndEditing={afterChangeCallback}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
      {doubleInputStack && (
        <View
          style={[
            inputStyle.inputStack,
            customStylesInputStack,
            halfWidth ? { width: `50%` } : null,
            doubleInputStack ? { marginRight: `5%`, width: `47.5%` } : null
          ]}
        >
          {(label || (labelA && labelB)) && (
            <Text
              style={[
                inputStyle.formLabel,
                customStylesLabel,
                halfWidth ? { width: `40%` } : null,
                darkMode ? globalStyle.textDark : globalStyle.text
              ]}
            >
              {label || labelB}
            </Text>
          )}
          <TextInput
            style={[
              inputStyle.input,
              customStylesInput,
              halfWidth ? { width: `40%` } : null,
              darkMode ? globalStyle.textDark : globalStyle.text
            ]}
            onChangeText={onChangeText ? onChangeText : onChangeTextB}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        </View>
      )}
    </View>
  )
}

export default InputWLabel
