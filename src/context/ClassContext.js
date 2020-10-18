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
        <ChildrenLevelOne />
      </CustomContext.Provider>
    );
  }
}

const ChildrenLevelOne = () => <ChildrenLevelTwo />;

const ChildrenLevelTwo = () => <ChildrenLevelThree />;

const ChildrenLevelThree = () => (
  <CustomContext.Consumer>
    {prop => <h1>{prop.title}</h1>}
  </CustomContext.Consumer>
);

export default Parent;
