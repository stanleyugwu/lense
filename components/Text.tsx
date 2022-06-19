import { Text as DefaultText, TextProps as RNTextProps } from "react-native";
import { textStyles, TextStyleType } from "../lib/appStyles";

/**
 * This component renders texts but with ability to render different types of text e.g headings, depending
 * on the type required via `type` prop.
 * This `Text` component is to be used instead of the `Text` component which `react-native exports`.
 * There are no modifications or optimisations made except that you can choose the type of text you would like to show.
 * ## Example
 * @example
 * import Text from './components/Text';
 *
 * const MyComponent = () => <Text type="heading" />
 */
const Text = ({ style, type = "body", ...otherProps }: TextProps) => (
  <DefaultText style={[textStyles[type], style]} {...otherProps} />
);

export type TextProps = RNTextProps & { type?: TextStyleType };
export default Text;
