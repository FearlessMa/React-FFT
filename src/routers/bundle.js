/*
 * @Author: mhc 
 * @Date: 2018-05-08 16:48:09 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-17 13:29:39
 */

import React from 'react';


// Bundle组件会接受一个名为 load 的 props
// load值一是一个组件异步加载的方法 load -> function (cb) {...cb(/* 异步加载的组件 */)},由bundle-loader封装
// 这个方法需要传入一个回调函数作为参数
// 回调函数会在在方法内异步接收加载完的组件

export class Bundle extends React.Component {

    constructor(...arg) {
        super(...arg);
        this.state = {
            mod: null,
        }
    }

    componentDidMount() {
        // 加载初始状态
        this.load(this.props);
        // console.log('this.props.load');
        // console.log(this.props.load);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    // load(props) {
    //     this.setState({
    //         mod: null
    //     });
    //     // 传入组件的组件  
    //     props.load(mod => {
    //         this.setState({
    //             mod: mod.default ? mod.default : mod
    //         });
    //     });
    // }
    // 更改 load 方法为异步函数
    async load(props) {
        this.setState({
            mod: null
        });
        /*
          使用 props.load() 返回的是一个 promise
         */
        const mod = await props.load();
        // console.log('mod')
        // console.log(mod)
        this.setState({
            mod: mod.default ? mod.default : mod
        });
    }
    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }

}