# DJ-Product-Card

This is a release test package in NPM.

### Douglas Juárez

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} fromo 'do-product-card'

```

```

<ProductCard
    product={product}
    initialValues={{
            count: 6,
            // maxCount: 10,
        }} >
    {({ reset, isMaxCountReached, increaseBy, count }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>

```
