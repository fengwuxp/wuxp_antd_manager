import React from 'react'
import {Editor} from 'slate-react'
import State from 'slate'

/**
 * 富文本示例
 * 使用 slate
 * github：https://github.com/ianstormtaylor/slate
 * 中文文档 ：https://doodlewind.github.io/slate-doc-cn/walkthroughs/installing-slate.html
 */
// console.log(State);
// const initialState = State.fromJSON({
//     document: {
//         nodes: [
//             {
//                 kind: 'block',
//                 type: 'paragraph',
//                 nodes: [
//                     {
//                         kind: 'text',
//                         ranges: [
//                             {
//                                 text: 'A line of text in a paragraph.'
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// });

export default class SlateRichTextDemo extends React.Component<any, any> {

// 设置应用创建时的初始状态。
    state = {
        state: {
            state: {},
            // 为应用 state 添加 "schema" 以传入编辑器
            // schema: {
            //     nodes: {
            //         code: CodeNode
            //     }
            // }
        }
    };

    // 发生变更时，使用新的编辑器状态更新应用的 React 状态。
    onChange = ({state}) => {
        console.log(state);
        this.setState({state})
    };

    // 定义一个新的回调函数，在按键时记录下按下的 key code。
    onKeyDown = (event, data, change) => {
        console.log(event.which)
    };

    // 渲染编辑器。
    render() {
        return (
            <Editor
                state={this.state.state}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
            />
        )
    }

}
