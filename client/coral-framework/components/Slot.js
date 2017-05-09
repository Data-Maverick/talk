import React from 'react';
import cn from 'classnames';
import styles from './Slot.css';
import {connect} from 'react-redux';
import {getSlotElements} from 'coral-framework/helpers/plugins';

function Slot ({fill, inline = false, plugin_config: {debug, ...config}, ...rest}) {
  return (
    <div className={cn({[styles.inline]: inline, [styles.debug]: debug})}>
      {getSlotElements(fill, {...config, ...rest})}
    </div>
  );
}

Slot.propTypes = {
  fill: React.PropTypes.string
};

const mapStateToProps = ({config: {plugin_config = {}}}) => ({plugin_config});

export default connect(mapStateToProps, null)(Slot);

