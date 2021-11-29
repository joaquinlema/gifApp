import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import '@testing-library/jest-dom';

describe('Pruebas sobre gif grid item', () => {

    const title = 'title test';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />
    );


    test('Comparamos contra snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Comprobamos que tenga P title', () => {

        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);
    });

    test('Comprobamos que tenga img title y alt', () => {

        const img = wrapper.find('img');

        expect(img.props().src.trim()).toBe(url);
        expect(img.props().alt.trim()).toBe(title);
    });

    test('Comprobamos que tenga div copn clase animate__fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.props().className.includes('animate__fadeIn')).toBe(true);
    });

});
