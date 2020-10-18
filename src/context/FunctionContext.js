import React from 'react';

const CustomContext = React.createContext();

const Parent = () => (
  <CustomContext.Provider value={'function prop'}>
    <h1>Function</h1>
    <ChildrenLevelOne />
  </CustomContext.Provider>
);

const ChildrenLevelOne = () => <ChildrenLevelTwo />;

const ChildrenLevelTwo = () => <ChildrenLevelThree />;

const ChildrenLevelThree = () => {
  const prop = React.useContext(CustomContext);

  return <h2>{prop}</h2>;
};

export default Parent;
