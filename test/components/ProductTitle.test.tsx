import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('should display the component correctly with personalizable title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the component with product title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
