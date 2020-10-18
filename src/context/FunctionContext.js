import React from 'react';

const CustomContext = React.createContext();

const Parent = () => (
  <CustomContext.Provider value={'function prop'}>
    <ChildrenLevelOne />
  </CustomContext.Provider>
);

const ChildrenLevelOne = () => <ChildrenLevelTwo />;

const ChildrenLevelTwo = () => <ChildrenLevelThree />;

const ChildrenLevelThree = () => {
  const prop = React.useContext(CustomContext);

  return <h1>{prop}</h1>;
};

export default Parent;
