import { css, StyleSheet } from "aphrodite";
import * as React from "react";

/**
 * A loading indication which displays the Tylt logo
 * @returns {xml} The Loading component
 */
class Loading extends React.Component<any, any> {
  /**
   * Controls updates and rendering
   * @returns {boolean} The evaluation to determine whether the component should
   * update when its props change
   */
  shouldComponentUpdate = () => true;

  render() {
    return <div className={css(styles.loading)}>LOADING</div>;
  }
}

const styles = StyleSheet.create({
  loading: {}
});

export default Loading;
