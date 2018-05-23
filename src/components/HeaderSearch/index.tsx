import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {AutoComplete, Icon, Input} from 'antd';
import classNames from 'classnames';
import * as  styles from './style.less';

export interface IHeaderSearchProps {
    placeholder?: string;

    dataSource?: string[];

    onSearch?: (value: string) => void;

    onChange?: (value: string) => void;

    onPressEnter?: (value: string) => void;

    style?: React.CSSProperties;

    className?: string;

    defaultOpen?: any
}


export default class HeaderSearch extends PureComponent<IHeaderSearchProps, any> {

    private input: any;

    private timeout: any;

    constructor(props: IHeaderSearchProps, context: any) {
        super(props, context);
    }

    static defaultProps = {
        defaultActiveFirstOption: false,
        onPressEnter: () => {
        },
        onSearch: () => {
        },
        className: '',
        placeholder: '',
        dataSource: [],
        defaultOpen: false,
    };
    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        onSearch: PropTypes.func,
        onPressEnter: PropTypes.func,
        defaultActiveFirstOption: PropTypes.bool,
        dataSource: PropTypes.array,
        defaultOpen: PropTypes.bool,
    };
    state = {
        searchMode: this.props.defaultOpen,
        value: '',
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    onKeyDown = e => {
        if (e.key === 'Enter') {
            this.timeout = setTimeout(() => {
                this.props.onPressEnter(this.state.value); // Fix duplicate onPressEnter
            }, 0);
        }
    };
    onChange = (value: string) => {
        this.setState({value});
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };
    enterSearchMode = () => {
        this.setState({searchMode: true}, () => {
            if (this.state.searchMode) {
                this.input.focus();
            }
        });
    };
    leaveSearchMode = () => {
        this.setState({
            searchMode: false,
            value: '',
        });
    };

    render() {
        const {className, placeholder, ...restProps} = this.props;
        delete (restProps as any).defaultOpen; // for rc-select not affected
        const inputClass = classNames(styles.input, {
            [styles.show]: this.state.searchMode,
        });
        return (
            <span className={classNames(className, styles.headerSearch)} onClick={this.enterSearchMode}>
        <Icon type="search" key="Icon"/>
        <AutoComplete
            key="AutoComplete"
            {...restProps as any}
            className={inputClass}
            value={this.state.value}
            onChange={this.onChange}
        >
          <Input
              placeholder={placeholder}
              ref={node => {
                  this.input = node;
              }}
              onKeyDown={this.onKeyDown}
              onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
        );
    }
}
