import { Breadcrumb, BreadcrumbProps } from '@components/breadcrumb/Breadcrumb'

export default {
  title: 'Components/Basic/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    vitest: {
      testFile: "List.test.tsx"
    }
  },
  tags: ['autodocs'],
  argType: {
  }
}

const breadcrumbTrace = [
  { text: 'Home', url: '/' },
  { text: 'Products', url: '/products' },
  { text: 'Category', url: '/products/category' },
  { text: 'Product Details', url: '/products/category/product-123' },
]

export const Default = (args: BreadcrumbProps) => (
  <Breadcrumb {...args} />
)

Default.args = {
  breadcrumbTrace: breadcrumbTrace
}
