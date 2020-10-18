import React from 'react';

class Parent extends React.Component {
  render() {
    const prop = 'prop';
    return <ChildrenLevelOne prop={prop} />;
  }
}

const ChildrenLevelOne = ({ prop }) => <ChildrenLevelTwo prop={prop} />;

const ChildrenLevelTwo = ({ prop }) => <ChildrenLevelThree prop={prop} />;

const ChildrenLevelThree = ({ prop }) => <h1>{prop}</h1>;

export default Parent;
