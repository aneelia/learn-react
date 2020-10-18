import React from 'react';

const CustomContext = React.createContext();

class Parent extends React.Component {
  state = {
    value: {
      title: 'class prop',
    },
  };

  render() {
    return (
      <CustomContext.Provider value={this.state.value}>
        <h1>Class</h1>
        <ChildrenLevelOne />
      </CustomContext.Provider>
    );
  }
}

const ChildrenLevelOne = () => <ChildrenLevelTwo />;

const ChildrenLevelTwo = () => <ChildrenLevelThree />;

const ChildrenLevelThree = () => (
  <CustomContext.Consumer>
    {prop => <h2>{prop.title}</h2>}
  </CustomContext.Consumer>
);

export default Parent;
