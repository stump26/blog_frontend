import React, { Component, createContext } from 'react';

export const DarkModeContext = createContext(false);
export const UserInfoContext = createContext({
  userId: '',
  username: '',
  authority: null,
});
// export const PreloadContext = createContext(null);
// export const withPreload = (callback) => (WrappedComponent) => {
//   class WithPreload extends Component {
//     static contextType = PreloadContext;

//     constructor(props, context) {
//       super(props);
//       if (context === null) return; // 값이 null 이면 아무것도 하지 않음
//       context.push({ callback, props });
//     }

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }
//   return WithPreload;
// };
