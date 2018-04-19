import React from 'react';
import classNames from 'classnames';
import * as styles from './style.scss';
import {ReactBaseProps} from "wuxp_react_dynamic_router/src/model/model/ReactBaseProps";


export interface GlobalFooterProps extends ReactBaseProps {
    links?: Array<{
        key: string,
        title: React.ReactNode;
        href: string;
        blankTarget?: boolean;
    }>;
    copyright?: React.ReactNode;

}

export default class GlobalFooter extends React.Component<GlobalFooterProps, any> {

    render() {
        const clsString = classNames(styles.globalFooter, this.props.className);
        const {links, copyright} = this.props;
        return (
            <div className={clsString}>
                {links && (
                    <div className={styles.links}>
                        {links.map(link => (
                            <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
                                {link.title}
                            </a>
                        ))}
                    </div>
                )}
                {copyright && <div className={styles.copyright}>{copyright}</div>}
            </div>
        );
    }

}

// export default ({ className, links, copyright }) => {
//   const clsString = classNames(styles.globalFooter, className);
//   return (
//     <div className={clsString}>
//       {links && (
//         <div className={styles.links}>
//           {links.map(link => (
//             <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
//               {link.title}
//             </a>
//           ))}
//         </div>
//       )}
//       {copyright && <div className={styles.copyright}>{copyright}</div>}
//     </div>
//   );
// };
