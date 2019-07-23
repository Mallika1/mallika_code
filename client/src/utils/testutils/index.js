/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This is a utility file contains common functions for test.

    File   : src/utils/index.js
    Module : Utils 

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
