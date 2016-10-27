import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import InfoBox from '../src/app/components/widget/InfoBox';

describe("InfoBox - suite", function() {
    it("contains spec with an expectation", function() {
        expect(mount(<InfoBox />).find('.info-box').length).to.equal(1);
    });

    // it("contains spec with an expectation", function() {
    //     expect(shallow(<Foo />).is('.foo')).to.equal(true);
    // });
    //
    // it("contains spec with an expectation", function() {
    //     expect(mount(<Foo />).find('.foo').length).to.equal(1);
    // });
});
