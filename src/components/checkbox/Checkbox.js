import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class Checkbox extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        value: null,
        name: null,
        checked: false,
        style: null,
        className: null,
        disabled: false,
        onChange: null,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
        checked: PropTypes.bool.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onClick(e) {
        if(!this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked
            });
        }
    }

    onFocus(e) {
        DomHandler.addClass(this.box, 'ui-state-focus');
    }

    onBlur(e) {
        DomHandler.removeClass(this.box, 'ui-state-focus');
    }

    render() {
        let containerClass = classNames('ui-chkbox ui-widget', this.props.className);
        let boxClass = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active': this.props.checked, 'ui-state-disabled': this.props.disabled});
        let iconClass = classNames('ui-chkbox-icon ui-c', {'fa fa-check': this.props.checked});
        
        return (
            <div id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick} onContextMenu={this.props.onContextMenu} onMouseDown={this.props.onMouseDown}>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox" id={this.props.inputId} name={this.props.name} checked={this.props.checked} onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} />
                </div>
                <div className={boxClass} ref={(el) => { this.box = el; }}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}