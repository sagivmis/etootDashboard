import { StyleSheet } from "react-native"
import colors from "../config/colors"

const inputStyle = StyleSheet.create({
  formLabel: {
    width: "20%",
    fontSize: 18,
    fontWeight: "500"
  },

  input: {
    height: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderColor: "transparent",
    borderRadius: 5
  },

  inputStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: "transparent",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5
  },
  doubleInputStack: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  }
})

export default inputStyle
