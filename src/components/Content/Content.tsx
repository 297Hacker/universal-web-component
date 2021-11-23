import React from 'react';
// import styled from 'styled-components';
//
// type wrappedProps = {
//     section: {}
// }
export const Content = (WrappedComponent: any, props: any) => {
    return (children:{}) => (
      <WrappedComponent {...props}>{children}</WrappedComponent>
    );
};