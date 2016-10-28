import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import InfoBox from '../src/app/components/widget/InfoBox';

describe("InfoBox - suite", function() {
    const wrapper = shallow(<InfoBox />);

    it('should be renders one <InfoBox /> component', () => {
        expect(wrapper).to.have.length(1);
    });

    it('shoud be contains only one <className="info-box" />', () => {
        expect(wrapper.find('.info-box').length).to.equal(1);
    });

    it('should be contains only one <className="info-box-content">', () => {
        expect(wrapper.find('.info-box-content')).to.have.length(1);
    });
});
