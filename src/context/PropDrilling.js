import React from 'react';

class Parent extends React.Component {
  render() {
    const prop = 'prop';
    return (
      <div>
        <h1>Prop drilling</h1>
        <ChildrenLevelOne prop={prop} />
      </div>
    );
  }
}

const ChildrenLevelOne = ({ prop }) => <ChildrenLevelTwo prop={prop} />;

const ChildrenLevelTwo = ({ prop }) => <ChildrenLevelThree prop={prop} />;

const ChildrenLevelThree = ({ prop }) => <h2>{prop}</h2>;

export default Parent;
