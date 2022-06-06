import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/product';

describe('ProductImage', () => {
  test('should display the componente correctly with url img ', () => {
    const wrapper = renderer.create(<ProductImage img="./coffee-img.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the component with product iamge', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
