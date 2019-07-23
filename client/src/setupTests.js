/*
==================================================
 @<COPYRIGHT>@
==================================================
 File description:
    This is test setup file.

    File   : src/setUoTests.js
    Module : Client

=============================================================
 date            name                  description of change

 07/23/2019      Mallika Chakraborty    Initial cration
=============================================================*/
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});