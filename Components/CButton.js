import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PRIMARY_COLOR = "#25aae1";
const SECONDARY_COLOR = "#0befe5";
const TERTIARY_COLOR = "#051025";
const DANGER_COLOR = "#ff3d8c";

const styles = StyleSheet.create({
  // Container Styles
  containerDefault: {
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10
  },
  containerPrimary: {
    backgroundColor: PRIMARY_COLOR,
    borderColor: PRIMARY_COLOR
  },
  containerPrimaryOutline: {
    backgroundColor: "transparent"
  },
  containerDanger: {
    backgroundColor: DANGER_COLOR,
    borderColor: DANGER_COLOR
  },
  containerDangerOutline: {
    backgroundColor: "transparent"
  },
  containerSecondary: {
    backgroundColor: SECONDARY_COLOR,
    borderColor: SECONDARY_COLOR
  },
  containerSecondaryOutline: {
    backgroundColor: "transparent"
  },
  containerLarge: {
    paddingVertical: 15
  },
  containerSmall: {
    paddingVertical: 5
  },
  containerDisabled: {
    opacity: 0.65
  },

  // TextStyles
  textDefault: {
    fontSize: 16,
    fontWeight: "800",
    color: TERTIARY_COLOR
  },
  textPrimary: {},
  textPrimaryOutline: {
    color: PRIMARY_COLOR
  },
  textDanger: {},
  textDangerOutline: {
    color: DANGER_COLOR
  },
  textSecondary: {},
  textSecondaryOutline: {
    color: SECONDARY_COLOR
  },
  textLarge: {
    fontSize: 20
  },
  textSmall: {
    fontSize: 14
  },
  textDisabled: {}
});

const getStyles = ({ size, theme, outline, disabled }) => {
  const containerStyles = [styles.containerDefault];
  const textStyles = [styles.textDefault];

  if (size === "large") {
    containerStyles.push(styles.containerLarge);
    textStyles.push(styles.textLarge);
  } else if (size === "small") {
    containerStyles.push(styles.containerSmall);
    textStyles.push(styles.textSmall);
  }

  if (theme === "secondary") {
    containerStyles.push(styles.containerSecondary);
    textStyles.push(styles.textSecondary);

    if (outline) {
      containerStyles.push(styles.containerSecondaryOutline);
      textStyles.push(styles.textSecondaryOutline);
    }
  } else {
    containerStyles.push(styles.containerPrimary);
    textStyles.push(styles.textPrimary);

    if (outline) {
      containerStyles.push(styles.containerPrimaryOutline);
      textStyles.push(styles.textPrimaryOutline);
    }
  }

  if (theme === "danger") {
    containerStyles.push(styles.containerDanger);
    textStyles.push(styles.textDanger);

    if (outline) {
      containerStyles.push(styles.containerDangerOutline);
      textStyles.push(styles.textDangerOutline);
    }
  } else {
    containerStyles.push(styles.containerPrimary);
    textStyles.push(styles.textPrimary);

    if (outline) {
      containerStyles.push(styles.containerPrimaryOutline);
      textStyles.push(styles.textPrimaryOutline);
    }
  }

  if (disabled) {
    containerStyles.push(styles.containerDisabled);
    textStyles.push(styles.textDisabled);
  }

  return { textStyles, containerStyles };
};

class CButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    size: PropTypes.oneOf(["small", "default", "large"]),
    theme: PropTypes.oneOf(["primary", "secondary", "danger", "disabled"]),
    outline: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    size: "default",
    theme: "primary",
    outline: false,
    disabled: false
  };

  render() {
    const { onPress, text, disabled, ...rest } = this.props;
    const { textStyles, containerStyles } = getStyles({ disabled, ...rest });

    return (
      <TouchableOpacity
        onPress={onPress}
        style={containerStyles}
        disabled={disabled}
      >
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default CButton;
